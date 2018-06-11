import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView,
} from 'react-native';
import {Colors, Images, FontSizes} from '@theme';
import Styles from './styles';
import {Text, Button} from '@components'
import Icon from 'react-native-vector-icons/FontAwesome';
import { MediaQuery } from "react-native-responsive";

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

    goBack(){
        const {goBack} = this.props.navigation
        goBack()
    }
    renderActivityItem({item, index}){
        const {navigate} = this.props.navigation
        return (
            <TouchableOpacity style={Styles.item} onPress={() => {navigate("Activity", {activityIndex: index, discussionStarter: this.state.discussionStarter})}}>
                <Text mediumLarge bold center style={Styles.item_number}>{index + 1}</Text> 
                <MediaQuery minDeviceWidth={768}>
                    <Text medium bold center style={Styles.item_text}>Activity {index + 1}: {"\n"} {item.stage}</Text>
                    <Text medium bold center style={Styles.item_start_text}>Start <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={767}>
                    <Text medium bold center style={Styles.item_text}>Activity {index + 1}: {item.stage}</Text>
                    <Text medium bold center style={Styles.item_start_text}><Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                </MediaQuery>
            </TouchableOpacity>
        )
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <ImageBackground source={Images.bg_discussion_starter} style={Styles.container}>
                <ScrollView contentContainerStyle={Styles.scrollView}>
                    <View style={Styles.titleView}>
                        <Text style={Styles.title} mediumLarge center bold>Discussion Starter</Text>
                        <Text style={Styles.subtitle} medium center>
                            Pick up from where you left off...
                        </Text>
                    </View>
                    <MediaQuery minDeviceWidth={768}>
                        <FlatList
                            numColumns = {2}
                            data = {this.state.activities}
                            renderItem = {this.renderActivityItem.bind(this)}
                            keyExtractor = {(item, index) => index.toString()}
                            contentContainerStyle={Styles.flatList}
                            />
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={767}>
                        <FlatList
                            numColumns = {1}
                            data = {this.state.activities}
                            renderItem = {this.renderActivityItem.bind(this)}
                            keyExtractor = {(item, index) => index.toString()}
                            contentContainerStyle={Styles.flatList}
                            />
                    </MediaQuery>
                </ScrollView>
                <View style={Styles.buttonBar}>
                    <Button light onPress={this.goBack.bind(this)}>GO BACK</Button>
                    <Button dark onPress={()=>{navigate("Activity", {activityIndex: 0, discussionStarter: this.state.discussionStarter})}}>START THE CONVERSATION</Button>
                </View>
            </ImageBackground>
        );
    }
}