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
import {Colors, Images} from '@theme';
import Styles from './styles';
import Button from '@button'
import Text from '@text'
import ShareModal from './modals/Share'
import EmailModal from './modals/Email'
import DownloadedModal from './modals/Downloaded'
import EmailSentModal from './modals/EmailSent'

import { getDiscussionStarter } from "@api";

export default class Complete extends Component {
    constructor(props) {
        super(props);
        const {activityIndex} = this.props.navigation.state.params
        this.state = ({
            activityIndex: activityIndex,
            activities: [],
            activityCount: 0,
            modalVisible: {
                share: false,
                downloaded: false,
                email: false,
                emailSent: false,
            },
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

    onShareEmail() {

    }

    onShareDownload() {
        this.setState({
            modalVisible: {
                share: false,
                downloaded: false,
                email: false,
                emailSent: false,
            }
        })        
        setTimeout(()=>{
            this.setState({
                modalVisible: {
                    share: false,
                    downloaded: true,
                    email: false,
                    emailSent: false,
                }
            })                        
        }, 1000)
    }

    onShareCancel() {
        this.setState({
            modalVisible: {
                share: false,
                downloaded: false,
                email: false,
                emailSent: false,
            }
        })
    }

    renderActivityItem({item, index}){
        return (
            <View style={Styles.item}>
                <View style={Styles.itemTitle}>
                    <Image source={Images.check} style={Styles.checkIcon}/>
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
                <ShareModal 
                    visible={this.state.modalVisible.share} 
                    onDownload={this.onShareDownload.bind(this)}
                    onEmail={this.onShareEmail.bind(this)}
                    onCancel={this.onShareCancel.bind(this)}
                    />
                <DownloadedModal 
                    visible={this.state.modalVisible.downloaded} 
                    onCancel={this.onShareCancel.bind(this)}
                    />
            </View>
        );
    }
}