import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import { MediaQueries } from '@theme'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";
import { deviceWidth, deviceHeight, windowHeight } from "@ResponsiveDimensions";

export default MediaQueryStyleSheet.create({
    backgroundImage: {
        flex: 1,
    },

    scrollView: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    circle_above: {
        width: deviceWidth(75),
        height: deviceWidth(75),
        borderRadius: deviceWidth(37.5),
        backgroundColor: '#fffd',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        margin: deviceWidth(5),
    },

    pca_logo: {
        width: deviceWidth(60),
        height: deviceWidth(44),
        resizeMode: 'contain',
    },

    spinner: {
        marginVertical: deviceWidth(4),
    },

    circle_bellow: {
        width: deviceWidth(33),
        height: deviceWidth(33),
        borderRadius: deviceWidth(16.5),
        backgroundColor: '#fffd',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        margin: deviceWidth(5),
    },

    icon_dying_to_talk: {
        width: deviceWidth(24),
        height: deviceWidth(24),
        resizeMode: 'contain',
    },

    text_desc: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        width: deviceWidth(50),
        margin: deviceWidth(2),
    },

    text_website: {
        color: '#fff',
        textAlign: 'center',        
        margin: deviceWidth(2),
    }
}, {
    [MediaQueries.iPad] : {
        circle_above: {
            width: deviceWidth(64),
            height: deviceWidth(64),
        },
        circle_bellow: {
            width: deviceWidth(30),
            height: deviceWidth(30),          
        },
        pca_logo: {
            marginTop: deviceWidth(4), 
            width: deviceWidth(54),
            height: deviceWidth(40),
        },
        icon_dying_to_talk: {
            width: deviceWidth(20),
            height: deviceWidth(20),
            resizeMode: 'contain',
        },
    },
})