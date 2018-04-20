/**
 * @providesModule @choices
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';

import {Colors} from '@theme';
import Button from '@button'
import Text from '@text'
import Choice from '@choice'

export default class Choices extends Component {
    constructor(props) {
        super(props);
        var {data} = props

        var choiceData = data.map((text, index) => {
            var odd = index % 2 == 0
            return {
                index: index,
                text: text,
                selected: false,
                disabled: false,
                odd: odd,
            }
        })

        this.state = {
            choiceData: choiceData
        }
    }

    onItemPressed(choiceIndex){
        var choiceItem = this.state.choiceData[choiceIndex]
        // alert(JSON.stringify(choiceItem))
        var choiceData = this.state.choiceData.map((itemData, index) => {
            var odd = index % 2 == 0
            if(choiceItem.selected){
                return {
                    index: index,
                    text: itemData.text,
                    selected: false,
                    disabled: false,
                    odd: odd,
                }        
            }else{
                if(choiceItem.index == index){
                    return {
                        index: index,
                        text: itemData.text,
                        selected: true,
                        disabled: false,
                        odd: odd,
                    }
                }else{
                    return {
                        index: index,
                        text: itemData.text,
                        selected: false,
                        disabled: true,
                        odd: odd,
                    }                        
                }
            }
        }) 
        
        this.setState({
            choiceData: choiceData
        })
    }

    render() {
        var choiceList = this.state.choiceData.map((itemData, index) => {
            return (
                <View key={index}>
                    <Choice {...itemData} onPress={this.onItemPressed.bind(this)}/>
                </View>
            )
        })
        return (
            <View removeClippedSubviews={false}>
                {choiceList}
            </View>
        )
    }
}

