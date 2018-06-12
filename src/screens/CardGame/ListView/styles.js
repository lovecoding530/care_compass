import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, FontSizes, MediaQueries} from '@theme';
import { MediaQueryStyleSheet } from "react-native-responsive";
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from "@ResponsiveDimensions";

export default MediaQueryStyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        paddingHorizontal: deviceWidth(8),
    },

    title: {
        marginVertical: deviceWidth(2),
    },

    cardItem: {
        marginBottom: deviceWidth(4),
    },

    question: {
        flexDirection: 'row',
        marginBottom: deviceWidth(2),
    },

    questionView: {
        backgroundColor: Colors.backgroundThird,
        height: windowHeight(15),
        justifyContent: 'center',
        flex: 1,
        padding: deviceWidth(1),
    },

    additionalInfo: {
        backgroundColor: Colors.backgroundThird,
        marginBottom: deviceWidth(2),
        padding: deviceWidth(1),
    },

    levelBar: {
        justifyContent: 'space-between',
    },

    levelItem: {
        backgroundColor: Colors.backgroundThird,
        flexDirection: 'row',
        marginLeft: deviceHeight(1.5),
        justifyContent: 'center',
        alignItems: 'center',
        padding: deviceWidth(1),
        width: deviceHeight(15.5),
    },

    levelIcon: {
        width: deviceHeight(2.3),
        height: deviceHeight(2.3),
        marginHorizontal: 4,
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
        marginVertical: deviceWidth(2),
    },

}, {
    [MediaQueries.iPad] : {
        container: {
            paddingHorizontal: deviceWidth(8),
        }
    },
    [MediaQueries.iPhone] : {
        container: {
            paddingHorizontal: deviceWidth(4),
        }
    }
});
