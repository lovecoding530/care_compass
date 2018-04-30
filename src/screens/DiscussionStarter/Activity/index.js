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
import {Colors} from '@theme';
import Styles from './styles';
import Button from '@button'
import Text from '@text'
import ProgressBar from '@progressbar'
import Choices from "@choices";
import ManyChoices from "@manychoices";

import { getDiscussionStarter, postDiscussionAnswers} from "@api";
import { Loader } from '@components';
import DeviceInfo from 'react-native-device-info'

export default class Activity extends Component {
    constructor(props) {
        super(props);
        const {activityIndex} = this.props.navigation.state.params
        this.answers = {}
        this.state = ({
            activityIndex: activityIndex,
            pageIndex: 0,
            pageTotalCount: 1,
            activity: {
                stage: "Discussion Starter",
                pre_commencement_text: "Pre commencement text",
                icon: "",
                questions: []
            },
            loaderVisible: false,
        })
    }

    async componentDidMount() {

        const ds = await getDiscussionStarter(true)
        this.starterSlug = ds[0].slug
        const activities = ds[0].discussion_starter
        const activity = activities[this.state.activityIndex]
        const pageTotalCount = parseInt((activity.questions.length - 1) / 3) + 1
        this.setState({
            pageTotalCount: pageTotalCount,
            activity: activity,
            activityCount: activities.length,
        })
    }

    async sendAnswers(){
        var ansswerResponse = {}
        const uniqueId = DeviceInfo.getUniqueID();
        ansswerResponse.uuid = uniqueId
        ansswerResponse.starter = this.starterSlug
        ansswerResponse.responses = Object.values(this.answers)
        console.log(ansswerResponse)

        this.setState({loaderVisible: true})
        await postDiscussionAnswers(ansswerResponse)
        this.setState({loaderVisible: false})
    }

    onChangedAnswer(questionIndex, answerData){
        let questionData = this.state.activity.questions[questionIndex]
        const {question, question_type, question_choices} = questionData;            
        const answerList = question_choices.split("\r\n")

        var answer = {}
        if(question_type == "freetext") {
            answer.question = question
            answer.question_id = ""
            answer.response = answerData            
        }else if(question_type == "choices"){
            answer.question = question
            answer.question_id = ""
            answer.response = answerList[answerData]            
        }else if(question_type == "manychoices"){
            var selectedChoices = answerData.map(i => answerList[i])
            answer.question = question
            answer.question_id = ""
            answer.response = selectedChoices           
        }

        this.answers[questionIndex] = answer
        console.log(this.answers)
    }

    async onNext(){
        if(this.state.pageIndex < (this.state.pageTotalCount - 1)){
            this.setState({
                pageIndex: this.state.pageIndex + 1,
            })            
        }else{
            await this.sendAnswers()

            const {navigate} = this.props.navigation
            if(this.state.activityIndex + 1 >= this.state.activityCount){
                navigate({routeName: "Complete", key: "Complete", params: {activityIndex: this.state.activityIndex}})
            }else{
                navigate("UpNext", {activityIndex: this.state.activityIndex})
            }
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
                        <Text center style={Styles.questionTitle}>{question}</Text>
                        <TextInput
                            style={Styles.textArea}
                            value={"bbb"}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => this.onChangedAnswer(questionIndex, text)}/>
                    </View>
                )
            }else if(question_type == "choices"){
                const answerList = question_choices.split("\r\n")
                return (
                    <View style={Styles.questionItem} key={index}>
                        <Text center style={Styles.questionTitle}>{question}</Text>
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
                        <Text center style={Styles.questionTitle}>{question}</Text>
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
            <View style={Styles.container}>
                <Loader loading={this.state.loaderVisible}/>
                <View style={Styles.title}>
                    <Text mediumLarge bold center>Activity {this.state.activityIndex + 1}: </Text>
                    <Text mediumLarge center>{" "}{this.state.activity.stage}</Text>
                </View>
                <ProgressBar total={this.state.pageTotalCount} progress={this.state.pageIndex+1} style={Styles.pregressBar}/>
                <ScrollView ref={ref => this.scrollView = ref}>
                    {this.renderQuestions()}
                </ScrollView>
                <View style={Styles.buttonBar}>
                    <Button light>FINISH</Button>
                    <Button dark onPress={this.onNext.bind(this)}>N E X T</Button>
                </View>
            </View>
        );
    }
}