/**
 * @providesModule @OnBoardingstyles
 */

import React, { Component } from 'react';
import {
    Platform,
    Dimensions,
    orientation
} from 'react-native';

//import {Colors} from '../../theme'; // use for theme color
import {Colors} from '@theme'
const { width, height } = Dimensions.get('window'); // Detect screen width and height
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';// use for responsive screen UI

export default {
  slide: {           
    alignItems: 'center',
    paddingHorizontal:width/10, 
  },
  scrollcontainer:{
    alignItems:'center',
  },
  logo:{
    marginBottom:height/15,
    marginTop:height/10,
    height:height/8,
    width:width/3,
  },
  middleimage:{
    height:height/3,
    width:width/1.38,
  },
  descText: {
    textAlign:'center',
    color:Colors.textSecondary
  },
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical:height/50
  },
  dot: {
    backgroundColor: Colors.white,
    width: width/8,
    height: 5,
    borderWidth:1,
    borderColor:Colors.Olive,
    marginLeft: 2,
    marginRight: 2,
  },
  activeDot: {
    backgroundColor: Colors.Olive,
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

  },
  buttonPrev: {         
    width:width/4,
    height:height/18,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonNext: {       
    width:width/4,
    height:height/18,
    alignItems:'center',
    justifyContent:'center',
  },
  textView:{
    backgroundColor:Colors.white,
    width:width/1.38,
    height:height/8,
    paddingHorizontal: width/10,
    paddingVertical:height/40,
  },
  background: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
};
