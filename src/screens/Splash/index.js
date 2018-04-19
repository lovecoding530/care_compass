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

import {Colors} from '../../theme';
import Styles from './styles';
import {getBundle} from '../../components/Api';

export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            animating: true,
        })
    }

    async componentDidMount() {
        const {navigate} = this.props.navigation;
<<<<<<< HEAD
        let json = await getBundle()

        alert(JSON.stringify(json))

        this.setState({
            animating: false,
        })

        navigate("DrawerStack");
>>>>>>> b8dddfaa5db8ce1b9c2649edeac9709f65bc90ab
    }

    render() {
        return (
            <ImageBackground style={Styles.backgroundImage}>
                <Text style={Styles.logoText}>Dying To Talk</Text>
                <Spinner isVisible={true} size={80} type='FadingCircle'/>
            </ImageBackground>
        );
    }
}