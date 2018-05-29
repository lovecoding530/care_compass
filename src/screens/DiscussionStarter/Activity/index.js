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
    ImageBackground,
} from 'react-native';
import {Colors, Images} from '@theme';
import Styles from './styles';

import {Button, Text, ProgressBar, Choices, ManyChoices, Loader } from '@components';
import DeviceInfo from 'react-native-device-info'

export default class Activity extends Component {
    constructor(props) {
        super(props);
        const {activityIndex, discussionStarter} = this.props.navigation.state.params

        const activities = discussionStarter.discussion_starter
        const activity = activities[activityIndex]
        const pageTotalCount = parseInt((activity.questions.length - 1) / 3) + 1

        this.state = ({
            discussionStarter: discussionStarter,
            activityCount: activities.length,
            activityIndex: activityIndex,
            activity: activity,
            pageIndex: 0,
            pageTotalCount: pageTotalCount,
            loaderVisible: false,
        })
    }

    componentDidMount() {
    }

    onChangedAnswer(questionIndex, answerData){
        var discussionStarter = this.state.discussionStarter
        var activity = discussionStarter.discussion_starter[this.state.activityIndex]
        var question = activity.questions[questionIndex]
        question.answerData = answerData

        this.setState({discussionStarter: discussionStarter})
    }

    goBack(){
        if(this.state.pageIndex > 0){
            this.setState({
                pageIndex: this.state.pageIndex - 1,
            })
        }else{
            const {goBack} = this.props.navigation
            goBack()
        }
    }

    onNext(){
        if(this.state.pageIndex < (this.state.pageTotalCount - 1)){
            this.setState({
                pageIndex: this.state.pageIndex + 1,
            })
        }else{
            this.onFinish()
        }
    }

    onFinish(){
        // const {navigate} = this.props.navigation
        // navigate("Complete", {discussionStarter: this.state.discussionStarter})    

        const {navigate} = this.props.navigation

        if(this.state.activityIndex + 1 >= this.state.activityCount){
            navigate("Complete", {discussionStarter: this.state.discussionStarter})
        }else{
            navigate({routeName: "UpNext", key: `UpNext${this.state.activityIndex}`, params: {activityIndex: this.state.activityIndex, discussionStarter: this.state.discussionStarter}})
        }
    }

    renderQuestions(){
        var startIndex = this.state.pageIndex * 3
        var endIndex = startIndex + 3
        var pageQuestions = this.state.activity.questions.slice(startIndex, endIndex)
        var questionList = pageQuestions.map((questionData, index) => {
            var questionIndex = startIndex + index
            const {question, question_type, question_choices, category, question_audio_url} = questionData;            
            if(question_type == "freetext") {
                return (
                    <View style={Styles.questionItem} key={index}>
                        <Text center style={Styles.questionTitle}>{questionIndex + 1}. {question}</Text>
                        <TextInput
                            style={Styles.textArea}
                            value={""}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => this.onChangedAnswer(questionIndex, text)}/>
                    </View>
                )
            }else if(question_type == "choices"){
                const answerList = question_choices.split("\r\n")
                return (
                    <View style={Styles.questionItem} key={index}>
                        <Text center style={Styles.questionTitle}>{questionIndex + 1}. {question}</Text>
                        <Choices 
                            scrollViewRef = {this.scrollView}
                            questionIndex={questionIndex}
                            data={answerList} 
                            selectedIndex={-1}
                            onChangedAnswer={this.onChangedAnswer.bind(this)}/>
                    </View>
                )                
            }else if(question_type == "manychoices"){
                const answerList = question_choices.split("\r\n")
                return (
                    <View style={Styles.questionItem} key={index}>
                        <Text center style={Styles.questionTitle}>{questionIndex + 1}. {question}</Text>
                        <ManyChoices 
                            scrollViewRef = {this.scrollView}
                            questionIndex={questionIndex}
                            data={answerList} 
                            selectedIndexes={[]}
                            onChangedAnswer={this.onChangedAnswer.bind(this)}/>
                    </View>
                )                
            }
        });
        return questionList
    }

    render() {
        return (
            <ImageBackground source={Images.bg_discussion_starter} style={Styles.container}>
                <Loader loading={this.state.loaderVisible}/>
                <View style={Styles.contentView}>
                    <View style={Styles.titleView}>
                        <View style={Styles.title}>
                            <Text mediumLarge bold center color={Colors.Red}>Activity {this.state.activityIndex + 1}: </Text>
                            <Text mediumLarge center color={Colors.Red}>{" "}{this.state.activity.stage}</Text>
                        </View>
                        <ProgressBar total={this.state.pageTotalCount} progress={this.state.pageIndex+1} style={Styles.pregressBar}/>
                    </View>
                    <ScrollView 
                        ref={ref => this.scrollView = ref} 
                        showsVerticalScrollIndicator={false}
                        style={Styles.scrollView}>
                        {this.renderQuestions()}
                    </ScrollView>
                </View>
                <View style={Styles.buttonBar}>
                    <View style={{flexDirection: 'row'}}>
                        <Button light onPress={this.goBack.bind(this)}>GO BACK</Button>
                        <Button light onPress={this.onFinish.bind(this)}>FINISH</Button>
                    </View>
                    <Button dark onPress={this.onNext.bind(this)}>NEXT PAGE</Button>
                </View>
            </ImageBackground>
        );
    }
}