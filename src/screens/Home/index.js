import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';

import {Colors, Images, FontSizes} from '@theme';
import Styles from './styles';
import Text from '@text'
import Icon from 'react-native-vector-icons/FontAwesome';
import { MediaQuery } from "react-native-responsive";
const {height, width} = Dimensions.get('window');
import store from '../../Store'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        })
    }

    componentDidMount() {
        console.log(Dimensions.get('window'))
    }

    gotoRoute(routeName){
        store.activeRoute = routeName
        store.routesInStack.push(routeName)
        var key = routeName
        this.props.navigation.navigate({routeName, key})
    }

    render() {
        return ( 
            <ImageBackground source={Images.bg_navigation} style={Styles.container}>
                <ScrollView contentContainerStyle={Styles.scrollView} scrollEnabled={height < 768}>
                    <View style={Styles.containerLeft}>
                        <TouchableOpacity style={[Styles.item, Styles.right_item]} onPress={()=>{this.gotoRoute('DiscussionStarter')}}>
                            <MediaQuery minDeviceWidth={768}>
                                <Image source={Images.icon_discussion_starter} style={Styles.right_icon}/>
                            </MediaQuery>
                            <Text medium bold style={Styles.right_item_text}>Use Discussion Starter <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.item, Styles.right_item]} onPress={()=>{this.gotoRoute('CardGame')}}>
                            <MediaQuery minDeviceWidth={768}>
                                <Image source={Images.icon_cardgame} style={Styles.right_icon}/>
                            </MediaQuery>
                            <Text medium bold style={Styles.right_item_text}>Start Discussion Cards <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.containerRight}>
                        <TouchableOpacity style={[Styles.item, Styles.left_item]}onPress={()=>{this.gotoRoute("GetHelp")}}>
                            <MediaQuery minDeviceWidth={768}>
                                <Image source={Images.icon_get_help} style={Styles.left_icon}/>
                            </MediaQuery>
                            <Text bold style={Styles.left_item_text}>Looking after your self <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.item, Styles.left_item]} onPress={()=>{this.gotoRoute("UserGuides")}}>
                            <MediaQuery minDeviceWidth={768}>
                                <Image source={Images.icon_how_to} style={Styles.left_icon}/>
                            </MediaQuery>
                            <Text bold style={Styles.left_item_text}>App instructions <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.item, Styles.left_item]} onPress={()=>{this.gotoRoute("Resources")}}>
                            <MediaQuery minDeviceWidth={768}>
                                <Image source={Images.icon_more_info} style={Styles.left_icon}/>
                            </MediaQuery>
                            <Text bold style={Styles.left_item_text}>Resource library <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.item, Styles.survey_item]}onPress={()=>{this.gotoRoute("GetHelp")}}>
                            <Text bold style={Styles.left_item_text}>Take a quick survey <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}
