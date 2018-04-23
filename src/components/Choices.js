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
        var {data, selectedIndex} = props

        this.state = {
            choiceData: this.getChoiceData(data, selectedIndex)
        }
    }

    getChoiceData(data, selectedIndex){

        var choiceData = data.map((text, index) => {
            var odd = index % 2 == 0
            if(selectedIndex < 0){
                return {
                    index: index,
                    text: text,
                    selected: false,
                    disabled: false,
                    odd: odd,
                }        
            }else{
                if(selectedIndex == index){
                    return {
                        index: index,
                        text: text,
                        selected: true,
                        disabled: false,
                        odd: odd,
                    }
                }else{
                    return {
                        index: index,
                        text: text,
                        selected: false,
                        disabled: true,
                        odd: odd,
                    }                        
                }
            }
        })

        return choiceData
    }

    onItemPressed(choiceIndex){
        var choiceItem = this.state.choiceData[choiceIndex]
        // alert(JSON.stringify(choiceItem))
        var selectedIndex;
        if(choiceItem.selected) selectedIndex = -1;
        else                    selectedIndex = choiceIndex
        
        this.setState({
            choiceData: this.getChoiceData(this.props.data, selectedIndex)
        })    

        //react bug Not render until scroll
        this.props.scrollViewRef.scrollTo({y: -1})
        this.props.scrollViewRef.scrollTo({y: 1})

        this.props.onChangedAnswer(this.props.questionIndex, selectedIndex)
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

