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
        fontSize: width/35,
        fontWeight: '300',
        color: Colors.Navy,
        margin: 8,
        textAlign:'center'
    },
    subtitle: {
        fontSize: width/30,
        color: Colors.textSecondary,
        textAlign: 'center',
        marginTop:2,
        fontWeight:"200"
    },
    buttomBar: {
        flexDirection: 'row',
    },
    item: {
        width: width/2.47,
        height: width/12,
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
        height:height/4.7,
        backgroundColor: Colors.Red,
        borderRadius: 8,
        marginHorizontal: 8,    
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstrowView: {
        width: width/2.47,
        height:height/4.7,
        backgroundColor: Colors.backgroundSecondary,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
        shadowColor: 'black',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        paddingVertical:height/50,
        marginTop: 14,    
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTop: {
        width : width/1.2,
        backgroundColor: Colors.Navy,
        borderRadius: 8,
        marginBottom: 8,
        marginTop : width/35,      
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTopView: {
        paddingVertical:height/45,
        width : width/1.2,
        backgroundColor: Colors.backgroundSecondary,
        borderTopLeftRadius:3,
        borderTopRightRadius:3,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
        shadowColor: '#000',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginTop : 5,      
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width:width/6,
        height:height/9,
    },
    iconView:{
        height:height/9,
        marginBottom:height/60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    

};
