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

import { getDiscussionStarter } from "@api";

export default class ActivityList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            activityIndexes: [],
        })
    }

    async componentDidMount() {
        const ds = await getDiscussionStarter(true)
        const activities = ds[0].discussion_starter

        var activityIndexes = [];
        for(var i = 0; i < activities.length; i ++){
            activityIndexes.push(i + 1);
        }

        this.setState({
            activityIndexes: activityIndexes
        })
    }

    renderActivityItem({item, index}){
        const {navigate} = this.props.navigation
        return (
            <TouchableOpacity style={Styles.item} onPress={() => {navigate("Activity", {activityIndex: index})}}>
                <Text medium bold>Activity {item}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.title}>Discussion Starter</Text>
                <Text style={Styles.subtitle}>
                    Supporting you to talk about how you want {"\n"}
                    to be cared for at the end of your life
                </Text>
                <FlatList
                    numColumns = {2}
                    data = {this.state.activityIndexes}
                    renderItem = {this.renderActivityItem.bind(this)}
                    keyExtractor = {(index) => index.toString()}
                    />
            </View>
        );
    }
}