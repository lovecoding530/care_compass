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
    ImageBackground
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Footer from '@footer'
import { Loader } from '@components';
import { getUserGuides,updateTimeInterval } from "@api";
import moment from 'moment';
import {Colors} from '@theme';

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
            <View>
            {first ?
                <TouchableOpacity style={Styles.firstrowItem} onPress={()=>{navigate("UserGuidesDetail", {userguideIndex: index})}}>
                    <Text style={[Styles.cardtitle,{ color: Colors.Red,}]}>{item.title}</Text>
                </TouchableOpacity>
                : second ?
                        <TouchableOpacity style={Styles.firstrowItem} onPress={()=>{navigate("UserGuidesDetail", {userguideIndex: index})}}>
                            <Text style={[Styles.cardtitle,{ color: Colors.Red,}]}>{item.title}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={Styles.item} onPress={()=>{navigate("UserGuidesDetail", {userguideIndex: index})}}>
                            <Text style={Styles.cardtitle}>{item.title}</Text>
                        </TouchableOpacity>
            }
            </View>
        )
    }

    render() {
        return (
            <View style={Styles.container}>
                <ImageBackground source={require('../../../../assets/images/bg-how-to.jpg')} resizeMode='stretch' style={Styles.imageView} >
                    <View style={Styles.scrollcontainer}> 
                        <ScrollView contentContainerStyle={Styles.scroll}>
                            <Loader loading={this.state.loaderVisible}/>
                            <TouchableOpacity style={Styles.itemTop}>
                                <Text style={Styles.title}>How to</Text>
                                    <Text style={Styles.subtitle}>
                                        Using and getting the most out of the dying to talk app
                                    </Text>
                            </TouchableOpacity>
                            <FlatList
                                numColumns = {2}
                                data = {this.state.userguideIndexes}
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