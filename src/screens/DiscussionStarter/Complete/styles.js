import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, FontSizes, MediaQueries, Metrics} from '@theme';

import { MediaQueryStyleSheet } from "react-native-responsive";
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from "@ResponsiveDimensions";

export default MediaQueryStyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
    },

    contentView: {
        flexGrow: 1, 
        paddingHorizontal: deviceWidth(8),
        paddingVertical: deviceWidth(2)
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
        paddingVertical: deviceWidth(4),
        marginVertical: deviceWidth(2),
        marginHorizontal: deviceWidth(1)
    },

    flatList: {
        justifyContent: 'center',
        paddingHorizontal: deviceWidth(1.2),
    },

    currentWrapper: {
        marginVertical: deviceHeight(1), 
        shadowColor: '#000',
        shadowOffset: { width: Metrics.shadowOffset, height: Metrics.shadowOffset },
        shadowOpacity: 0.4,
        shadowRadius: 0,
    },

    current: {
        borderRadius: deviceWidth(1.2),
        overflow: 'hidden'
    },

    currentHeader: {
        padding: deviceWidth(1),
        flexDirection: 'row',
        backgroundColor: Colors.Navy,
        alignItems: 'center',
        justifyContent: 'space-between',        
    },

    complete_text: {
        fontSize: deviceHeight(3)
    },

    currentDescView: {
        backgroundColor: '#fff',
        padding: deviceWidth(2),
        alignItems: 'center',
    },

    currentTitle: {
        marginVertical: 8,
    },

    currentPrecomment: {
    },

    saveView: {
        backgroundColor: '#fff',
        borderRadius: deviceWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: Metrics.shadowOffset, height: Metrics.shadowOffset },
        shadowOpacity: 0.4,
        shadowRadius: 0,
        padding: deviceWidth(1),
        marginVertical: deviceWidth(2),
        marginHorizontal: deviceWidth(1),
    },

    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: deviceWidth(9),
    },

    checkIcon: {
        width: deviceHeight(4),
        height: deviceHeight(4),
        marginRight: 8,
        tintColor: '#fff',
    }
}, {
    [MediaQueries.iPhone] : {
        contentView: {
            paddingHorizontal: deviceWidth(2.8),
        },
        buttonBar: {
            paddingHorizontal: deviceWidth(2.8),
        },
    }
});
