import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    View,
    Modal,
    Alert,
    Share,
    ScrollView,
} from 'react-native';
import {Colors, Images, FontSizes} from '@theme';
import Styles from './styles';
import {Button, Text, Loader } from '@components';
import { ShareModal, EmailModal, EmailSentModal, DownloadedModal} from '../../modals';

import {postDiscussionAnswers} from "@api";
import {getSharingHTMLFromResult} from "./HtmlResult";
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';
import Mailer from 'react-native-mail';

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
                'Any information you have entered will be deleted.',
                [
                    {text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'YES', onPress: () => {
                        const resetAction = NavigationActions.reset({
                            index: 1,
                            key: null,
                            actions: [
                                NavigationActions.navigate({ routeName: 'OnBoardingScreen' }),
                                NavigationActions.navigate({ routeName: 'DrawerStack' })
                            ],
                        });
                        this.props.navigation.dispatch(resetAction);
                        // goBack("DiscussionStarter")
                    }},
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

    async onShareEmail() {

        var html = getSharingHTMLFromResult(this.state.discussionStarter)

        let options = {
            html: html,
            fileName: 'results',
            directory: 'docs',
        };
    
        let file = await RNHTMLtoPDF.convert(options)
        Mailer.mail({
            subject: 'Discussion Starter Results',
            recipients: [],
            body: '<b>Resuls as pdf attach</b>',
            isHTML: true,
            attachment: {
              path: file.filePath,  // The absolute path of the file from which to read data.
              type: 'pdf',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
              name: 'results.pdf',   // Optional: Custom filename for attachment
            }
        }, (error, event) => {

        });
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

    onEdit(activityIndex) {
        const {navigate, goBack} = this.props.navigation
        if(activityIndex < this.state.activityCount - 1){
            goBack(`UpNext${activityIndex}`)
        }else{
            goBack()
        }
    }

    renderActivityItem({item, index}){
        return (
            <View style={Styles.currentWrapper}>
                <View style={Styles.current}>
                    <View style={Styles.currentHeader}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={Images.check} style={Styles.checkIcon}/>
                            <Text medium bold color={'#fff'} style={Styles.complete_text}>
                                Complete
                            </Text>
                        </View>
                        <Button light color={'#fff'} onPress={()=>this.onEdit(index)}>EDIT</Button>
                    </View>
                    <View style={Styles.currentDescView}>
                        <Text medium color={Colors.Navy} style={Styles.currentTitle}>Activity {index + 1}: {item.stage}</Text>
                        <Text style={Styles.currentPrecomment}>
                            {item.pre_commencement_text} 
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    render() { 
        return (
            <ImageBackground source={Images.bg_discussion_starter}  style={Styles.container}>
                <Loader loading={this.state.loaderVisible}/>
                <ScrollView contentContainerStyle={Styles.contentView}>
                    <View style={Styles.titleView}>
                        <Text mediumLarge center color={Colors.Red}>Your Results</Text>
                    </View>
                    <FlatList
                        data = {this.state.activities}
                        renderItem = {this.renderActivityItem.bind(this)}
                        keyExtractor = {(item, index) => index.toString()}
                        contentContainerStyle={Styles.flatList}
                        />
                    <View style={Styles.saveView}>
                        <Text medium bold center style={{marginVertical: 8}}>Save your results</Text>
                        <Text bold center style={{marginVertical: 8}}>Personal information will not be stored or used by Palliative Care Australia in any way. Read more here</Text>
                        <View style={{flexDirection: 'row', paddingHorizontal: 8,}}>
                            <Button dark buttonStyles={{flex: 1}} onPress={this.onShareDownload.bind(this)}>DOWNLOAD</Button>
                            <Button dark buttonStyles={{flex: 1}} onPress={this.onShareEmail.bind(this)}>EMAIL</Button>
                            <Button dark buttonStyles={{flex: 1}} onPress={this.onShare.bind(this)}>PRINT</Button>
                        </View>
                    </View>
                </ScrollView>
                <View style={Styles.buttonBar}>
                    <Button light onPress={this.onExit.bind(this)}>EXIT</Button>
                </View>
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
            </ImageBackground>
        );
    }
}