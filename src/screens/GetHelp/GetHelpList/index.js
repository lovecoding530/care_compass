import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Footer from '@footer'



export default class GetHelpList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
           
        })
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.scrollcontainer}> 
                <ScrollView contentContainerStyle={Styles.scroll}>
                    <Text bold style={Styles.title}>Get help</Text>
                    <Text style={Styles.subtitle}>
                        Services that can help when you are in need.
                    </Text>
                
                </ScrollView>
                </View>
                <Footer />
            </View>
        );
    }
}