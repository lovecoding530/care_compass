import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import { MediaQueries, Colors } from '@theme'
import { MediaQueryStyleSheet } from "react-native-responsive";
import { deviceWidth, deviceHeight, windowHeight } from "@ResponsiveDimensions";
import { FontSizes } from '../../theme';

export default MediaQueryStyleSheet.create({
    backgroundImage: {
        flex: 1,
        backgroundColor: Colors.yellow,
    },

    onboarding_image: {
        position: 'absolute',
        width: '100%',
        resizeMode: 'stretch',
        bottom: 0,
    },

    scrollView: {
        flexGrow: 1,
        alignItems: 'center',
    },

    circle_above: {
        width: 500,
        height: 500,
        borderRadius: 250,
        borderColor: Colors.green,
        borderWidth: deviceWidth(1.5),
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        margin: deviceWidth(5),
    },

    dtt_logo: {
        width: deviceWidth(25),
        height: deviceWidth(25),
        resizeMode: 'contain',
    },

    center_view: {
        alignItems: 'center',
    },

    app_name: {
        color: Colors.navy,
        fontSize: FontSizes.mediumLarge,
        fontWeight: 'bold',
        margin: deviceWidth(1),
    },

    spinner: {
        marginVertical: deviceWidth(2),
    },

    text_desc: {
        color: Colors.navy,
        fontSize: FontSizes.medium,
        textAlign: 'center',
        width: deviceWidth(50),
        margin: deviceWidth(1),
    },

    text_website: {
        color: '#fff',
        fontSize: FontSizes.medium,
        fontWeight: 'bold',
        textAlign: 'center',
    }
}, {
    [MediaQueries.iPhone] : {
        scrollView: {
            justifyContent: 'center',
        }
    },
})