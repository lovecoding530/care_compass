import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    ActivityIndicator,
    Text,
    View,
} from 'react-native';
import Spinner from "react-native-spinkit";

import {Colors, Images} from '@theme';
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
            <ImageBackground style={Styles.backgroundImage} source={Images.bg_splash_onboarding}>
                <View style={Styles.circle_above}>
                    <Image source={Images.pca_logo} style={Styles.pca_logo}/>                    
                    <Spinner isVisible={true} size={responsiveWidth(10)} type='FadingCircle' color={Colors.Navy} style={Styles.spinner}/>
                </View>
                <View style={Styles.circle_bellow}>
                    <Image source={Images.icon_dying_to_talk} style={Styles.icon_dying_to_talk}/>                    
                </View>
                <Text style={Styles.text_desc}>WORKING OUT WHAT'S RIGHT FOR YOU</Text>
                <Text style={Styles.text_website}>dyingtotalk.org.au</Text>
            </ImageBackground>
        );
    }
}