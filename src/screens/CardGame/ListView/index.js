import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView,
    TextInput,
} from 'react-native';
import {Colors, Images} from '@theme';
import Styles from './styles';
import Button from '@button'
import Text from '@text'
import ProgressBar from '@progressbar'
import Choices from "@choices";
import ManyChoices from "@manychoices";

import { getCardGame} from "@api";
import { Loader } from '@components';
import DeviceInfo from 'react-native-device-info'

export default class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            loaderVisible: false,
            cards: []
        })
    }

    async componentDidMount() {
        const cd = await getCardGame(true)
        const firstCardGame = cd[0]
        const cards = firstCardGame.cards
        this.setState({
            cards: cards,
        })
    }

    onSkip(){

    }

    onSelectedLevel(level){
        const {navigate} = this.props.navigation
        navigate("CDSingleView", {cardIndex: this.state.cardIndex+1})
    }

    renderCardItem({item, index}){
        var cardItem = 
            <View style={Styles.cardItem}>
                <View style={Styles.question}>
                    <View style={Styles.questionView}>
                        <Text medium center>{item.question}</Text>
                    </View>
                    <View style={Styles.levelBar}>
                        <TouchableOpacity style={Styles.levelItem} onPress={this.onSelectedLevel.bind(this, 0)}>
                            <Image source={Images.check} style={Styles.levelIcon}/>
                            <Text bold>NOT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.levelItem} onPress={this.onSelectedLevel.bind(this, 1)}>
                            <Image source={Images.check} style={Styles.levelIcon}/>
                            <Text bold>SOMEWHAT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.levelItem} onPress={this.onSelectedLevel.bind(this, 2)}>
                            <Image source={Images.check} style={Styles.levelIcon}/>
                            <Text bold>VERY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {item.additional_info != "" &&
                    <Text center style={Styles.additionalInfo}>Addtional Info</Text>
                }
            </View>
        return cardItem
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={Styles.container}>
                <Loader loading={this.state.loaderVisible}/>
                <View style={Styles.title}>
                    <Text mediumLarge bold center>How important is...</Text>
                </View>
                <FlatList
                    data = {this.state.cards}
                    renderItem = {this.renderCardItem.bind(this)}
                    keyExtractor = {(item, index) => index.toString()}
                />
                <View style={Styles.buttonBar}>
                    <Button light>SINGLE VIEW</Button>
                    <Button dark>FINISH</Button>
                </View>
            </View>
        );
    }
}