import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import {Colors, Images} from '@theme';
import Styles from './styles';
import Text from '@text'
import Icon from 'react-native-vector-icons/FontAwesome';
import { MediaQuery } from "react-native-responsive";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        })
    }

    componentDidMount() {
        console.log(Dimensions.get('window'))
    }

    render() {
        return ( 
            <ImageBackground source={Images.bg_navigation} style={Styles.container}>
                <View style={Styles.containerLeft}>
                    <TouchableOpacity style={[Styles.item, Styles.right_item]} onPress={()=>{this.props.navigation.navigate({routeName: "DiscussionStarter", key: "DiscussionStarter"})}}>
                        <MediaQuery minDeviceWidth={768}>
                            <Image source={Images.icon_discussion_starter} style={Styles.right_icon}/>
                        </MediaQuery>
                        <Text medium bold style={Styles.right_item_text}>Use Discussion Starter <Icon name="arrow-right"/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Styles.item, Styles.right_item]} onPress={()=>{this.props.navigation.navigate({routeName: "CardGame", key: "CardGame"})}}>
                        <MediaQuery minDeviceWidth={768}>
                            <Image source={Images.icon_cardgame} style={Styles.right_icon}/>
                        </MediaQuery>
                        <Text medium bold style={Styles.right_item_text}>Play Card Game <Icon name="arrow-right"/></Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.containerRight}>
                    <TouchableOpacity style={[Styles.item, Styles.left_item]} onPress={()=>{this.props.navigation.navigate("UserGuides")}}>
                        <MediaQuery minDeviceWidth={768}>
                            <Image source={Images.icon_how_to} style={Styles.left_icon}/>
                        </MediaQuery>
                        <Text medium bold style={Styles.left_item_text}>How to use this app <Icon name="arrow-right"/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Styles.item, Styles.left_item]} onPress={()=>{this.props.navigation.navigate("Resources")}}>
                        <MediaQuery minDeviceWidth={768}>
                            <Image source={Images.icon_more_info} style={Styles.left_icon}/>
                        </MediaQuery>
                        <Text medium bold style={Styles.left_item_text}>More Information <Icon name="arrow-right"/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Styles.item, Styles.left_item]}onPress={()=>{this.props.navigation.navigate("GetHelp")}}>
                        <MediaQuery minDeviceWidth={768}>
                            <Image source={Images.icon_get_help} style={Styles.left_icon}/>
                        </MediaQuery>
                        <Text medium bold style={Styles.left_item_text}>Get Help <Icon name="arrow-right"/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Styles.item, Styles.survey_item]}onPress={()=>{this.props.navigation.navigate("GetHelp")}}>
                        <Text medium bold style={Styles.left_item_text}>Take a quick survey <Icon name="arrow-right"/></Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}