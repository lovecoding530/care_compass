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
        flex:1,
        marginBottom:height/15,
    },
    title: {
        fontSize: width/15,
        marginTop: height/10,
        color: Colors.textPrimary,
    },
    subtitle: {
        fontSize: width/25,
        color: Colors.textPrimary,
        textAlign: 'center',
        marginBottom: height/50,
        marginTop:2,
    },
    

};
