import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors} from '@theme';

const { width } = Dimensions.get('window');
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';


export default {

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        padding: responsiveWidth(8),
        justifyContent: 'center',
        alignItems: 'center',
    },

    introContainer: {
    },

    title: {
        margin: 8,
    },

    subtitle: {
        margin: 8,
    },

    item: {
        width: width/3,
        height: width/3,
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        margin: 8,        
        justifyContent: 'center',
        alignItems: 'center',
    },

    itemText: {
        fontSize: 24,
        flex: 1,
        width: 200
    },

};
