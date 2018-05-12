import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, FontSizes} from '@theme';

const { width } = Dimensions.get('window');

import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

export default {

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        paddingHorizontal: responsiveWidth(8),
        paddingVertical: responsiveWidth(13),
    },

    flatList: {
        marginVertical: responsiveWidth(4),
    },

    item: {
        marginVertical: responsiveWidth(1.2), 
    },

    itemTitle: {
        padding: responsiveWidth(2),
        flexDirection: 'row',
        backgroundColor: Colors.backgroundSecondary,
    },

    itemPrecomment: {
        padding : responsiveWidth(2), 
        borderWidth: 1.5,
        borderColor: Colors.backgroundSecondary,
    },

    buttonBar: {
        flexDirection: 'row',
        marginVertical: responsiveWidth(2),
        marginHorizontal : responsiveWidth(6.6), 
        justifyContent: 'center',
    },

    checkIcon: {
        width: responsiveHeight(3.2),
        height: responsiveHeight(3.2),
        marginRight: responsiveHeight(1),
    }
};
