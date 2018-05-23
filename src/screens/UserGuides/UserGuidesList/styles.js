import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors} from '@theme';

const { width,height } = Dimensions.get('window');
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';


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
    },
    title: {
        fontSize: width/20,
        color: Colors.Navy,
        fontWeight:"200"
    },
    cardtitle: {
        fontSize: width/30,
        fontWeight: '300',
        color: Colors.Navy,
        margin: 8,
        textAlign:'center'
    },
    subtitle: {
        fontSize: width/30,
        color: Colors.textSecondary,
        textAlign: 'center',
        marginBottom: height/50,
        marginTop:2,
        fontWeight:"200"
    },
    buttomBar: {
        flexDirection: 'row',
    },
    item: {
        width: width/2.47,
        height: width/9,
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        margin: 8,    
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstrowItem: {
        width: width/2.47,
        height: width/3,
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        margin: 8,    
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageView:{
        width: width,
        height: height-responsiveHeight(7), 
    },
    itemTop: {
        paddingVertical : height/45,
        width : width/1.2,
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginBottom: 8,
        marginTop : width/25,      
        justifyContent: 'center',
        alignItems: 'center',
    },

};
