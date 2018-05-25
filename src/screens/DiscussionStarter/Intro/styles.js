import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, MediaQueries} from '@theme';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";

export default MediaQueryStyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
    },

    introContainer: {
        paddingHorizontal: responsiveWidth(10),
        flex: 1, 
    },

    title: {
        margin: 8,
    },

    subtitle: {
        textAlign: 'center',
        margin: 8,
    },

    icon: {
        height: responsiveWidth(25),
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
        paddingVertical: responsiveWidth(1),
        paddingHorizontal: responsiveWidth(10),
    },

    titleView: {
        borderTopColor: Colors.Red,
        backgroundColor: '#fff',
        borderRadius: responsiveWidth(1.2),
        borderTopWidth: responsiveWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        padding: 8,
        marginVertical: responsiveWidth(4),
    },

    descView: {
        backgroundColor: '#fff',
        borderRadius: responsiveWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        alignItems: 'center',
        padding: 16,
    }
}, {
    [MediaQueries.iPad] : {
        introContainer: {
            paddingHorizontal: responsiveWidth(10),
        },
        buttonBar: {
            paddingHorizontal: responsiveWidth(10),            
        }
    },
    [MediaQueries.iPhone] : {
        introContainer: {
            paddingHorizontal: responsiveWidth(5),
        },
        buttonBar: {
            paddingHorizontal: responsiveWidth(5),            
        }
    }
});
