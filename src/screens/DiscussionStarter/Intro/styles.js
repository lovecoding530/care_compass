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
        padding: responsiveWidth(10),
        justifyContent: 'center',
        alignItems: 'center',
    },

    introContainer: {
        justifyContent: 'center',
        alignItems: 'center',
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
    },

    intro: {
        margin: 10,
        textAlign: 'center',
    },

    buttonBar: {
        flexDirection: 'row',
        margin: 16,
    },
}, {
    [MediaQueries.iPad] : {
        container: {
            padding: responsiveWidth(10),
        }
    },
    [MediaQueries.iPhone] : {
        container: {
            padding: responsiveWidth(5),
        }
    }
});
