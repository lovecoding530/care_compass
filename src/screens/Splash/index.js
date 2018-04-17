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
        const {navigate} = this.props.navigation;
        setTimeout(()=>{
            // alert("Downloaded all app data.")
            this.setState({
                animating: false,
            })
            navigate("DrawerStack");
        }, 500)
    }

    render() {
        return (
            <ImageBackground style={Styles.backgroundImage}>
                <Text style={Styles.logoText}>Dying To Talk</Text>
                <ActivityIndicator animating={this.state.animating} size='large' color={Colors.golden} />
            </ImageBackground>
        );
    }
}