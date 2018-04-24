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
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 36,
        marginTop: 50,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 8,        
    },
    viewImage:{
        alignItems: 'center'
    },
    subtitle: {
        fontSize: 12,
        color: Colors.textPrimary,
        textAlign: 'center',
        margin: 8,
    },
    middleimage: {
        height:Dimensions.get('window').height/3,
        width:Dimensions.get('window').width/1.5
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
    buttonContainer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },

};
