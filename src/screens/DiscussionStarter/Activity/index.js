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
        this.forceUpdate()
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
                <View style={Styles.title}>
                    <Text mediumLarge bold center>Activity {this.state.activityIndex + 1}: </Text>
                    <Text mediumLarge center>{" "}Reflecting</Text>
                </View>
                <ProgressBar total={3} progress={1} style={Styles.pregressBar}/>
                <ScrollView ref={ref => this.scrollView = ref}>
                    {this.renderQuestions()}
                </ScrollView>
                <View style={Styles.buttonBar}>
                    <Button light>FINISH</Button>
                    <Button dark>N E X T</Button>
                </View>
            </View>
        );
    }
}