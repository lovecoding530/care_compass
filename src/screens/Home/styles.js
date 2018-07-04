import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, MediaQueries, FontSizes, Metrics} from '@theme';

import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";
import { deviceWidth, deviceHeight, windowHeight } from "@ResponsiveDimensions";

export default MediaQueryStyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        paddingHorizontal: 32,
    },

    scrollView: {
        flexGrow: 1,
        flexDirection: 'row'
    },

    containerRight: {
        flex: 3,
    },

    containerLeft: {
        flex: 5,
    },

    item: {
        margin: 8,
        flex: 1,
    },

    survey_item: {
        flex: 0.25,
    },

    right_item_text: {
        color: Colors.Red,
    },
    
    left_item_text: {
        color: Colors.Navy,
    },
    
    right_icon: {
        width: '60%',
        height: '60%',
        resizeMode: 'contain', 
        marginVertical: 20,
    },

    left_icon: {
        width: '60%',
        height: '60%',
        resizeMode: 'contain', 
        marginVertical: 20,
    }
}, {
    [MediaQueries.iPhone] : {
        scrollView: {
            flexDirection: 'column',
        },

        survey_item: {
            flex: 1,
        },
        containerLeft: {
            flex: 3,
        },
        containerRight: {
            flex: 5,
        },
        left_item_text: {
            fontSize: FontSizes.medium
        }
    }
});
