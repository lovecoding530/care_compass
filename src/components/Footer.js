/**
 * @providesModule @footer
 */
import React, {Component} from 'react';
import {StyleSheet,Platform,View,Image } from "react-native";
import {Colors} from '@theme'
import Text from '@text'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';// use for responsive screen UI

export default (props) => {

    return (
      <View style={styles.footerContainer}>
          <Image style={styles.bottomlogo} source={require('../../assets/OnBoarding/OnBoarding_bottom_logo.png')}/>
          <View style={{flex: 55}}/>
          <Text  small style={styles.bottomText}>Use dying to talk developed by Palliative care </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer:{
    flexDirection:'row',
    padding:10,
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
  },

});
