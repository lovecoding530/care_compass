/**
 * @providesModule @manychoices
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

export default class ManyChoices extends Component {
    constructor(props) {
        super(props);
        var {data, selectedIndexes} = props

        this.state = {
            choiceData: this.getChoiceData(data, selectedIndexes)
        }
    }

    getChoiceData(data, selectedIndexes){

        var choiceData = data.map((text, index) => {
            var odd = index % 2 == 0
            if(selectedIndexes.includes(index)){
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
                    disabled: false,
                    odd: odd,
                }                        
            }
        })

        return choiceData
    }

    onItemPressed(choiceIndex){
        var choiceData = this.state.choiceData
        var choiceItem = choiceData[choiceIndex]
        choiceData[choiceIndex].selected = !choiceItem.selected
        
        this.setState({
            choiceData: choiceData
        })    

        //react bug Not render until scroll
        this.props.scrollViewRef.scrollTo({y: -1})
        this.props.scrollViewRef.scrollTo({y: 1})

        // this.props.onChangedAnswer(this.props.questionIndex, selectedIndex)
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

