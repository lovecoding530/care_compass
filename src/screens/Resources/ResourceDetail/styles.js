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
        paddingVertical:height/60
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
        height:Dimensions.get('window').height/3,
        width:Dimensions.get('window').width/1.5
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
        paddingHorizontal:width/20
    },
    buttonBack:{
        height:height/22,
        paddingHorizontal:width/30
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
        middleimage: {
            height:Dimensions.get('window').height/3,
            width:Dimensions.get('window').width/1.5
        },
        scroll:{
            paddingHorizontal: width/10,
            paddingVertical:height/40
        },
        buttonBackView:{
            flexDirection:'row',
            backgroundColor:Colors.Sand,
            height:height/16,
            justifyContent:'space-between',
            alignItems:'center',
            paddingHorizontal:width/9
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
