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
import {Colors, Images, FontSizes} from '@theme';
import { MediaQuery } from "react-native-responsive";
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const { width,height } = Dimensions.get('window');

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
    }

    renderUserGuideItem({item, index}){
        const {navigate} = this.props.navigation
        const first = index === 0;
        const second = index === 1;
        return (
            <TouchableOpacity style={[ index >1 ? Styles.item :Styles.firstrowItem ]} onPress={()=>{ index >1 ? navigate("UserGuidesDetail", {userguideIndex: index}) : navigate("DiscussionAndCardDetail", {userguideIndex: index})}}>
            {first ?
                <View style={Styles.itemView}>
                        <MediaQuery minDeviceWidth={768}>
                            <Image source={Images.icon_cardgame}  style={Styles.icon}/>
                        </MediaQuery>
                        <View style={Styles.cardView}>
                            <Text medium style={[Styles.cardtitle,{ color: Colors.Red}]}>{item.title} </Text>
                            <Image source={Images.icon_left_arrow} resizeMode='contain' style={{tintColor: Colors.Red}}/>
                        </View>
                </View>
                : second ?
                        <View style={Styles.itemView}>
                            <MediaQuery minDeviceWidth={768}>
                                <Image source={Images.icon_discussion_starter}  style={[Styles.icon,{width:width/5}]}/>
                            </MediaQuery>
                            <View style={Styles.cardView}>
                                <Text medium style={[Styles.cardtitle,{ color: Colors.Red}]}>{item.title} </Text>
                                <Image source={Images.icon_left_arrow} resizeMode='contain' style={{tintColor: Colors.Red}}/>
                            </View>
                        </View>
                        :
                        <View style={Styles.itemView}>
                            <View style={Styles.cardView}>
                                <Text medium style={Styles.cardtitle}>{item.title}</Text>
                                <Image source={Images.icon_left_arrow} resizeMode='contain' />
                            </View>
                        </View>
            }
            </TouchableOpacity>
        )
    }

    render() {
       
        return (
            <ImageBackground source={Images.bg_how_to} resizeMode="stretch" style={Styles.container} >

                <ScrollView contentContainerStyle={Styles.scroll}>

                    <View style={Styles.titleView}>
                        <Text large style={Styles.title}>How to</Text>
                        <Text medium style={Styles.subtitle}>
                            Using and getting the most out of the dying to talk app
                        </Text>
                    </View>

                    <MediaQuery minDeviceWidth={768}>
                        <FlatList
                            numColumns = {2}
                            data = {this.state.userguideIndexes}
                            extraData={this.state}
                            renderItem = {this.renderUserGuideItem.bind(this)}
                            keyExtractor = {(index) => index.toString()}
                        />
                    </MediaQuery>

                    <MediaQuery maxDeviceWidth={767}>
                        <FlatList
                            numColumns = {1}
                            data = {this.state.userguideIndexes}
                            extraData={this.state}
                            renderItem = {this.renderUserGuideItem.bind(this)}
                            keyExtractor = {(index) => index.toString()}
                        />
                    </MediaQuery>

                </ScrollView>
            </ImageBackground>
          
        );
    }
}