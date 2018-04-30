import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView,
    TextInput,
} from 'react-native';
import {Colors, Images} from '@theme';
import Styles from './styles';
import Button from '@button'
import Text from '@text'
import ProgressBar from '@progressbar'
import Choices from "@choices";
import ManyChoices from "@manychoices";

import { getCardGame} from "@api";
import { Loader } from '@components';
import DeviceInfo from 'react-native-device-info'

export default class SingleView extends Component {
    constructor(props) {
        super(props);
        const {cardIndex} = this.props.navigation.state.params
        this.state = ({
            cardIndex: cardIndex,
            cardTotalCount: 1,
            currentCard: {
                question: "",
                additional_info: "",
                question_audio_url: "",
            },
            loaderVisible: false,
        })
    }

    async componentDidMount() {

        const cd = await getCardGame(true)
        const firstCardGame = cd[0]
        const cards = firstCardGame.cards
        this.setState({
            cardTotalCount: cards.length,
            currentCard: cards[this.state.cardIndex],
        })
    }

    onSkip(){

    }

    onSelectedLevel(level){
        const {navigate} = this.props.navigation
        navigate("CDSingleView", {cardIndex: this.state.cardIndex+1})
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={Styles.container}>
                <Loader loading={this.state.loaderVisible}/>
                <View style={Styles.title}>
                    <Text mediumLarge bold center>How important is...</Text>
                </View>
                <View style={Styles.questionView}>
                    <Text medium center>{this.state.currentCard.question}</Text>
                </View>
                {this.state.currentCard.additional_info != "" &&
                    <Text center style={Styles.additionalInfo}>Addtional Info</Text>
                }
                <View style={Styles.levelBar}>
                    <TouchableOpacity style={Styles.levelItem} onPress={this.onSelectedLevel.bind(this, 0)}>
                        <Image source={Images.check} style={Styles.levelIcon}/>
                        <Text bold>NOT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.levelItem} onPress={this.onSelectedLevel.bind(this, 1)}>
                        <Image source={Images.check} style={Styles.levelIcon}/>
                        <Text bold>SOMEWHAT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.levelItem} onPress={this.onSelectedLevel.bind(this, 2)}>
                        <Image source={Images.check} style={Styles.levelIcon}/>
                        <Text bold>VERY</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.progress}>
                    <ProgressBar total={this.state.cardTotalCount} progress={this.state.cardIndex+1} style={Styles.progressBar}/>
                    <Text small center>Card {this.state.cardIndex+1} of {this.state.cardTotalCount}</Text>
                </View>
                <View style={Styles.buttonBar}>
                    <Button light onPress={()=>navigate("CDListView")}>LIST VIEW</Button>
                    <Button dark onPress={()=>{navigate("CDSingleView", {cardIndex: this.state.cardIndex+1})}}>SKIP</Button>
                    <Button dark>FINISH</Button>
                </View>
            </View>
        );
    }
}