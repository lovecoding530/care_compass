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
import { getResources,updateTimeInterval } from "@api";
import moment from 'moment'
import {Colors, Images, FontSizes} from '@theme';
import { MediaQuery } from "react-native-responsive";

export default class Resources extends Component {
    constructor(props) {
        super(props);
        Props=this.props;
        this.state = ({
            resourceIndexes: [],
            loaderVisible: false
        })
    }

    async componentDidMount() {
         try 
            {
                let value = await AsyncStorage.getItem('lastRefereshTimeResource');

                if (value != null){
                  // do something 
                    var currrentTime = moment(new Date()).format("HH:mm:ss");
                    var startTime=moment(value, "HH:mm:ss");
                    var endTime=moment(currrentTime, "HH:mm:ss");
                    var duration = moment.duration(endTime.diff(startTime));
                    var difference = moment.utc(+duration).format('H');

                    if(difference >= updateTimeInterval)
                    {
                        this.setState({
                            loaderVisible: true
                        })

                        await AsyncStorage.setItem('lastRefereshTimeResource', currrentTime);
                        const ds = await getResources()

                        var resourceIndexes = [];
                        for(var i = 0; i < ds.resources.length; i ++){
                            resourceIndexes.push(ds.resources[i]);
                        }

                        this.setState({
                            resourceIndexes: resourceIndexes,
                            loaderVisible: false
                        })
                    }
                    else
                    {
                        const ds = await getResources(true)

                        var resourceIndexes = [];
                        for(var i = 0; i < ds.resources.length; i ++){
                            resourceIndexes.push(ds.resources[i]);
                        }

                        this.setState({
                            resourceIndexes: resourceIndexes,
                        })
                    }   
                }
                else {
                  // do something else
                    this.setState({
                            loaderVisible: true
                        })

                    var currrentTime = moment(new Date()).format("HH:mm:ss");
                    await AsyncStorage.setItem('lastRefereshTimeResource', currrentTime); 
                    const ds = await getResources()

                    var resourceIndexes = [];
                    for(var i = 0; i < ds.resources.length; i ++){
                        resourceIndexes.push(ds.resources[i]);
                    }

                    this.setState({
                        resourceIndexes: resourceIndexes,
                        loaderVisible: false
                    })
                } 
            }
            catch (error) {
              // Error retrieving data
            }
       
    }

    renderResourceItem({item, index}){
        const {navigate} = this.props.navigation
        return (

             <TouchableOpacity style={Styles.item} onPress={()=>{navigate("ResourceDetail", {resourceIndex: index})}}>
                            <View style={Styles.cardView}>
                                <Text smallmedium style={Styles.cardtitle}>{item.title}</Text>
                                <Image source={Images.icon_left_arrow} resizeMode='contain' />
                            </View>
            </TouchableOpacity>
        )
    }

    render() {
        return ( 

            <ImageBackground source={Images.bg_more_information} resizeMode="stretch" style={Styles.container} >

                <ScrollView contentContainerStyle={Styles.scroll}>
                    <Loader loading={this.state.loaderVisible}/>
                    <View style={Styles.titleView}>
                        <Text large style={Styles.title}>Resource library</Text>
                        <Text medium style={Styles.subtitle}>
                            Extra information and resources.
                        </Text>
                    </View>

                    <MediaQuery minDeviceWidth={768}>
                        <FlatList
                            numColumns = {2}
                            data = {this.state.resourceIndexes}
                            renderItem = {this.renderResourceItem.bind(this)}
                            keyExtractor={item => item.title}
                        />
                    </MediaQuery>

                    <MediaQuery maxDeviceWidth={767}>
                        <FlatList
                            numColumns = {1}
                            data = {this.state.resourceIndexes}
                            renderItem = {this.renderResourceItem.bind(this)}
                            keyExtractor={item => item.title}
                        />
                    </MediaQuery>

                </ScrollView>
            </ImageBackground> 
        );
    }
}