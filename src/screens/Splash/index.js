import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    ActivityIndicator,
    Text,
    View,
    ScrollView,
} from 'react-native';
import Spinner from "react-native-spinkit";
import {MySpinner} from "@components"

import {Colors, Images} from '@theme';
import Styles from './styles';
import {getBundle} from '@api';
import { deviceWidth, deviceHeight } from "@ResponsiveDimensions";

export default class Splash extends Component {
    state = {
        loading: true,
    }

    async componentDidMount() {
        const {navigate} = this.props.navigation;
        let json = await getBundle()

        // alert(JSON.stringify(json))
        this.setState({ loading: false })

        navigate("OnBoardingScreen");
    }

    render() {
        return (
            <ImageBackground style={Styles.backgroundImage} source={Images.bg_splash_onboarding}>
                <ScrollView contentContainerStyle={Styles.scrollView} style={{backgroundColor: '#0009'}}>
                    <View style={Styles.circle_above}>
                        <Image source={Images.pca_logo} style={Styles.pca_logo}/>
                    </View>
                    <View style={Styles.center_view}>
                        <Text style={Styles.app_name}>APP NAME GOES HERE</Text>
                        <View style={Styles.circle_center}>
                            <MySpinner loading={this.state.loading} size={deviceWidth(10)} style={Styles.spinner}/>
                        </View>
                    </View>
                    <View style={Styles.bottom_view}>
                        <Text style={Styles.text_desc}>WORKING OUT WHAT'S RIGHT FOR YOU</Text>
                        <Text style={Styles.text_website}>dyingtotalk.org.au</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}