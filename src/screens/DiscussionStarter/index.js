import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import {Colors} from '../../theme';
import Styles from './styles';

export default class DiscussionStarter extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        })
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={Styles.container}>
            </View>
        );
    }
}