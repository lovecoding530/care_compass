import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, MediaQueries} from '@theme';

const { width,height } = Dimensions.get('window');
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";


export default MediaQueryStyleSheet.create({

    container: {
       flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
    },
    scroll:{
        paddingHorizontal: width/50,
    },
    title: {
        color: Colors.Navy,
        fontWeight:"200",
    },
    subtitle: {
        color: Colors.textSecondary,
        textAlign: 'center',
        marginVertical:width/50,
    },
    middleimage: {
        height:height/7.5,
        width:width/4,
    },
    titleView: {
        backgroundColor: Colors.backgroundSecondary,
        borderTopColor: Colors.Navy,
        borderRadius: responsiveWidth(1.2),
        borderTopWidth: responsiveWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        marginBottom: width/50,
        marginTop : width/35, 
        marginHorizontal:width/60,   
        paddingVertical:height/45,
        paddingHorizontal:width/20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonBackView:{
        flexDirection:'row',
        backgroundColor:Colors.Sand,
        height:height/16,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:width/30
    },
    buttonBack:{
        height:height/22,
        width:width/6,
        paddingHorizontal:width/90
    },
    itemView: {
        flex:1,
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        margin: 8,    
        paddingHorizontal:width/15,
        paddingVertical:width/30,
        justifyContent: 'center',
        alignItems: 'center',
    },

}, {
    [MediaQueries.iPad] : {
        titleView: {
            backgroundColor: Colors.backgroundSecondary,
            borderTopColor: Colors.Navy,
            borderRadius: responsiveWidth(1.2),
            borderTopWidth: responsiveWidth(1.2),
            shadowColor: '#000',
            shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
            shadowOpacity: 0.5,
            shadowRadius: 0,
            marginBottom: width/50,
            marginTop : width/25, 
            marginHorizontal:width/60,   
            paddingVertical:height/45,
            paddingHorizontal:width/20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        middleimage: {
            height:height/6,
            width:width/4.5,
        },
        scroll:{
            paddingHorizontal: width/10,
        },
        buttonBackView:{
            flexDirection:'row',
            backgroundColor:Colors.Sand,
            height:height/16,
            justifyContent:'space-between',
            alignItems:'center',
            paddingHorizontal:width/8
        },
        itemView: {
            flex:1,
            backgroundColor: Colors.backgroundSecondary,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
            shadowOpacity: 0.5,
            shadowRadius: 0,
            margin: 8,    
            paddingHorizontal:width/25,
            paddingVertical:width/40,
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
});
