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
import {Text, Button} from '@components'

import { getDiscussionStarter } from "@api";

export default class ActivityList extends Component {
    constructor(props) {
        super(props);
        const {discussionStarter} = this.props.navigation.state.params
        const activities = discussionStarter.discussion_starter
        this.state = ({
            discussionStarter, discussionStarter,
            activities: activities,
        })
    }

    renderActivityItem({item, index}){
        const {navigate} = this.props.navigation
        return (
            <TouchableOpacity style={Styles.item} onPress={() => {navigate("Activity", {activityIndex: index, discussionStarter: this.state.discussionStarter})}}>
                <Text medium bold>Activity {index + 1}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.title} mediumLarge center bold>Discussion Starter</Text>
                <Text style={Styles.subtitle} medium center>
                    Pick up from where you left off...
                </Text>
                <FlatList
                    numColumns = {2}
                    data = {this.state.activities}
                    renderItem = {this.renderActivityItem.bind(this)}
                    keyExtractor = {(item, index) => index.toString()}
                    />
            </View>
        );
    }
}