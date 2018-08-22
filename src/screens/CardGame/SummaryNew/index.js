import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView,
    ImageBackground,
    PanResponder,
    Animated,
    Alert,
    Share,
} from 'react-native';
import {Colors, Images} from '@theme';
import Styles from './styles';

import { postCardGameAnswers } from "@api";
import { Loader, Button, ImageButton, Text, Card, } from '@components';
import { copy } from '@utils';
import { deviceWidth, deviceHeight } from "@ResponsiveDimensions";

import {getSharingHTMLFromResult} from "./HtmlResult";
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Mailer from 'react-native-mail';
import store from '../../../Store';

export default class Summary extends Component {
    constructor(props) {
        super(props);
        const {cardGame} = this.props.navigation.state.params

        this.state = ({
            cardGame: cardGame,
            groupedCardByLevel: this.groupedCardByLevel(cardGame),
            loaderVisible: false,
            modalVisible: {
                exported: false,
                emailSent: false,
            },
            draggingItem: null,
            pan: new Animated.ValueXY(),
        });
        this.levelDropZones = [];
    }

    componentDidMount() {
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => Boolean(this.state.draggingItem),
            onMoveShouldSetPanResponder: () => Boolean(this.state.draggingItem),
            onPanResponderGrant: (e, gestureState) => {
                // adjusting delta value
                this.state.pan.setValue({x: 0, y: 0});
                console.log("onPanResponderGrant");
            },
            onPanResponderMove: Animated.event([
                null, 
                { 
                    dx: this.state.pan.x, 
                    dy: this.state.pan.y 
                }
            ]),
            onPanResponderRelease: (e, gestureState) => {
                console.log("onPanResponderRelease", gestureState);
                let {moveX, moveY} = gestureState;
                this.levelDropZones.forEach((dropZone, levelIndex) => {
                    dropZone.measure( (fx, fy, width, height, px, py) => {
                        let sX = px + width;
                        let sY = py + height;
                        if(moveX > px && moveX < sX && moveY > py && moveY < sY){
                            console.log("selected drop zone", levelIndex);
                            this.onSelectedLevel(this.state.draggingItem.cardIndex, levelIndex);
                        }
                    })
                })
                setTimeout(()=>{
                    this.setState({draggingItem: null});
                }, 100)
            },
        });
    }

    openModal(modal){
        this.closeModal()
        setTimeout(() => {
            this.setState({
                modalVisible: {
                    exported: false,
                    emailSent: false,
                    ...modal,
                }
            })                
        }, 500);
    }

    closeModal(){
        this.setState({
            modalVisible: {
                exported: false,
                emailSent: false,
            }
        })
    }

    groupedCardByLevel(cardGame){
        var groupedCardByLevel = {"-1": [], "0": [], "1": [], "2": []}
        for (const card of cardGame.cards) {
            groupedCardByLevel[card.selectedLevel].push(card)
        }
        return groupedCardByLevel
    }

    onSelectedLevel(cardIndex, level){
        let cardGame = copy(this.state.cardGame)
        cardGame.cards[cardIndex].selectedLevel = level

        this.setState({
            cardGame: cardGame,
            groupedCardByLevel: this.groupedCardByLevel(cardGame),
        })
    }

    onStarSelected(cardIndex){
        let cardGame = copy(this.state.cardGame)
        let star = cardGame.cards[cardIndex].star 
        var starCount = 0
        for (const card of cardGame.cards) {
            if (card.star == true) starCount ++;
        }
        if (!star && starCount >= 3) return

        cardGame.cards[cardIndex].star = !star

        this.setState({
            cardGame: cardGame,
            groupedCardByLevel: this.groupedCardByLevel(cardGame),
        })
    }

    onExit = async () => {
        this.setState({loaderVisible: true})
        await postCardGameAnswers(this.state.cardGame)
        this.setState({loaderVisible: false})

        const {navigate, goBack} = this.props.navigation
        setTimeout(() => {
            Alert.alert(
                'Are you sure?',
                'Are you sure to exit without share the results?',
                [
                  {text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'YES', onPress: () => {
                    goBack(store.routesInStack[0])
                    store.activeRoute = null
                    store.routesInStack = []
                  }},
                ],
                { cancelable: false }
            )                
        }, 500);
    }

    onShareEmail = async () => {

        var html = getSharingHTMLFromResult(this.state.cardGame)

        let options = {
            html: html,
            fileName: 'results',
            directory: 'docs',
        };
    
        let file = await RNHTMLtoPDF.convert(options)
        Mailer.mail({
            subject: 'Card game Results',
            recipients: [],
            body: '<b>Resuls as pdf attach</b>',
            isHTML: true,
            attachment: {
              path: file.filePath,  // The absolute path of the file from which to read data.
              type: 'pdf',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
              name: 'card-game-results.pdf',   // Optional: Custom filename for attachment
            }
        }, (error, event) => {
            console.log("mail", error, event)
            if(event == "sent"){
                this.openModal({emailSent: true})
            }
        });
    }

    onShareExport = async () => {
        var html = getSharingHTMLFromResult(this.state.cardGame)
        let options = {
            html: html,
            fileName: 'results',
            directory: 'docs',
        };    
        let file = await RNHTMLtoPDF.convert(options)
        console.log(file.filePath);
        setTimeout( async () => {
            try {
                let res = await Share.share({
                    title: "Card game Results",
                    message: "Card game Results",
                    url: file.filePath,
                    subject: "Card game Results",
                })
                if(res.action == "sharedAction"){
                    this.openModal({exported: true})
                }
            } catch (error) {
                console.log('An error happened', error)
            }
        }, 500);
    }

    renderCardItem({item, index}){
        var cardItemStyle = {
        }
        if(item.selectedLevel < 2){
            // cardItemStyle.marginRight = 32            
        }
        let itemEl = null;
        var cardItem = 
            <View style={Styles.cardItemWithStar}>
                {(item.selectedLevel == 2) &&
                    <ImageButton source={(item.star)?Images.star:Images.starEmpty} style={Styles.itemLevelIcon} onPress={this.onStarSelected.bind(this, item.cardIndex)}/>                
                }
                <TouchableOpacity ref={ref=>itemEl=ref} style={[Styles.cardItem, cardItemStyle]} onLongPress={(e)=>{
                    itemEl.measure( (fx, fy, width, height, px, py) => {
                        this.setState({draggingItem: {
                            ...item,
                            width,
                            height,
                            px,
                            py,
                        }});
                    })
                }}>
                    <Image source={Images.threeDots} style={Styles.dragIcon}/>
                    <Text style={Styles.question}>{item.question}</Text>
                    {(item.selectedLevel != 0) &&
                        <ImageButton source={Images.levelNot} style={Styles.itemLevelIcon} onPress={this.onSelectedLevel.bind(this, item.cardIndex, 0)}/>
                    }
                    {(item.selectedLevel != 1) &&
                        <ImageButton source={Images.levelSomewhat} style={Styles.itemLevelIcon} onPress={this.onSelectedLevel.bind(this, item.cardIndex, 1)}/>
                    }
                    {(item.selectedLevel != 2) &&
                        <ImageButton source={Images.levelVery} style={Styles.itemLevelIcon} onPress={this.onSelectedLevel.bind(this, item.cardIndex, 2)}/>
                    }
                </TouchableOpacity>
            </View>
        return cardItem
    }

    render() {
        const {navigate} = this.props.navigation

        const {draggingItem} = this.state;
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }
        return (
            <ImageBackground source={Images.bg_navigation} style={Styles.container}>
                <View 
                    {...this.panResponder.panHandlers}
                    style={{flex: 1}}
                >
                    <Loader loading={this.state.loaderVisible}/>
                    <ScrollView contentContainerStyle={Styles.scrollView}>
                        <Card topbar style={Styles.titleView}>
                            <Text mediumLarge center color={Colors.Red} style={Styles.title}>Your end-of-life priorites</Text>
                        </Card>
                        {(this.state.groupedCardByLevel[2].length > 0) &&
                        <Card style={Styles.levelContainer} contentStyle={{padding: 0}}>
                            <View style={Styles.importantBar}>
                                <Image source={Images.levelVery} style={Styles.levelIcon}/>
                                <Text light bold medium>Very important</Text>
                            </View>
                            <FlatList
                                style={Styles.flatList}
                                data = {this.state.groupedCardByLevel[2]}
                                renderItem = {this.renderCardItem.bind(this)}
                                keyExtractor = {(item, index) => index.toString()}
                            />
                        </Card>
                        }
                        {(this.state.groupedCardByLevel[1].length > 0) &&
                        <Card style={Styles.levelContainer} contentStyle={{padding: 0}}>
                            <View style={Styles.importantBar}>
                                <Image source={Images.levelSomewhat} style={Styles.levelIcon}/>
                                <Text light bold medium>Somewhat important</Text>
                            </View>
                            <FlatList
                                style={Styles.flatList}
                                data = {this.state.groupedCardByLevel[1]}
                                renderItem = {this.renderCardItem.bind(this)}
                                keyExtractor = {(item, index) => index.toString()}
                            />
                        </Card>
                        }
                        {(this.state.groupedCardByLevel[0].length > 0) &&
                        <Card style={Styles.levelContainer} contentStyle={{padding: 0}}>
                            <View style={Styles.importantBar}>
                                <Image source={Images.levelNot} style={Styles.levelIcon}/>
                                <Text light bold medium>Not important</Text>
                            </View>
                            <FlatList
                                style={Styles.flatList}
                                data = {this.state.groupedCardByLevel[0]}
                                renderItem = {this.renderCardItem.bind(this)}
                                keyExtractor = {(item, index) => index.toString()}
                            />
                        </Card>
                        }
                        {(this.state.groupedCardByLevel[-1].length > 0) &&
                        <Card style={Styles.levelContainer} contentStyle={{padding: 0}}>
                            <View style={Styles.importantBar}>
                                <Image source={Images.skip} style={Styles.levelIcon}/>
                                <Text light bold medium>Skipped</Text>
                            </View>
                            <FlatList
                                style={Styles.flatList}
                                data = {this.state.groupedCardByLevel[-1]}
                                renderItem = {this.renderCardItem.bind(this)}
                                keyExtractor = {(item, index) => index.toString()}
                            />
                        </Card>
                        }
                        <View style={Styles.saveView}>
                            <Text medium bold center color={Colors.Navy} style={Styles.saveTitle}>Save your results</Text>
                            <Text bold center style={{marginVertical: 8}}>Personal information will not be stored or used by Palliative Care Australia in any way. Read more here</Text>
                            <View style={{flexDirection: 'row', paddingHorizontal: 8, justifyContent: 'center'}}>
                                <Button dark bold buttonStyles={{paddingHorizontal: 32}} onPress={this.onShareExport}>Export</Button>
                                <Button dark bold buttonStyles={{paddingHorizontal: 32}} onPress={this.onShareEmail}>Email</Button>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={Styles.buttonBar}>
                        <Button light bold onPress={this.onExit}>Exit</Button>
                        <Button light bold>Add your owns</Button>
                        <View style={{flex: 1}}/>
                    </View>
                    {draggingItem &&
                        <View style={{backgroundColor: '#fffe', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0}}>
                            <Text medium center color={Colors.Navy} style={{marginHorizontal: deviceWidth(10), marginVertical: deviceWidth(5)}}>Drag and drop the card into your priority group, or simply release to cancel</Text>
                            <Animated.View style={[panStyle, {
                                position: 'absolute',
                                backgroundColor: Colors.backgroundSecondary,
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 8,
                                paddingRight: 0,
                                top: draggingItem.py - deviceHeight(6),
                                left: draggingItem.px,
                                width: draggingItem.width,
                                height: draggingItem.height,
                                zIndex: 9999,
                            }]}>
                                <Image source={Images.threeDots} style={Styles.dragIcon}/>
                                <Text style={Styles.question}>{this.state.draggingItem.question}</Text>
                                {(draggingItem.selectedLevel != 0) &&
                                    <ImageButton source={Images.levelNot} style={Styles.itemLevelIcon} onPress={this.onSelectedLevel.bind(this, draggingItem.cardIndex, 0)}/>
                                }
                                {(draggingItem.selectedLevel != 1) &&
                                    <ImageButton source={Images.levelSomewhat} style={Styles.itemLevelIcon} onPress={this.onSelectedLevel.bind(this, draggingItem.cardIndex, 1)}/>
                                }
                                {(draggingItem.selectedLevel != 2) &&
                                    <ImageButton source={Images.levelVery} style={Styles.itemLevelIcon} onPress={this.onSelectedLevel.bind(this, draggingItem.cardIndex, 2)}/>
                                }
                            </Animated.View>

                            <View style={Styles.dropLevelBar}>
                                <View style={Styles.dropLevelItem} ref={ref=>this.levelDropZones[0]=ref}>
                                    <Image source={Images.levelNot} style={Styles.dropLevelIcon}/>
                                    <Text bold medium color={Colors.Navy}>Not</Text>
                                </View>
                                <View style={Styles.dropLevelItem} ref={ref=>this.levelDropZones[1]=ref}>
                                    <Image source={Images.levelSomewhat} style={Styles.dropLevelIcon}/>
                                    <Text bold medium color={Colors.Navy}>Somewhat</Text>
                                </View>
                                <View style={Styles.dropLevelItem} ref={ref=>this.levelDropZones[2]=ref}>
                                    <Image source={Images.levelVery} style={Styles.dropLevelIcon}/>
                                    <Text bold medium color={Colors.Navy}>Very</Text>
                                </View>
                            </View>
                        </View>
                    }
                </View>
                <InfoAlert
                    visible={this.state.modalVisible.exported}
                    icon={Images.check}
                    message="Exported"
                    onCancel={()=>this.closeModal()}
                />
                <InfoAlert
                    visible={this.state.modalVisible.emailSent} 
                    icon={Images.check}
                    message="Email sent"
                    onCancel={()=>this.closeModal()}
                />
            </ImageBackground>
        );
    }
}