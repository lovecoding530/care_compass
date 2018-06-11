import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, FontSizes, MediaQueries, Metrics} from '@theme';

const { width } = Dimensions.get('window');

import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from "@ResponsiveDimensions";

export default MediaQueryStyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
    },

    pregressBar: {
        marginHorizontal: deviceWidth(13),
        marginVertical: deviceWidth(2),
    },

    title: {
        margin: deviceWidth(1),
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    icon: {
        height: 200,
    },

    questionItem: {
        marginVertical: deviceWidth(1.5),
        backgroundColor: '#fff',
        borderRadius: deviceWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: Metrics.shadowOffset, height: Metrics.shadowOffset },
        shadowOpacity: 0.4,
        shadowRadius: 0,
        padding: deviceWidth(1.2),
    },

    questionTitle: {
        marginBottom: deviceWidth(1.8),
        marginHorizontal: deviceWidth(2),
    },

    textArea: {
        backgroundColor: Colors.backgroundSecondary,
        height: deviceWidth(16),
        color: Colors.textPrimary,
        fontSize: FontSizes.smallMedium,
        padding: 8,
    },
    
    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: deviceWidth(8),
    },

    titleView: {
        borderTopColor: Colors.Red,
        backgroundColor: '#fff',
        borderRadius: deviceWidth(1.2),
        borderTopWidth: deviceWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: Metrics.shadowOffset, height: Metrics.shadowOffset },
        shadowOpacity: 0.4,
        shadowRadius: 0,
        padding: 8,
        marginBottom: deviceWidth(2),
    },

    scrollView: {
        flexGrow: 1,
        paddingTop: deviceWidth(4),
        paddingHorizontal: deviceWidth(8),
        paddingBottom: 0,
    }, 

    answerButtonWrapper: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },

    answerButton: {
        backgroundColor: Colors.lightGray, 
        paddingVertical: deviceWidth(1), 
        paddingHorizontal: deviceWidth(2), 
        marginTop: deviceWidth(1),
        marginHorizontal: deviceWidth(1),
    }
}, {
    [MediaQueries.iPhone] : {
        scrollView: {
            paddingHorizontal: deviceWidth(2.8),
        },
        buttonBar: {
            paddingHorizontal: deviceWidth(2.8),
        },
    }
});
