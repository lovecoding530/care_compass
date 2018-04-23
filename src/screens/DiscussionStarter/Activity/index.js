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
import Choices from "@choices";
import ManyChoices from "@manychoices";

import { getDiscussionStarter } from "@api";

export default class ActivityList extends Component {
    constructor(props) {
        super(props);
        const {activityIndex} = this.props.navigation.state.params
        this.state = ({
            activityIndex: activityIndex,
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

        this.setState({
            activity: activities[this.state.activityIndex]
        })
    }

    onChangedAnswer(questionIndex, answerIndex){
        // alert("onChangedAnswer" + answerIndex)
    }

    renderQuestions(){
        var questionList = this.state.activity.questions.map((questionData, index) => {
            const {question, question_type, question_choices, category, question_audio_url} = questionData;            
            if(question_type == "freetext") {
                return (
                    <View style={Styles.questionItem} key={index}>
                        <Text center style={Styles.questionTitle}>{question}</Text>
                        <TextInput
                            style={Styles.textArea}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => this.setState({text})}
                            value={"Text Area"}/>
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
                <Text mediumLarge bold center style={Styles.title}>Activity {this.state.activityIndex + 1}: Reflecting</Text>
                <ScrollView ref={ref => this.scrollView = ref}>
                    {this.renderQuestions()}
                </ScrollView>
            </View>
        );
    }
}