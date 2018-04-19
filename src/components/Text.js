/**
 * @providesModule @text
 */

import PropTypes from "prop-types";
import React, {Component} from 'react';
import { Text, StyleSheet } from "react-native";
import {Colors} from '@theme'

export default (props) => {
    const fontSizes = {
        small: 12,
        smallMedium: 18,
        medium: 24,
        mediumLarge: 36,
        large: 48,
    };

    const colors = {
        light: Colors.white,
        dark: Colors.textPrimary,
    }

    var style = {
        fontSize: fontSizes.smallMedium,
        color: colors.dark,
        textAlign: 'center'
    }

    Object.keys(props).forEach(propKey => {
        if (propKey in fontSizes){
            var fontSize = fontSizes[propKey];
            style.fontSize = fontSize;
        }else if (propKey in colors){
            var color = colors[propKey];
            style.color = color;
        }else if (propKey == 'bold'){
            style.fontWeight = 'bold';
        }else{

        }
    });

    return (
        <Text style={[style, props.style]}>{props.children}</Text>
    )
}

const defaultStyles = StyleSheet.create({
});
