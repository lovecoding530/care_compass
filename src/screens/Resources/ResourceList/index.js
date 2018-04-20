import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
} from 'react-native';
import {Colors} from '@theme';
import Styles from './styles';
import Button from '@button'
import Text from '@text'


export default class Resources extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            resourceIndexes: [1,2,3,4],
            col: 2,
        })
    }

    renderResourceItem({item}){
        return (
            <TouchableOpacity style={Styles.item}>
                <Text medium bold>Resource {item}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.title}>Resources</Text>
                <Text style={Styles.subtitle}>
                    View list of resources and use to learn more
                </Text>
                <FlatList
                    numColumns = {2}
                    data = {this.state.resourceIndexes}
                    renderItem = {this.renderResourceItem}
                    keyExtractor = {(index) => index.toString()}
                    />

                <View style={Styles.buttonBar}>
                    <Image source={require('../../../../assets/OnBoarding/OnBoarding_bottom_logo.png')}/>
                    <View style={{flex: 55}}/>
                    <Text  small >Use dying to talk developed by Palliative care </Text>
                </View>

            </View>
        );
    }
}