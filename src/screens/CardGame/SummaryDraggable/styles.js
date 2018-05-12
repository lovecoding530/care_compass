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

    importantBar: {
        flexDirection: 'row',     
        alignItems: 'center',
        marginTop: responsiveWidth(5),
        marginBottom: responsiveWidth(1),
    },

    cardItemWithStar: {
        flexDirection: 'row',
        marginVertical: 4,
        alignItems: 'center',
    },

    cardItem: {
        backgroundColor: Colors.backgroundSecondary,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: responsiveWidth(1),
        paddingRight: 0,
        marginRight: responsiveWidth(1),
    },

    question: {
        marginHorizontal: responsiveWidth(1),
        flex: 1,
    },
    
    levelContainer: {
        marginBottom: responsiveWidth(5),
    },

    levelIcon: {
        width: responsiveHeight(2.4),
        height: responsiveHeight(2.4),
        marginRight: 4,
        tintColor: Colors.textPrimary
    },

    dragIcon: {
        width: responsiveWidth(1),
        height: responsiveWidth(3),
        marginRight: 4,
        tintColor: Colors.textPrimary
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
