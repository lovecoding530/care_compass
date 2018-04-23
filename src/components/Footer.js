/**
 * @providesModule @footer
 */
import React, {Component} from 'react';
import {StyleSheet,Platform,View,Image,Dimensions } from "react-native";
import {Colors} from '@theme'
import Text from '@text'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';// use for resp
const { width, height } = Dimensions.get('window'); // Detect screen width and heightonsive screen UI

export default (props) => {

    return (
      <View style={styles.fixedFooter}>
          <Image style={styles.bottomlogo} source={require('../../assets/OnBoarding/OnBoarding_bottom_logo.png')}/>
          <View style={{flex: 55}}/>
          <Text  small style={styles.bottomText}>Use dying to talk developed by Palliative care </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  fixedFooter: {
    flexDirection:'row',
    padding:10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height:height/15
  },
    footerContainer:{
    flexDirection:'row',
    padding:10,
  },
  bottomlogo:{
    height:height/25,
    width:width/5,
  },
  bottomText:{
    marginTop:Platform.OS === 'ios' ? height/60 : height/10,
    textAlign:'right',
    color: Colors.gray,
  },

});
