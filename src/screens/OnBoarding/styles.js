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
    flex: 1,              
    alignItems: 'center', 
    justifyContent:'center' , 
    width:responsiveWidth(100)    
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
  container: {
    flex: 1, 
    backgroundColor: Colors.backgroundPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
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
  buttonNext: {       
    width:responsiveWidth(22),
    height:responsiveHeight(5),
    alignItems:'center',
    justifyContent:'center',
  },
};
