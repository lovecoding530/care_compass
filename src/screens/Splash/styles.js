import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

const deviceHeight = Dimensions.get("window").height;
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

export default {
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
};