import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, FontSizes, MediaQueries} from '@theme';
import { MediaQueryStyleSheet } from "react-native-responsive";
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from "@ResponsiveDimensions";

export default {

    container: {
        flexGrow: 1, 
        backgroundColor: Colors.backgroundPrimary,
        paddingHorizontal: deviceWidth(12),
        justifyContent: 'center'
    },

    title: {
        marginVertical: deviceWidth(4),
    },

    questionView: {
        backgroundColor: Colors.backgroundThird,
        height: deviceWidth(40),
        marginHorizontal: deviceWidth(1),
        marginVertical: deviceWidth(2),
        justifyContent: 'center'
    },

    additionalInfo: {
        backgroundColor: Colors.backgroundThird,
        marginHorizontal: deviceWidth(1),
        marginBottom: deviceWidth(2),
        padding: deviceWidth(1),
    },

    levelBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    levelItem: {
        backgroundColor: Colors.backgroundThird,
        marginHorizontal: deviceWidth(1),
        alignItems: 'center',
        padding: deviceWidth(1),
        flex: 1,
    },

    levelIcon: {
        width: deviceWidth(3.2),
        height: deviceWidth(3.2),
        marginVertical: 4,
    },

    progress: {
        marginVertical: deviceWidth(4),
    },

    progressBar: {
        marginHorizontal: deviceWidth(6.6),
        marginVertical: deviceWidth(1.2),
    },

    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

};
