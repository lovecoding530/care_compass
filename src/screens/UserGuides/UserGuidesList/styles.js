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
         paddingHorizontal: deviceWidth(1),
    },
    title: {
        color: Colors.Navy,
        fontWeight:"200"
    },
    subtitle: {
        color: Colors.textSecondary,
        textAlign: 'center',
        marginTop:2,
        fontWeight:"200"
    },
    cardtitle: {
        color: Colors.Navy,
        textAlign:'center',
        marginHorizontal:deviceWidth(1.5),
    },
    cardView:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:deviceWidth(2),
    },
    item: {
        flex: 0.5,
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        marginHorizontal:deviceWidth(1.5),  
        marginBottom: deviceWidth(3),   
        paddingVertical:deviceWidth(2),
        justifyContent:'center'
    },
    itemView:{
    },
    firstrowItem: {
        flex: 1,
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: responsiveWidth(1.2),
        borderTopWidth: responsiveWidth(1.2),
        borderTopColor: Colors.Red,
        marginBottom: deviceWidth(3),  
        marginHorizontal:deviceWidth(1.5),  
        paddingVertical:deviceWidth(2),
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
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
        marginHorizontal:deviceWidth(1.5),  
        paddingVertical:deviceWidth(3),
        paddingHorizontal:deviceWidth(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width: deviceWidth(25),
        height: deviceHeight(15),
        resizeMode: 'contain', 
        tintColor: Colors.Red,
        marginTop:deviceWidth(2),
        marginRight:deviceWidth(3)
    },
    smallIcon:{
        width: deviceWidth(6),
        height: deviceHeight(4),
        resizeMode: 'contain', 
        tintColor: Colors.Navy,
    },
    buttonBar: {
        backgroundColor:Colors.Sand,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: deviceWidth(0.5),
        paddingHorizontal: deviceWidth(10),
        alignItems: 'center',
    },
}, 
{
    [MediaQueries.iPad] : {
        scroll: {
            paddingVertical:deviceWidth(3),
            paddingHorizontal: deviceWidth(12),
        },
        firstrowItem: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        itemView:{
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonBar: {
            paddingHorizontal: deviceWidth(13),            
        },
        titleView: {
            paddingHorizontal:deviceWidth(3),
        },
    },
    [MediaQueries.iPhone] : {
        scroll: {
            paddingVertical:deviceWidth(2),
            paddingHorizontal: deviceWidth(1),
        },
        buttonBar: {
            paddingHorizontal: deviceWidth(3),            
        },
        titleView: {
            paddingHorizontal:deviceWidth(10),
        },
    }
});
