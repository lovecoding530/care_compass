import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, FontSizes, MediaQueries} from '@theme';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";

export default MediaQueryStyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        padding: responsiveWidth(8),
    },

    title: {
        marginVertical: responsiveWidth(2),
    },

    cardItem: {
        marginBottom: responsiveWidth(4),
    },

    question: {
        flexDirection: 'row',
        marginBottom: responsiveWidth(2),
    },

    questionView: {
        backgroundColor: Colors.backgroundThird,
        height: responsiveHeight(15),
        justifyContent: 'center',
        flex: 1,
        padding: responsiveWidth(1),
    },

    additionalInfo: {
        backgroundColor: Colors.backgroundThird,
        marginBottom: responsiveWidth(2),
        padding: responsiveWidth(1),
    },

    levelBar: {
        justifyContent: 'space-between',
    },

    levelItem: {
        backgroundColor: Colors.backgroundThird,
        flexDirection: 'row',
        marginLeft: responsiveHeight(1.5),
        justifyContent: 'center',
        alignItems: 'center',
        padding: responsiveWidth(1),
        width: responsiveHeight(15.5),
    },

    levelIcon: {
        width: responsiveHeight(2.3),
        height: responsiveHeight(2.3),
        marginHorizontal: 4,
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
        marginVertical: responsiveWidth(2),
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
