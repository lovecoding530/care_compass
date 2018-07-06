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
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from "@ResponsiveDimensions";

export default {
  slide: {           
    alignItems: 'center',
  },
  scrollcontainer:{
    alignItems:'center',
  },
  logo:{
    marginBottom:deviceHeight(5.5),
    marginTop:deviceHeight(8),
    height:deviceHeight(15),
    width:deviceWidth(25),
  },
  middleimage:{
    height:deviceHeight(33),
  },
  descText: {
    textAlign:'center',
    color:Colors.textSecondary,
    fontSize:deviceWidth(2.5)
  },
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical:deviceHeight(2)
  },
  dot: {
    backgroundColor: Colors.white,
    width: deviceWidth(12),
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
    width:deviceWidth(25),
    height:deviceHeight(5.5),
    alignItems:'center',
    justifyContent:'center',
    marginTop:deviceHeight(3)
  },
  buttonNext: {       
    width:deviceWidth(25),
    height:deviceHeight(5.5),
    alignItems:'center',
    justifyContent:'center',
    marginTop:deviceHeight(3)
  },
  textView:{
    backgroundColor:Colors.white,
    paddingHorizontal: deviceWidth(10),
    paddingVertical:deviceHeight(2),
  },
  background: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
};
