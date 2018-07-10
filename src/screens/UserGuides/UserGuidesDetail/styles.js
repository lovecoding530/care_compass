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
    viewImage:{
        alignItems: 'center',
        marginVertical: height/30,
    },
    middleimage: {
        height:height/3,
        width:width/1.5
    },
    viewBody:{
        marginHorizontal : width/9,
        alignItems: 'center'
    },
    item: {
        marginVertical: height/40,
    },
    itemTitle: {
        padding: 16,
        flexDirection: 'row',
        backgroundColor: Colors.backgroundSecondary,
    },
    txtQuestion: {
        fontSize: width/30,
    },
    txtAnswer: {
        fontSize: width/30,
        padding : 16, 
        borderWidth: 1.5,
        borderColor: Colors.backgroundSecondary,
    },
    faqTitle: {
        marginHorizontal : width/10,
    },
    flatList: {
        marginHorizontal : width/10,
    },
    imageView:{
        width: width,
        height: height-responsiveHeight(15), 
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
        paddingVertical:deviceWidth(3),
        paddingHorizontal:deviceWidth(10),
        justifyContent: 'center',
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
        paddingHorizontal:deviceWidth(8),
        paddingVertical:deviceWidth(3),
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

},
{
    [MediaQueries.iPad] : {
        scroll: {
            paddingVertical:deviceWidth(3),
            paddingHorizontal: deviceWidth(12),
        },
        buttonBar: {
            paddingHorizontal: deviceWidth(13),            
        },
        itemView: {
            paddingVertical:deviceWidth(3),
        },
    },
    [MediaQueries.iPhone] : {
        scroll: {
            paddingVertical:deviceWidth(2),
            paddingHorizontal: deviceWidth(3),
        },
        buttonBar: {
            paddingHorizontal: deviceWidth(3),            
        },
        itemView: {
            paddingVertical:deviceWidth(3),
        },
    }
});
