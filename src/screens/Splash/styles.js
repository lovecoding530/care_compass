import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

const deviceHeight = Dimensions.get("window").height;
import { MediaQueries } from '@theme'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";

export default MediaQueryStyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical:  responsiveHeight(10),
    },

    circle_above: {
        width: responsiveWidth(75),
        height: responsiveWidth(75),
        borderRadius: responsiveWidth(37.5),
        backgroundColor: '#fffd',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },

    pca_logo: {
        width: responsiveWidth(60),
        height: responsiveWidth(44),
        resizeMode: 'contain',
    },

    spinner: {
        marginVertical: responsiveWidth(4),
    },

    circle_bellow: {
        width: responsiveWidth(33),
        height: responsiveWidth(33),
        borderRadius: responsiveWidth(16.5),
        backgroundColor: '#fffd',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },

    icon_dying_to_talk: {
        width: responsiveWidth(24),
        height: responsiveWidth(24),
        resizeMode: 'contain',
    },

    text_desc: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        width: responsiveWidth(50),
    },

    text_website: {
        color: '#fff',
        textAlign: 'center',        
    }
}, {
    [MediaQueries.iPad] : {
        backgroundImage: {
            paddingVertical:  responsiveHeight(8),
        },
        circle_above: {
            width: responsiveWidth(64),
            height: responsiveWidth(64),
        },
        circle_bellow: {
            width: responsiveWidth(30),
            height: responsiveWidth(30),          
        },
        pca_logo: {
            marginTop: responsiveWidth(4), 
            width: responsiveWidth(54),
            height: responsiveWidth(40),
        },
        icon_dying_to_talk: {
            width: responsiveWidth(20),
            height: responsiveWidth(20),
            resizeMode: 'contain',
        },
    },
})