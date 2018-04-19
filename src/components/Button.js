/**
 * @providesModule @button
 */

import PropTypes from "prop-types";
import React, {Component} from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {Colors} from '@theme'

export default (props) => {
    const {buttonStyles, textStyles, dark, light, children, onPress} = props;
    if(light){
        return(
            <TouchableOpacity style={[styles.lightButton, buttonStyles]} onPress={onPress}>
                <Text style={[styles.lightButtonText, textStyles]}>{children}</Text>
            </TouchableOpacity>
        )
    }

    if(dark){
        return(
            <TouchableOpacity style={[styles.darkButton, buttonStyles]}>
                <Text style={[styles.darkButtonText, textStyles]}>{children}</Text>
            </TouchableOpacity>
        )    
    }
}

const styles = StyleSheet.create({
    lightButton: {
        borderWidth: 2,
        borderColor: Colors.buttonPrimary,
        padding: 8,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
    },

    darkButton: {
        backgroundColor: Colors.buttonPrimary,
        padding: 8,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
    },

    lightButtonText: {
        color: Colors.textPrimary,
        fontSize: 18,
    },

    darkButtonText: {
        color: '#fff',
        fontSize: 18,
    },

});
