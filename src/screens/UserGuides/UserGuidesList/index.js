import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView,
    AsyncStorage,
    ImageBackground,
    Dimensions
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Button from '@button'
import Footer from '@footer'
import { Loader } from '@components';
import { getUserGuides,updateTimeInterval } from "@api";
import moment from 'moment';
import {Colors} from '@theme';
var { width,height } = Dimensions.get('window');
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
var orientation = width > height ? 'LANDSCAPE' : 'PORTRAIT';

export default class UserGuidesList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            userguideIndexes: [],
            loaderVisible: true
        })
    }

    async componentDidMount() {
            try 
            {
                let value = await AsyncStorage.getItem('lastRefereshTimeUserGuide');

                if (value != null){
                  // do something 

                    var currrentTime = moment(new Date()).format("HH:mm:ss");
                    var startTime=moment(value, "HH:mm:ss");
                    var endTime=moment(currrentTime, "HH:mm:ss");
                    var duration = moment.duration(endTime.diff(startTime));
                    var difference = moment.utc(+duration).format('H');

                    if(difference >= updateTimeInterval)
                    {
                        await AsyncStorage.setItem('lastRefereshTimeUserGuide', currrentTime);
                        const ds = await getUserGuides()
                        const userguides = ds[0].guides

                        var userguideIndexes = [];
                        for(var i = 0; i < userguides.length; i ++){
                            userguideIndexes.push(userguides[i]);
                        }

                        this.setState({
                            userguideIndexes: userguideIndexes,
                            loaderVisible: false
                        })
                    }
                    else
                    {

                        const ds = await getUserGuides(true)
                        const userguides = ds[0].guides

                        var userguideIndexes = [];
                        for(var i = 0; i < userguides.length; i ++){
                            userguideIndexes.push(userguides[i]);
                        }

                        this.setState({
                            userguideIndexes: userguideIndexes,
                            loaderVisible: false
                        })
                    }   
                }
                else {
                  // do something else
                    var currrentTime = moment(new Date()).format("HH:mm:ss");
                    await AsyncStorage.setItem('lastRefereshTimeUserGuide', currrentTime); 
                    const ds = await getUserGuides()
                    const userguides = ds[0].guides

                    var userguideIndexes = [];
                    for(var i = 0; i < userguides.length; i ++){
                        userguideIndexes.push(userguides[i]);
                    }

                    this.setState({
                        userguideIndexes: userguideIndexes,
                        loaderVisible: false
                    })
                } 
            }
            catch (error) {
              // Error retrieving data
            }

            Dimensions.addEventListener('change', ({ window: { width, height } }) => {
            orientation = width > height ? 'LANDSCAPE' : 'PORTRAIT';
        });

      
    }

    renderUserGuideItem({item, index}){
        const {navigate} = this.props.navigation
        const first = index === 0;
        const second = index === 1;
        return (
            <View onLayout={this.onLayout.bind(this)}>
            {first ?
                <TouchableOpacity style={[Styles.firstrowItem,{width: width/2.47}]} onPress={()=>{navigate("DiscussionAndCardDetail", {userguideIndex: index})}}>
                    <View style={[Styles.firstrowView,{width: width/2.47}]}>
                        <View style={Styles.iconView}>
                            <Image source={require('../../../../assets/images/icon-cardgame.png')} resizeMode='stretch' style={Styles.iconCard}/>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={[Styles.cardtitle,{ color: Colors.Red,fontSize:  orientation === 'PORTRAIT' ? width/35 : height/35}]}>{item.title} </Text>
                              <Image source={require('../../../../assets/images/Red-left-arrow.png')} resizeMode='stretch'/>
                        </View>
                    </View>
                </TouchableOpacity>
                : second ?
                        <TouchableOpacity style={[Styles.firstrowItem,{width: width/2.47}]} onPress={()=>{navigate("DiscussionAndCardDetail", {userguideIndex: index})}}>
                            <View style={[Styles.firstrowView,{width: width/2.47}]}>
                                <View style={Styles.iconView}>
                                    <Image source={require('../../../../assets/images/icon-discussion-starter.png')} resizeMode='stretch' style={Styles.iconDuscussion}/>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text style={[Styles.cardtitle,{ color: Colors.Red,fontSize:  orientation === 'PORTRAIT' ? width/35 : height/35}]}>{item.title} </Text>
                                    <Image source={require('../../../../assets/images/Red-left-arrow.png')} resizeMode='stretch'/>
                                </View>
                            </View>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={[Styles.item,{width: width/2.47}]} onPress={()=>{navigate("UserGuidesDetail", {userguideIndex: index})}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={[Styles.cardtitle,{fontSize:  orientation === 'PORTRAIT' ? width/35 : height/35}]}>{item.title}</Text>
                                <Image source={require('../../../../assets/images/blue-left-arrow.png')} resizeMode='stretch' />
                            </View>
                        </TouchableOpacity>
            }
            </View>
        )
    }

    onLayout(e) {

        height = Dimensions.get('window').height;
        width = Dimensions.get('window').width;
         this.setState({
                        userguideIndexes: this.state.userguideIndexes,
                    })
        this.forceUpdate();
    }

    render() {
        const Piphone =  height-responsiveHeight(15.5);
        const Pipad =  height-responsiveHeight(14.5);
        const Pandroid =  height-responsiveHeight(16);
        const Lipad = height-responsiveHeight(14.9);
        const Lipone = height-responsiveHeight(13);
        const Landroid =  height-responsiveHeight(16);

       
        return (
            <View style={Styles.container}  onLayout={this.onLayout.bind(this)}>
                <ImageBackground source={require('../../../../assets/images/bg-how-to.jpg')} resizeMode='stretch' style={{ width: width,height: orientation === 'PORTRAIT' ? Platform.isPad ? Pipad : Platform.OS === 'android' ? Pandroid : Piphone  : Platform.isPad ? Lipad : Platform.OS === 'android' ? Landroid : Lipone }} >
                    <View style={Styles.scrollcontainer}> 
                        <ScrollView contentContainerStyle={Styles.scroll}>
                            <Loader loading={this.state.loaderVisible}/>
                            <View style={[Styles.itemTop,{ marginTop : width/35, width : width/1.2,}]}>
                                <View style={[Styles.itemTopView,{width : width/1.2,}]}>
                                    <Text style={[Styles.title,{fontSize:  orientation === 'PORTRAIT' ? width/20 : height/20}]}>How to</Text>
                                        <Text style={[Styles.subtitle,{fontSize:  orientation === 'PORTRAIT' ? width/30 : height/30}]}>
                                            Using and getting the most out of the dying to talk app
                                        </Text>
                                </View>
                            </View>
                            <FlatList
                                numColumns = {2}
                                data = {this.state.userguideIndexes}
                                extraData={this.state}
                                renderItem = {this.renderUserGuideItem.bind(this)}
                                keyExtractor = {(index) => index.toString()}
                            />

                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}