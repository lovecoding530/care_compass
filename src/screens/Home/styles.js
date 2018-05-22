import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors} from '@theme';

const deviceHeight = Dimensions.get("window").height;

export default {

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        padding: 16,
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
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        margin: 8,        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
};
