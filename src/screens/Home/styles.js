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
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: deviceWidth(1.2),
        borderTopWidth: deviceWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: Metrics.shadowOffset, height: Metrics.shadowOffset },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        margin: 8,        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },

    right_item: {
        borderTopColor: Colors.Red,
    },
    
    left_item: {
        borderTopColor: Colors.Navy,
    },

    survey_item: {
        borderTopColor: Colors.Navy,
        flex: 0.4,
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
        tintColor: Colors.Red,
        marginVertical: 20,
    },

    left_icon: {
        width: '60%',
        height: '60%',
        resizeMode: 'contain', 
        tintColor: Colors.Navy,
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
