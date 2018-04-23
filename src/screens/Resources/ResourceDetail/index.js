import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View,
    Linking
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Footer from '@footer'
import Button from '@button'

export default class ResourceDetail extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        })

    }


    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.title}>resources name</Text>
                <Image style={Styles.middleimage} source={require('../../../../assets/OnBoarding/OnBoarding_middleimage.png')}/>
                <Text style={Styles.subtitle}>
                    View detail of resources and use to learn more
                </Text>
                <View style={Styles.buttonContainer}>
                    <Button light >GO BACK</Button>
                  <Button dark onPress={ ()=> Linking.openURL('https://google.com') } >VIEW</Button>
                </View>
                 
                <Footer />

            </View>
        );
    }
}