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
        flex : 1,
        marginBottom:height/15,
    },
    title: {
        fontSize: width/15,
        marginTop: height/10,
        color: Colors.textPrimary,       
    },
    viewImage:{
        alignItems: 'center'
    },
    subtitle: {
        fontSize: width/25,
        color: Colors.textPrimary,
        textAlign: 'center',
        marginBottom: height/50,
        marginTop:2,
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
