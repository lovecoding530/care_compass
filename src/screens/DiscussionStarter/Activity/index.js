import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView,
} from 'react-native';
import {Colors} from '@theme';
import Styles from './styles';
import Button from '@button'
import Text from '@text'
import Choices from "@choices";

import { getDiscussionStarter } from "@api";

export default class ActivityList extends Component {
    constructor(props) {
        super(props);
        const {activityIndex} = this.props.navigation.state.params
        this.state = ({
            activityIndex: activityIndex,
            activity: {},
        })
    }

    async componentDidMount() {

        const ds = await getDiscussionStarter(true)
        const activities = ds[0].discussion_starter

        this.setState({
            activity: activities[this.state.activityIndex]
        })
    }

    renderActivityItem({item}){
        return (
            <TouchableOpacity style={Styles.item}>
                <Text medium bold>Activity {item}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        alert("render activity")
        return (
            <View style={Styles.container}>
                <Text mediumLarge bold center style={Styles.title}>Activity {this.state.activityIndex + 1}: Reflecting</Text>
                <ScrollView removeClippedSubviews={false}>
                    <Choices data={["aaaaaaa", "bbbbbbbb", "ccccccccc"]}/>
                </ScrollView>
            </View>
        );
    }
}