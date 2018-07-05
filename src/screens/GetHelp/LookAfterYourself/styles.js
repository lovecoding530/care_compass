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
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from "@ResponsiveDimensions";


export default MediaQueryStyleSheet.create({

    container: {
       flex: 1, 
    backgroundColor: Colors.backgroundPrimary,
    },
    scroll:{
        
        alignSelf: 'center',
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
        height:height/6,
        width:width/4.5,
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
        marginTop : width/35, 
        marginBottom: width/35,
        paddingVertical:height/60,
        paddingHorizontal:width/20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonBar: {
        backgroundColor:Colors.Sand,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: deviceWidth(0.5),
        paddingHorizontal: deviceWidth(10),
        alignItems: 'center',
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
        paddingHorizontal:width/25,
        paddingVertical:width/50,
        marginBottom : width/35, 
        justifyContent: 'center',
        alignItems: 'center',
    },
},
{
    [MediaQueries.iPad] : {
        scroll: {
            paddingHorizontal: deviceWidth(10),
        },
        buttonBar: {
            paddingHorizontal: deviceWidth(11),            
        },
        titleView: {
            marginTop : width/25, 
        },
        middleimage: {
            height:height/6,
            width:width/4.5,
        },
        itemView: {
            paddingHorizontal:width/25,
            paddingVertical:width/50,
        },
    },
    [MediaQueries.iPhone] : {
        scroll: {
            paddingHorizontal: deviceWidth(5),
        },
        buttonBar: {
            paddingHorizontal: deviceWidth(6),            
        },
        titleView: {
            marginTop : width/35, 
        },
        middleimage: {
            height:height/7.5,
            width:width/4,
        },
        itemView: {
            paddingHorizontal:width/20,
            paddingVertical:width/40,
        },
    }
});
