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
        alignItems: 'center',
    },
    scrollcontainer:{
        flex : 1,
    },
    title: {
        fontSize: width/20,
        color: Colors.Navy,
        fontWeight:"200"
    },
    subtitle: {
        fontSize: width/30,
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
    itemTop: {
        width : width/1.2,
        backgroundColor: Colors.Navy,
        borderRadius: 8,
        marginBottom: 8,
        marginTop : width/35, 
        paddingTop:5,     
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonBackView:{
        flexDirection:'row',
        backgroundColor:Colors.Sand,
        height:height/16,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:width/12
    },
    buttonBack:{
        height:height/22,
        width:width/6,
        paddingHorizontal:width/90
    },
    itemView: {
        width : width/1.2,
        height: height/2,
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

};
