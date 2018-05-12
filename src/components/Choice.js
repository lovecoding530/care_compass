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
import {Colors, MediaQueries} from '@theme';
import Button from '@button'
import Text from '@text'
import { Icon } from "native-base";
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";

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
                        <Icon name={'checkmark'} style={styles.icon}/>
                        <Text smallMedium style={styles.text}>{this.props.text}</Text>            
                        <Button small light onPress={()=>{this.props.onPress(this.props.index)}}>REMOVE</Button>
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
        paddingLeft: responsiveWidth(1),
        minHeight: responsiveWidth(6.6),
    },

    icon: {
        marginRight: responsiveWidth(1),
    },

    text: {
        flex: 1,
    },

    button: {

    }
}, {
    [MediaQueries.iPhone] : {
        container: {
            padding: responsiveWidth(1),
        }
    }
});