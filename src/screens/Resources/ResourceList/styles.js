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
        backgroundColor: Colors.yellow,
    },
    scroll:{
        paddingVertical: deviceWidth(3),
        paddingHorizontal: deviceWidth(2),
    },
    title: {
        fontWeight:"300"
    },
    cardView:{
        flex: 1,
        backgroundColor: Colors.navy,
        marginHorizontal: deviceWidth(1),
        marginBottom: deviceWidth(2),
        padding: deviceWidth(1),
    },
    subtitle: {
        marginTop:2,
        fontWeight:"300"
    },
    item: {
        flex: 0.5,
        backgroundColor: Colors.backgroundPrimary,
        borderRadius: deviceWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: deviceWidth(1.2), height: deviceWidth(1.2) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        marginBottom: deviceWidth(3), 
        marginHorizontal:deviceWidth(1.5),   
        paddingVertical:deviceWidth(2), 
        alignItems:'center',
        justifyContent: 'center',
    },
    titleView: {
        marginBottom: deviceWidth(2), 
        marginHorizontal: deviceWidth(1)
    },
    icon:{
        width: width/6,
        height: height/9,
        resizeMode: 'contain', 
        tintColor: Colors.Red,
    }
}, 
{
    [MediaQueries.iPhone] : {
    }
});
