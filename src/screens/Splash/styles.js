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
import { FontSizes } from '../../theme';

export default MediaQueryStyleSheet.create({
    backgroundImage: {
        flex: 1,
    },

    scrollView: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    circle_above: {
        position: 'absolute',
        width: deviceWidth(30),
        height: deviceWidth(30),
        borderRadius: deviceWidth(15),
        backgroundColor: '#fffd',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        margin: deviceWidth(5),
        top: 0,
        right: 0,
    },

    pca_logo: {
        width: deviceWidth(25),
        height: deviceWidth(25),
        resizeMode: 'contain',
    },

    center_view: {
        alignItems: 'center',

    },

    app_name: {
        color: '#fff',
        fontSize: FontSizes.mediumLarge,
        fontWeight: 'bold',
    },

    spinner: {
        marginVertical: deviceWidth(2),
    },

    circle_center: {
        width: deviceWidth(18),
        height: deviceWidth(18),
        borderRadius: deviceWidth(9),
        backgroundColor: '#fffd',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        margin: deviceWidth(2),
    },

    bottom_view: {
        position: 'absolute',
        bottom: 20,
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
        fontWeight: 'bold',
        textAlign: 'center',
        margin: deviceWidth(2),
    }
}, {
    [MediaQueries.iPad] : {
        circle_above: {
        },
        circle_bellow: {
        },
        pca_logo: {
        },
    },
})