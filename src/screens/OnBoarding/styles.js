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
  },
  logo:{
  },
  middleimage:{
    
  },
  descText: {
    marginHorizontal: width/10,
    marginTop:height/25
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
    height: 5,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 3,
  },
  activeDot: {
    backgroundColor: 'gray',
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  buttonPrev: {      
    alignItems:'center',
    justifyContent:'center'
  },
  buttonNext: {       
    alignItems:'center',
    justifyContent:'center',
  },
};
