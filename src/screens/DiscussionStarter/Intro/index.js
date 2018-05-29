import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View,
    ImageBackground
} from 'react-native';

import {Colors, Images} from '@theme';
import Styles from './styles';
import {Button, Loader} from '@components'
import Text from '@text'

import { getDiscussionStarter } from "@api";

export default class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            discussionStarter: {},
            loaderVisible: false,
        })

    }

    async componentDidMount() {
        this.setState({loaderVisible: true})
        let json = await getDiscussionStarter()
        let firstDiscussionStarter = json[0]
        this.setState({
            discussionStarter: firstDiscussionStarter,
            loaderVisible: false,
        })

        console.log(firstDiscussionStarter)
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <ImageBackground source={Images.bg_discussion_starter} style={Styles.container}>
                <Loader loading={this.state.loaderVisible}/>
                <View style={Styles.introContainer}>
                    <View style={Styles.titleView}>
                        <Text mediumLarge bold center color={Colors.Red} style={Styles.title}>Discussion Starter</Text>
                        <Text medium bold style={Styles.subtitle}>
                            Supporting you to talk about how you want 
                            to be cared for at the end of your life
                        </Text>
                    </View>
                    <View style={Styles.descView}>
                        <Image source={Images.icon_discussion_starter} style={Styles.icon}/>
                        <Text style={Styles.intro}>
                            You never know what the future holds, it is never too early to plan 
                            ahead, Talking now can help your family and friends in the future 
                            and can make sure you goget the kind of care that you want.
                        </Text>
                        <Text style={Styles.intro}>
                            The Dying to Talk Discussion Starter will guide you through that 
                            discussion, It will help you prepare, so that you know what you want 
                            to say and it will provide you with tips about how to start talking.
                        </Text>
                        <Text style={Styles.intro}>
                            Talking about dying might be hard, but it won't ill you, You might 
                            even find that your family is dying to talk too.
                        </Text>
                    </View>
                </View>
                <View style={Styles.buttonBar}>
                    <Button light onPress={()=>{navigate('ActivityList', {discussionStarter: this.state.discussionStarter})}}>SKIP AHEAD</Button>
                    <Button dark onPress={()=>{navigate("Activity", {activityIndex: 0, discussionStarter: this.state.discussionStarter})}}>START THE CONVERSATION</Button>
                </View>
            </ImageBackground>
        );
    }
}