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
import { Loader } from '@components';

import { getCardGame } from "@api";

export default class intro extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            title: "Card Game Title",
            description: "Card Game Description",
            loaderVisible: false,
        })

    }

    async componentDidMount() {
        this.setState({
            loaderVisible: true,
        })

        let json = await getCardGame()
        let firstCardGame = json[0]

        this.setState({
            loaderVisible: false,
            title: firstCardGame.title,
            description: firstCardGame.description
        })
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={Styles.container}>
                <Loader loading={this.state.loaderVisible}/>
                <View style={Styles.introContainer}>
                    <Text mediumLarge bold style={Styles.title}>Card Game</Text>
                    <Text medium bold style={Styles.subtitle}>
                        {this.state.title}
                    </Text>
                    <Image style={Styles.icon}/>
                    <Text style={Styles.intro}>
                        {this.state.description}
                    </Text>
                    <View style={Styles.buttonBar}>
                        <Button dark 
                            onPress={()=>{navigate("CDSingleView", {cardIndex: 0})}}>{"  PLAY  "}</Button>
                    </View>
                </View>
            </View>
        );
    }
}