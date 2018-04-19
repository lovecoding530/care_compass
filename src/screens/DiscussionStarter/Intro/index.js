import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View,
} from 'react-native';

import {Colors} from '@theme';
import Styles from './styles';
import Button from '@button'
import Text from '@text'

import { getDiscussionStarter } from "@api";

export default class intro extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        })

    }

    async componentDidMount() {
        let json = await getDiscussionStarter()
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={Styles.container}>
                <View style={Styles.introContainer}>
                    <Text mediumLarge bold style={Styles.title}>Discussion Starter</Text>
                    <Text medium bold style={Styles.subtitle}>
                        Supporting you to talk about how you want {"\n"}
                        to be cared for at the end of your life
                    </Text>
                    <Image style={Styles.icon}/>
                    <Text style={Styles.intro}>
                        You never know what the future holds, it is never too early to plan {"\n"}
                        ahead, Talking now can help your family and friends in the future {"\n"}
                        and can make sure you goget the kind of care that you want.
                    </Text>
                    <Text style={Styles.intro}>
                        The Dying to Talk Discussion Starter will guide you through that {"\n"}
                        discussion, It will help you prepare, so that you know what you want {"\n"}
                        to say and it will provide you with tips about how to start talking.
                    </Text>
                    <Text style={Styles.intro}>
                        Talking about dying might be hard, but it won't ill you, You might {"\n"}
                        even find that your family is dying to talk too.
                    </Text>
                    <View style={Styles.buttonBar}>
                        <Button light onPress={()=>{navigate('ActivityList')}}>SKIP AHEAD</Button>
                        <Button dark>START THE CONVERSATION</Button>
                    </View>
                </View>
            </View>
        );
    }
}