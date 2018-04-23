import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors} from '@theme';

const { width } = Dimensions.get('window');


export default {

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        paddingVertical: 60,
        paddingHorizontal: 100,
    },

    introContainer: {
    },

    title: {
        margin: 8,
    },

    icon: {
        height: 200,
    },

    questionItem: {
        marginVertical: 10,
    },

    questionTitle: {
        marginVertical: 20,
        marginHorizontal: 40,
    },

    textArea: {
        backgroundColor: Colors.backgroundSecondary,
        height: 150,
    }
};
