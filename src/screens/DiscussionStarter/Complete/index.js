import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    Modal,
    Alert,
} from 'react-native';
import {Colors} from '@theme';
import Styles from './styles';
import Button from '@button'
import Text from '@text'
import Share from '../Share'

import { getDiscussionStarter } from "@api";

export default class Complete extends Component {
    constructor(props) {
        super(props);
        const {activityIndex} = this.props.navigation.state.params
        this.state = ({
            activityIndex: activityIndex,
            activities: [],
            activityCount: 0,
            modalVisible: false,
        })
    }

    async componentDidMount() {

        const ds = await getDiscussionStarter(true)
        const activities = ds[0].discussion_starter
        this.setState({
            activities: activities,
            activityCount: activities.length,
        })

    }

    onExit(){
        const {navigate, goBack} = this.props.navigation
        Alert.alert(
            'Are you sure?',
            'Are you sure to exit without share the results?',
            [
              {text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'YES', onPress: () => goBack("DiscussionStarter")},
            ],
            { cancelable: false }
        )
    }

    renderActivityItem({item, index}){
        return (
            <View style={Styles.item}>
                <View style={Styles.itemTitle}>
                    <Text medium bold>Activity {index + 1}: </Text>
                    <Text medium>
                        {" "}{item.stage}
                    </Text>
                </View>
                <Text style={Styles.itemPrecomment}>{item.pre_commencement_text} </Text>
            </View>
        )
    }

    render() { 
        return (
            <View style={Styles.container}>
                <Text mediumLarge bold center>Complete... </Text>
                <FlatList
                    data = {this.state.activities}
                    renderItem = {this.renderActivityItem.bind(this)}
                    keyExtractor = {(item, index) => index.toString()}
                    />
                <View style={Styles.buttonBar}>
                    <Button light onPress={this.onExit.bind(this)}>EXIT</Button>
                    <Button dark onPress={() => {this.setState({modalVisible: true})}}>SHARE RESULTS</Button>
                </View>
                <Text medium center>Need more information? Try our resources</Text>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    >
                    <Share onCancel={()=>{this.setState({modalVisible: false})}}/>
                </Modal>
            </View>
        );
    }
}