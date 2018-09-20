import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, MediaQueries, Metrics} from '@theme';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from "@ResponsiveDimensions";

export default MediaQueryStyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.yellow,
    },

    scrollView: {
        flexGrow: 1, 
        paddingHorizontal: deviceWidth(3),
    },

    title: {
        marginTop: deviceWidth(1),
        fontWeight: '300',
    },

    subtitle: {
        textAlign: 'center',
        margin: deviceWidth(1),
        fontWeight: '300',
    },

    icon: {
        width: deviceWidth(27),
        height: deviceWidth(25),
        resizeMode: 'contain',
    },

    intro: {
        margin: 10,
        textAlign: 'center',
    },

    titleView: {
        marginVertical: deviceWidth(3),
    },

    descView: {
    },

    flatList: {
        paddingVertical: deviceWidth(3),
    },

    item: {
        backgroundColor: Colors.navy,
        flex: 1,
        marginBottom: deviceWidth(2),
    },

    item_content: {
        alignItems: 'center',
        padding: deviceWidth(2),
    },

    item_number: {
        color: Colors.red,
    }, 

    item_text: {
        fontWeight: '300',
        marginVertical: deviceWidth(1),
    },

}, {
    [MediaQueries.iPhone] : {

    }
});
