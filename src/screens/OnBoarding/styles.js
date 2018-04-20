/**
 * @providesModule @OnBoardingstyles
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

//import {Colors} from '../../theme'; // use for theme color
import {Colors} from '@theme'
const { width, height } = Dimensions.get('window'); // Detect screen width and height
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';// use for responsive screen UI

export default {
  slide: {
    flex: 1,              
    alignItems: 'center', 
    justifyContent:'center' ,     
  },
  logo:{
    marginBottom:responsiveHeight(3),
    marginTop:responsiveHeight(8),
    height:responsiveHeight(12),
    width:responsiveWidth(25),
  },
  middleimage:{
    height:responsiveHeight(35),
    width:responsiveWidth(65),
  },
  descText: {
    marginHorizontal: 40,
    marginVertical:responsiveHeight(4)
  },
  fullScreen: {
    width: width,
    height: height,
  },
  container: {
    backgroundColor: Colors.backgroundSecondary,
    position: 'relative'
  },
  pagination: {
    position: 'absolute',
    bottom: responsiveHeight(17),
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'transparent'
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.25)',
    width: responsiveWidth(10),
    height: 5,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 3,
    marginBottom: 3
  },
  activeDot: {
    backgroundColor: 'gray',
  },
  buttonWrapper: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    position: 'absolute',
    bottom: responsiveHeight(15),
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 40,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonPrev: {         
    width:responsiveWidth(22),
    height:responsiveHeight(5),
    alignItems:'center',
    justifyContent:'center'
  },
  prevText: {
    color: Colors.gray,
    textAlign:'center',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize:responsiveFontSize(1.5)
  },
  buttonNext: {       
    width:responsiveWidth(22),
    height:responsiveHeight(5),
    alignItems:'center',
    justifyContent:'center',
  },
  nextText: {
    color: Colors.alphaPrimary,
    textAlign:'center',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize:responsiveFontSize(1.5)
  },
  bottomContainer:{
    flexDirection:'row',
    flex:0.2,
    padding:10,
    width:responsiveWidth(100),
    marginTop:responsiveHeight(8),
    backgroundColor: Colors.backgroundSecondary,
  },
  bottomlogo:{
    marginTop:Platform.OS === 'ios' ? responsiveHeight(8) : responsiveHeight(5),
    height:responsiveHeight(5),
    width:responsiveWidth(20),
  },
  bottomText:{
    marginTop:Platform.OS === 'ios' ? responsiveHeight(10) : responsiveHeight(7),
    textAlign:'right',
    color: Colors.gray,
  }
};
