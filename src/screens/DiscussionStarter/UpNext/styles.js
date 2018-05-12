import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, FontSizes, MediaQueries} from '@theme';

const { width } = Dimensions.get('window');

import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";

export default StyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        paddingHorizontal: responsiveWidth(8),
        paddingVertical: responsiveWidth(13),
        justifyContent: 'space-between',
    },

    current: {
        marginVertical: responsiveHeight(5), 
    },

    next: {
        marginVertical: responsiveHeight(5), 
    },

    currentTitle: {
        padding: responsiveWidth(2),
        flexDirection: 'row',
        backgroundColor: Colors.backgroundSecondary,
    },

    currentPrecomment: {
        padding : responsiveWidth(2), 
        borderWidth: 1.5,
        borderColor: Colors.backgroundSecondary,
    },

    nextTitle: {
        padding: responsiveWidth(2),
        flexDirection: 'row',
        justifyContent: 'center',
    },

    nextPrecomment: {
        paddingHorizontal : responsiveWidth(6.6), 
        borderWidth: 1,
        borderColor: Colors.backgroundSecondary,
    },

    buttonBar: {
        flexDirection: 'row',
        marginVertical: responsiveWidth(2),
        marginHorizontal : responsiveWidth(6.6), 
        justifyContent: 'center',
    },
    
    checkIcon: {
        width: responsiveHeight(3.2),
        height: responsiveHeight(3.2),
        marginRight: 8,
    }

});
