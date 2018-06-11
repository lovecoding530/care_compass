import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, MediaQueries, Metrics} from '@theme';

const { width } = Dimensions.get('window');
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from "@ResponsiveDimensions";

export default MediaQueryStyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
    },

    scrollView: {
        flexGrow: 1,
        padding: deviceWidth(8.8),
    },

    introContainer: {
    },

    title: {
        margin: 4,
    },

    subtitle: {
        margin: 4,
    },

    flatList: {
        // alignItems: 'center',
    },

    item: {
        flex: 1,
        height: width/3,
        borderTopColor: Colors.Navy,
        borderTopWidth: deviceWidth(1.2),
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: deviceWidth(1),
        shadowColor: '#000',
        shadowOffset: { width: Metrics.shadowOffset, height: Metrics.shadowOffset },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        margin: deviceWidth(1.2), 
        paddingVertical: deviceWidth(4),     
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    titleView: {
        borderTopColor: Colors.Red,
        backgroundColor: '#fff',
        borderRadius: deviceWidth(1.2),
        borderTopWidth: deviceWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: Metrics.shadowOffset, height: Metrics.shadowOffset },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        padding: 8,
        margin: deviceWidth(1.2), 
        marginBottom: deviceWidth(2),
    },

    item_number_view: {
        width: deviceWidth(6),
        height: deviceWidth(6),
        backgroundColor: Colors.Navy,
        justifyContent: 'center',
        borderRadius: deviceWidth(3),
    },
    item_number: {
        color: Colors.Navy,
        fontWeight: '900'
    }, 
    item_text: {
        color: Colors.Navy,
    },
    item_start_text: {
        color: Colors.Red,
    },

    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: deviceWidth(10),
    },


}, {
    [MediaQueries.iPhone] : {
        scrollView: {
            padding: deviceWidth(2.8),
        },
        buttonBar: {
            paddingHorizontal: deviceWidth(4),            
        },
        item: {
            flexDirection: 'row',
            height: null,
            padding: deviceWidth(2),
            marginVertical: deviceWidth(2),
        },
        item_text: {
            flex: 1,
            marginLeft: deviceWidth(2),
            textAlign: 'left',
        },
        buttonBar: {
            paddingHorizontal: deviceWidth(5),            
        }
    }
});
