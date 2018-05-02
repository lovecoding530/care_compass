import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, FontSizes} from '@theme';
import { Col } from 'native-base';

const { width } = Dimensions.get('window');


export default {

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        paddingVertical: 60,
        paddingHorizontal: 100,
    },

    title: {
        marginVertical: 30,
    },

    importantBar: {
        flexDirection: 'row',     
        alignItems: 'center'   
    },

    cardItemWithStar: {
        flexDirection: 'row',
        backgroundColor: Colors.backgroundSecondary,
        padding: 6,
        paddingRight: 0,
        marginVertical: 4,
    },

    cardItem: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },

    question: {
        flex: 1,
    },

    levelBar: {
        justifyContent: 'space-between',
    },

    levelItem: {
        backgroundColor: Colors.backgroundThird,
        flexDirection: 'row',
        marginLeft: 16,
        justifyContent: 'center',
        padding: 8,
        width: 150,
    },

    levelIcon: {
        width: 30,
        height: 30,
        marginRight: 4,
    },

    progress: {
        marginVertical: 30,
    },

    progressBar: {
        marginHorizontal: 50,
        marginVertical: 10,
    },

    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15,
    },

};
