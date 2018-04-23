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

import { getDiscussionStarter } from "@api";

export default class ActivityList extends Component {
    constructor(props) {
        super(props);
        const {activityIndex} = this.props.navigation.state.params
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
        })
    }

    async componentDidMount() {

        const ds = await getDiscussionStarter(true)
        const activities = ds[0].discussion_starter
        const activity = activities[this.state.activityIndex]
        const pageTotalCount = parseInt((activity.questions.length - 1) / 3) + 1
        this.setState({
            pageTotalCount: pageTotalCount,
            activity: activity,
        })
    }

    onChangedAnswer(questionIndex, answerIndex){
        // alert("onChangedAnswer" + answerIndex)
    }

    onNext(){
        if(this.state.pageIndex < (this.state.pageTotalCount - 1)){
            this.setState({
                pageIndex: this.state.pageIndex + 1,
            })            
        }else{
            const {navigate} = this.props.navigation
            navigate("UpNext", {activityIndex: this.state.activityIndex})
        }
    }

    renderQuestions(){
        var startIndex = this.state.pageIndex * 3
        var endIndex = startIndex + 3
        var pageQuestions = this.state.activity.questions.slice(startIndex, endIndex)
        var questionList = pageQuestions.map((questionData, index) => {
            const {question, question_type, question_choices, category, question_audio_url} = questionData;            
            if(question_type == "freetext") {
                return (
                    <View style={Styles.questionItem} key={index}>
                        <Text center style={Styles.questionTitle}>{question}</Text>
                        <TextInput
                            style={Styles.textArea}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => this.setState({text})}/>
                    </View>
                )
            }else if(question_type == "choices"){
                const answerList = question_choices.split("\r\n")
                return (
                    <View style={Styles.questionItem} key={index}>
                        <Text center style={Styles.questionTitle}>{question}</Text>
                        <Choices 
                            scrollViewRef = {this.scrollView}
                            questionIndex={index}
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
                            questionIndex={index}
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