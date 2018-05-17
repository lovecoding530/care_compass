import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

const deviceHeight = Dimensions.get("window").height;
import { responsiveWidth } from 'react-native-responsive-dimensions';

export default {
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
    },
    logoText: {
        fontSize: responsiveWidth(6),
        fontWeight: 'bold',
        margin: 40,
    }
};