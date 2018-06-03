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
    },

    contentView: {
        flexGrow: 1, 
        paddingHorizontal: deviceWidth(8),
    },
    
    titleView: {
        borderTopColor: Colors.Red,
        backgroundColor: '#fff',
        borderRadius: deviceWidth(1.2),
        borderTopWidth: deviceWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: deviceWidth(1.2), height: deviceWidth(1.2) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        paddingVertical: deviceWidth(4),
        marginVertical: deviceWidth(4),
        marginHorizontal: deviceWidth(1)
    },

    flatList: {
        paddingHorizontal: deviceWidth(1.2),
    },

    currentWrapper: {
        marginBottom: deviceHeight(3), 
        shadowColor: '#000',
        shadowOffset: { width: deviceWidth(1.2), height: deviceWidth(1.2) },
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

    moreInfo: {
        width: 240,
        borderTopColor: Colors.Navy,
        backgroundColor: '#fff',
        borderRadius: deviceWidth(1.2),
        borderTopWidth: deviceWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: deviceWidth(1.2), height: deviceWidth(1.2) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        paddingVertical: deviceWidth(1.5),
        marginVertical: deviceWidth(4),
        marginHorizontal: deviceWidth(1),
        alignSelf: 'center',
    },

    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingVertical: deviceWidth(1),
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
        currentWrapper: {
            marginVertical: 0,
        }
    }
});
