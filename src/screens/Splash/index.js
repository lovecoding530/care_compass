import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    ActivityIndicator,
} from 'react-native';

import {
    Container,
    Header,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Right,
    Body,
    View
} from "native-base";

import {Colors} from '../../theme';
import Styles from './styles';

export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            animating: true,
        })
    }

    componentDidMount() {
        setTimeout(()=>{
            alert("Downloaded all app data.")
            this.setState({
                animating: false,
            })
        }, 3000)
    }

    render() {
        return (
            <ImageBackground style={Styles.backgroundImage}>
                <ActivityIndicator animating={this.state.animating} size='large' color={Colors.golden} />
            </ImageBackground>
        );
    }
}