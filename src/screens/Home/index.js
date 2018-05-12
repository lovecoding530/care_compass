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

import {Colors} from '@theme';
import Styles from './styles';
import Text from '@text'

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
            <View style={Styles.container}>
                <View style={Styles.containerLeft}>
                    <TouchableOpacity style={Styles.item} onPress={()=>{this.props.navigation.navigate({routeName: "DiscussionStarter", key: "DiscussionStarter"})}}>
                        <Text medium bold>Discussion Starter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.item} onPress={()=>{this.props.navigation.navigate({routeName: "CardGame", key: "CardGame"})}}>
                        <Text medium bold>Card Game</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.containerRight}>
                    <TouchableOpacity style={Styles.item} onPress={()=>{this.props.navigation.navigate("UserGuides")}}>
                        <Text medium bold>User Guide</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.item} onPress={()=>{this.props.navigation.navigate("Resources")}}>
                        <Text medium bold>Resources</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.item} onPress={()=>{this.props.navigation.navigate("GetHelp")}}>
                        <Text medium bold>Get Help</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}