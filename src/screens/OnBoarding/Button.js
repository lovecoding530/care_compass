/**
 * Button component
 * Renders a button and calls a function passed via onPress prop once tapped
 */

import React, { Component } from 'react';
import {
  StyleSheet,       // CSS-like styles
  Text,             // Renders text
  TouchableOpacity, // Pressable container
  View              // Container component
} from 'react-native';

export default class Button extends Component {
  render({ onPress } = this.props) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  // Button container
  button: {       // Rounded border
    borderWidth: 2,           // 2 point border widht
    borderColor: 'gray',   
    margin:10,  
    width:100,
    height:40,
    alignItems:'center',
    justifyContent:'center'
  },
  // Button text
  text: {
    color: 'gray',
    textAlign:'center',
    fontWeight: 'bold',
    fontFamily: 'Avenir',

  },
});
