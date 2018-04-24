import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors} from '@theme';

const { width,height } = Dimensions.get('window');


export default {

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
    },
    scroll:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollcontainer:{
        marginBottom:height/15,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        margin: 8,
    },
    subtitle: {
        fontSize: 24,
        color: Colors.textPrimary,
        textAlign: 'center',
        margin: 8,
    },
    buttomBar: {
        flexDirection: 'row',
    },
    item: {
        width: width/3,
        height: width/8,
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        margin: 8,    
        justifyContent: 'center',
        alignItems: 'center',
    },

};
