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
import { copy } from '@utils';
import DeviceInfo from 'react-native-device-info'

export default class ListView extends Component {
    constructor(props) {
        super(props);
        const {cardGame} = this.props.navigation.state.params

        var groupedCardByLevel = {"-1": [], "0": [], "1": [], "2": []}
        for (const card of cardGame.cards) {
            groupedCardByLevel[card.selectedLevel].push(card)
        }

        this.state = ({
            cardGame: cardGame,
            groupedCardByLevel: groupedCardByLevel,
            loaderVisible: false,
        })
    }

    componentDidMount() {
    }

    renderCardItem({item, index}){
        var cardItem = 
            <View style={Styles.cardItemWithStar}>
                <View style={Styles.cardItem}>
                    <Image source={Images.threeDots} style={Styles.levelIcon}/>
                    <Text style={Styles.question}>{item.question}</Text>
                    <Image source={Images.levelNot} style={Styles.levelIcon}/>
                    <Image source={Images.levelSomewhat} style={Styles.levelIcon}/>
                    <Image source={Images.levelVery} style={Styles.levelIcon}/>
                </View>
                
            </View>
        return cardItem
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={Styles.container}>
                <Loader loading={this.state.loaderVisible}/>
                <View style={Styles.title}>
                    <Text mediumLarge bold center>Your Priorities</Text>
                </View>
                <ScrollView>
                    {(this.state.groupedCardByLevel[2].length > 0) &&
                    <View>
                        <View style={Styles.importantBar}>
                            <Image source={Images.levelVery} style={Styles.levelIcon}/>
                            <Text bold>VERY IMPORTANT</Text>
                        </View>
                        <FlatList
                            data = {this.state.groupedCardByLevel[2]}
                            renderItem = {this.renderCardItem.bind(this)}
                            keyExtractor = {(item, index) => index.toString()}
                        />
                    </View>
                    }
                    {(this.state.groupedCardByLevel[1].length > 0) &&
                    <View>
                        <View style={Styles.importantBar}>
                            <Image source={Images.levelVery} style={Styles.levelIcon}/>
                            <Text bold>SOMEWHAT IMPORTANT</Text>
                        </View>
                        <FlatList
                            data = {this.state.groupedCardByLevel[1]}
                            renderItem = {this.renderCardItem.bind(this)}
                            keyExtractor = {(item, index) => index.toString()}
                        />
                    </View>
                    }
                    {(this.state.groupedCardByLevel[0].length > 0) &&
                    <View>
                        <View style={Styles.importantBar}>
                            <Image source={Images.levelVery} style={Styles.levelIcon}/>
                            <Text bold>NOT IMPORTANT</Text>
                        </View>
                        <FlatList
                            data = {this.state.groupedCardByLevel[0]}
                            renderItem = {this.renderCardItem.bind(this)}
                            keyExtractor = {(item, index) => index.toString()}
                        />
                    </View>
                    }
                    {(this.state.groupedCardByLevel[-1].length > 0) &&
                    <View>
                        <View style={Styles.importantBar}>
                            <Image source={Images.levelVery} style={Styles.levelIcon}/>
                            <Text bold>SKIPPED</Text>
                        </View>
                        <FlatList
                            data = {this.state.groupedCardByLevel[-1]}
                            renderItem = {this.renderCardItem.bind(this)}
                            keyExtractor = {(item, index) => index.toString()}
                        />
                    </View>
                    }
                </ScrollView>
                <View style={Styles.buttonBar}>
                    <Button light>EXIT</Button>
                    <Button dark>SHARE RESULTS</Button>
                </View>
            </View>
        );
    }
}