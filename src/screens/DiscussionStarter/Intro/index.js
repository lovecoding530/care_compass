import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View,
    ImageBackground,
    ScrollView,
} from 'react-native';

import {Colors, Images} from '@theme';
import Styles from './styles';
import {Button, Loader, Card} from '@components'
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
        var json = await getDiscussionStarter(true)
        if(json == null){
            this.setState({loaderVisible: true})
            json = await getDiscussionStarter(false)
            this.setState({loaderVisible: false})    
        }
        let firstDiscussionStarter = json[0]
        this.setState({
            discussionStarter: firstDiscussionStarter,
        })

        console.log(firstDiscussionStarter)
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <ImageBackground source={Images.bg_discussion_starter} style={Styles.container}>
                <Loader loading={this.state.loaderVisible}/>
                <ScrollView contentContainerStyle={Styles.introContainer}>
                    <Card topbar style={Styles.titleView}>
                        <Text mediumLarge center color={Colors.Red} style={Styles.title}>Discussion Starter</Text>
                        <Text medium bold style={Styles.subtitle} color={Colors.Navy}>
                            Supporting you to talk about how you want 
                            to be cared for at the end of your life
                        </Text>
                    </Card>
                    <Card style={Styles.descView}>
                        <Image source={Images.discussion_starter} style={Styles.icon}/>
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
                    </Card>
                </ScrollView>
                <View style={Styles.buttonBar}>
                    <Button dark bold onPress={()=>{navigate("Activity", {activityIndex: 0, discussionStarter: this.state.discussionStarter})}}>Start the conversation</Button>
                    <Button light bold onPress={()=>{navigate('ActivityList', {discussionStarter: this.state.discussionStarter})}}>Skip ahead</Button>
                </View>
            </ImageBackground>
        );
    }
}