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
    Share,
} from 'react-native';
import {Colors, Images} from '@theme';
import Styles from './styles';
import {Button, Text, Loader } from '@components';
import { ShareModal, EmailModal, EmailSentModal, DownloadedModal} from '../../modals';

import {postDiscussionAnswers} from "@api";
import {getSharingHTMLFromResult} from "./HtmlResult";
import RNHTMLtoPDF from 'react-native-html-to-pdf';

export default class Complete extends Component {
    constructor(props) {
        super(props);
        const {discussionStarter} = this.props.navigation.state.params
        const activities = discussionStarter.discussion_starter
        console.log(discussionStarter)
        this.state = ({
            discussionStarter: discussionStarter,
            activities: activities,
            activityCount: activities.length,
            loaderVisible: false,
            modalVisible: {
                share: false,
                downloaded: false,
                email: false,
                emailSent: false,
            },
        })
    }

    openModal(modal){
        this.closeModal()
        setTimeout(() => {
            this.setState({
                modalVisible: {
                    share: false,
                    downloaded: false,
                    email: false,
                    emailSent: false,
                    ...modal,
                }
            })                
        }, 500);
    }

    closeModal(){
        this.setState({
            modalVisible: {
                share: false,
                downloaded: false,
                email: false,
                emailSent: false,
            }
        })
    }

    async onExit(){
        this.setState({loaderVisible: true})
        await postDiscussionAnswers(this.state.discussionStarter)
        this.setState({loaderVisible: false})

        setTimeout(()=>{
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
        }, 500)
    }

    async onShare(){
        this.setState({loaderVisible: true})
        await postDiscussionAnswers(this.state.discussionStarter)
        this.setState({loaderVisible: false})
        this.openModal({share: true})
    }

    onShareEmail() {
        this.openModal({email: true})
    }

    async onShareDownload() {
        this.closeModal()

        var html = getSharingHTMLFromResult(this.state.discussionStarter)
        console.log(html)

        let options = {
            html: html,
            fileName: 'test',
            directory: 'docs',
        };
    
        let file = await RNHTMLtoPDF.convert(options)
        console.log(file.filePath)
        setTimeout(() => {
            Share.share({
                title: "Share this!",
                message: "I just wanted to show you this:",
                url: file.filePath,
                subject: "I am only visible for emails :(",
            })
        }, 500);
    }

    onSendEmail(name, email){
        this.openModal({emailSent: true})
    }

    onShareCancel() {
        this.closeModal()
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
                <Loader loading={this.state.loaderVisible}/>
                <Text mediumLarge bold center>Complete... </Text>
                <FlatList
                    data = {this.state.activities}
                    renderItem = {this.renderActivityItem.bind(this)}
                    keyExtractor = {(item, index) => index.toString()}
                    style={Styles.flatList}
                    />
                <View style={Styles.buttonBar}>
                    <Button light onPress={this.onExit.bind(this)}>EXIT</Button>
                    <Button dark onPress={this.onShare.bind(this)}>SHARE RESULTS</Button>
                </View>
                <Text medium center>Need more information? Try our resources</Text>
                <ShareModal 
                    visible={this.state.modalVisible.share} 
                    onDownload={this.onShareDownload.bind(this)}
                    onEmail={this.onShareEmail.bind(this)}
                    onCancel={this.onShareCancel.bind(this)}
                    />
                <EmailModal 
                    visible={this.state.modalVisible.email} 
                    onSend={this.onSendEmail.bind(this)}
                    onCancel={this.onShareCancel.bind(this)}
                    />
                <EmailSentModal 
                    visible={this.state.modalVisible.emailSent} 
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