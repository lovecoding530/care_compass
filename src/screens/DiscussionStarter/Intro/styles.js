import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, MediaQueries} from '@theme';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from "@ResponsiveDimensions";

export default MediaQueryStyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
    },

    introContainer: {
        flexGrow: 1, 
        alignSelf: 'center'
    },

    title: {
        margin: 8,
    },

    subtitle: {
        textAlign: 'center',
        margin: 8,
    },

    icon: {
        height: deviceWidth(25),
        resizeMode: 'contain',
    },

    intro: {
        margin: 10,
        textAlign: 'center',
    },

    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingVertical: deviceWidth(1),
        paddingHorizontal: deviceWidth(10),
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
        padding: 8,
        marginVertical: deviceWidth(4),
    },

    descView: {
        backgroundColor: '#fff',
        borderRadius: deviceWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: deviceWidth(1.2), height: deviceWidth(1.2) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        alignItems: 'center',
        padding: 16,
    }
}, {
    [MediaQueries.iPad] : {
        introContainer: {
            paddingHorizontal: deviceWidth(10),
        },
        buttonBar: {
            paddingHorizontal: deviceWidth(10),            
        }
    },
    [MediaQueries.iPhone] : {
        introContainer: {
            paddingHorizontal: deviceWidth(5),
        },
        buttonBar: {
            paddingHorizontal: deviceWidth(5),            
        }
    }
});
