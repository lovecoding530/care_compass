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
        height:deviceHeight(35),
        width:deviceWidth(60)
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
        marginBottom: deviceWidth(3),
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
    itemView: {
        flex:1,
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        paddingHorizontal:deviceWidth(4),
        paddingVertical:width/50,
        justifyContent: 'center',
        alignItems: 'center',
    },

}, 
{
    [MediaQueries.iPad] : {
        scroll: {
            paddingVertical:deviceWidth(4),
            paddingHorizontal: deviceWidth(10),
        },
        buttonBar: {
            paddingHorizontal: deviceWidth(11),            
        },
        itemView: {
            paddingVertical:width/50,
        },
    },
    [MediaQueries.iPhone] : {
        scroll: {
            paddingVertical:deviceWidth(3),
            paddingHorizontal: deviceWidth(5),
        },
        buttonBar: {
            paddingHorizontal: deviceWidth(6),            
        },
        itemView: {
            paddingVertical:width/40,
        },
    }
});
