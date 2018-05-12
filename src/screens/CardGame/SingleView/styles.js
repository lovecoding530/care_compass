import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, FontSizes, MediaQueries} from '@theme';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";


export default {

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        paddingVertical: responsiveWidth(8),
        paddingHorizontal: responsiveWidth(13),
    },

    title: {
        marginVertical: responsiveWidth(4),
    },

    questionView: {
        backgroundColor: Colors.backgroundThird,
        height: responsiveWidth(40),
        marginHorizontal: responsiveWidth(1),
        marginVertical: responsiveWidth(2),
        justifyContent: 'center'
    },

    additionalInfo: {
        backgroundColor: Colors.backgroundThird,
        marginHorizontal: responsiveWidth(1),
        marginBottom: responsiveWidth(2),
        padding: responsiveWidth(1),
    },

    levelBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    levelItem: {
        backgroundColor: Colors.backgroundThird,
        marginHorizontal: responsiveWidth(1),
        alignItems: 'center',
        padding: responsiveWidth(1),
        flex: 1,
    },

    levelIcon: {
        width: responsiveWidth(3.2),
        height: responsiveWidth(3.2),
        marginVertical: 4,
    },

    progress: {
        marginVertical: responsiveWidth(4),
    },

    progressBar: {
        marginHorizontal: responsiveWidth(6.6),
        marginVertical: responsiveWidth(1.2),
    },

    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

};
