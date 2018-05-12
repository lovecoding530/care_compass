import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    ActivityIndicator,
    Text,
} from 'react-native';
import Spinner from "react-native-spinkit";

import {Colors} from '@theme';
import Styles from './styles';
import {getBundle} from '@api';
import { responsiveWidth } from 'react-native-responsive-dimensions';

export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            animating: true,
        })
    }

    async componentDidMount() {
        const {navigate} = this.props.navigation;
        let json = await getBundle()

        // alert(JSON.stringify(json))

        this.setState({
            animating: false,
        })

        navigate("OnBoardingScreen");
    }

    render() {
        return (
            <ImageBackground style={Styles.backgroundImage}>
                <Text style={Styles.logoText}>Dying To Talk</Text>
                <Spinner isVisible={true} size={responsiveWidth(10)} type='FadingCircle'/>
            </ImageBackground>
        );
    }
}