import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView,
    TextInput,
    ImageBackground,
} from 'react-native';
import {Colors, Images} from '@theme';
import Styles from './styles';
import Button from '@button'
import Text from '@text'

import { getDiscussionStarter } from "@api";

export default class ActivityList extends Component {
    constructor(props) {
        super(props);
        const {activityIndex, discussionStarter} = this.props.navigation.state.params
        const activities = discussionStarter.discussion_starter
        this.state = ({
            discussionStarter: discussionStarter,
            activityIndex: activityIndex,
            nextActivityIndex: activityIndex + 1, 
            activities: activities,
            activityCount: activities.length,
        })
    }

    renderLaterView() {
        var laterActivities = []
        for (let index = this.state.activityIndex + 2; index < this.state.activityCount; index++) {
            laterActivities.push(this.state.activities[index])
        }
        return laterActivities.map(activity=>
            <Text medium center color={Colors.Navy} style={Styles.currentTitle}>
                Activity {index + 1}: {activity.stage}
            </Text>
        )
    }

    render() { 
        const {navigate, goBack} = this.props.navigation
        return (
            <ImageBackground source={Images.bg_discussion_starter} style={Styles.container}>
                <ScrollView contentContainerStyle={Styles.contentView}>
                    <View style={Styles.currentWrapper}>
                        <View style={Styles.current}>
                            <View style={Styles.currentHeader}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={Images.check} style={Styles.checkIcon}/>
                                    <Text medium bold color={'#fff'} style={Styles.complete_text}>
                                        Complete
                                    </Text>
                                </View>
                                <Button light color={'#fff'} onPress={()=>goBack()}>EDIT</Button>
                            </View>
                            <View style={Styles.currentDescView}>
                                <Text medium color={Colors.Navy} style={Styles.currentTitle}>Activity {this.state.activityIndex + 1}: {this.state.activities[this.state.activityIndex].stage}</Text>
                                <Text style={Styles.currentPrecomment}>
                                    {this.state.activities[this.state.activityIndex].pre_commencement_text} 
                                </Text>
                            </View>
                        </View>
                    </View>
                    {this.state.nextActivityIndex < this.state.activities.length &&
                    <View style={Styles.next}>
                        <View>
                            <Text center medium bold color={Colors.Red}> UP NEXT </Text>
                            <View style={Styles.nextTitle}>
                                <Text mediumLarge bold>Activity {this.state.nextActivityIndex + 1}: </Text>
                                <Text mediumLarge>
                                    {" "}{this.state.activities[this.state.nextActivityIndex].stage}
                                </Text>
                            </View>
                            <Text center style={Styles.nextPrecomment}> 
                                {this.state.activities[this.state.nextActivityIndex].pre_commencement_text} 
                            </Text>
                        </View>
                        {this.state.activityIndex + 2 < this.state.activityCount &&
                        <View style={Styles.later}>
                            <Text center medium bold color={Colors.Red}> LATER </Text>
                            {this.renderLaterView()}
                        </View>
                        }
                    </View>
                    }
                </ScrollView>
                <View style={Styles.buttonBar}>
                    <Button light onPress={() => {navigate("Complete", {activityIndex: this.state.nextActivityIndex, discussionStarter: this.state.discussionStarter})}}>FINISH HERE</Button>
                    <Button dark onPress={() => {navigate("Activity", {activityIndex: this.state.nextActivityIndex, discussionStarter: this.state.discussionStarter})}}>START ACTIVITY {this.state.activityIndex + 2}</Button>
                </View>
            </ImageBackground>
        );
    }
}