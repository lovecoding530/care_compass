/**
 * @providesModule @choice
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';
import {Colors, MediaQueries, FontSizes} from '@theme';
import Button from '@button'
import Text from '@text'
import { Icon } from "native-base";
import { MediaQueryStyleSheet } from "react-native-responsive";
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from "@ResponsiveDimensions";

export default class Choice extends Component {
    constructor(props) {
        super(props);

        const {odd} = props

        this.style = {}
        if(odd){
            this.style.backgroundColor = Colors.backgroundSecondary
        }
    }

    render() {
        return (
            <View style={this.style}>
            {this.props.disabled?
                <View style={styles.container}>
                    <Text smallMedium style={styles.text}>{this.props.text}</Text>            
                </View>
                :
                this.props.selected?
                    <View style={styles.container}>
                        <Icon name={'checkmark'} color={Colors.Navy} style={styles.icon}/>
                        <Text smallMedium style={styles.text}>{this.props.text}</Text>            
                        <Button small light color={Colors.Red} onPress={()=>{this.props.onPress(this.props.index)}}>REMOVE</Button>
                    </View>
                    :
                    <View style={styles.container}>
                        <Text smallMedium style={styles.text}>{this.props.text}</Text>            
                        <Button small light onPress={()=>{this.props.onPress(this.props.index)}}>SELECT</Button>
                    </View>
            }
            </View>    
        )
    }
}

const styles = MediaQueryStyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: deviceWidth(1),
        minHeight: FontSizes.smallMedium + deviceWidth(5),
    },

    icon: {
        marginRight: deviceWidth(1),
    },

    text: {
        flex: 1,
    },

    button: {

    }
}, {
    [MediaQueries.iPhone] : {
        container: {
            padding: deviceWidth(1),
            minHeight: FontSizes.smallMedium + deviceWidth(7),
        }
    }
});