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

export default MediaQueryStyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        padding: responsiveWidth(8),
    },

    pregressBar: {
        marginHorizontal: responsiveWidth(13),
        marginVertical: responsiveWidth(4),
    },

    title: {
        margin: responsiveWidth(1),
        flexDirection: 'row',
        justifyContent: 'center'
    },

    icon: {
        height: 200,
    },

    questionItem: {
        marginTop: responsiveWidth(1.3),
        marginBottom: responsiveWidth(4),
    },

    questionTitle: {
        marginBottom: responsiveWidth(1.8),
        marginHorizontal: responsiveWidth(2),
    },

    textArea: {
        backgroundColor: Colors.backgroundSecondary,
        height: responsiveWidth(16),
        color: Colors.textPrimary,
        fontSize: FontSizes.smallMedium,
        padding: 8,
    },

    buttonBar: {
        flexDirection: 'row',
        marginVertical: 16,
        justifyContent: 'space-between',
    },

}, {
    [MediaQueries.iPad] : {
        container: {
            padding: responsiveWidth(8),
        }
    },
    [MediaQueries.iPhone] : {
        container: {
            padding: responsiveWidth(4),
        }
    }
});
