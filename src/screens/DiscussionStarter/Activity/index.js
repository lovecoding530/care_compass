import React, { Component } from 'react';
import { TouchableOpacity, View, ScrollView, TextInput, ImageBackground, Image } from 'react-native';
import { Colors, Images, htmlStyles, FontSizes } from '@theme';
import Styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import { Button, Text, ProgressBar, Choices, ManyChoices, Loader } from '@components';

import { playSounds } from '@utils';
import { Card } from '@components';
import { deviceWidth, deviceHeight } from '@ResponsiveDimensions';
import HTML from 'react-native-render-html';
import {Switch} from 'react-native-switch';

export default class Activity extends Component {
	constructor(props) {
		super(props);
		const { activityIndex, discussionStarter, editFromResults } = this.props.navigation.state.params;
		console.log(this.props.navigation.state.params);
		const activities = discussionStarter.discussion_starter;
		const activity = activities[activityIndex];
		activity.isStarted = true;
		const questionTotalCount = activity.questions.length;

		this.state = {
			editFromResults,
			discussionStarter: discussionStarter,
			activityCount: activities.length,
			activityIndex: activityIndex,
			activity: activity,
			questionIndex: 0,
			questionTotalCount,
			loaderVisible: false
		};
	}

	componentDidMount() {}

	onChangedAnswer(questionIndex, answerData, other) {
		var discussionStarter = this.state.discussionStarter;
		var activity = discussionStarter.discussion_starter[this.state.activityIndex];
		var question = activity.questions[questionIndex];
		other == 'other' ? (question.otherData = answerData) : (question.answerData = answerData);

		this.setState({ discussionStarter: discussionStarter });
	}

	onAnswerLater(questionIndex) {
		var discussionStarter = this.state.discussionStarter;
		var activity = discussionStarter.discussion_starter[this.state.activityIndex];
		var question = activity.questions[questionIndex];
		question.answerLater = !question.answerLater;
		if (question.neverAnswer) question.neverAnswer = false;

		this.setState({ discussionStarter: discussionStarter });
	}

	onNeverAnswer(questionIndex) {
		var discussionStarter = this.state.discussionStarter;
		var activity = discussionStarter.discussion_starter[this.state.activityIndex];
		var question = activity.questions[questionIndex];
		question.neverAnswer = !question.neverAnswer;
		if (question.answerLater) question.answerLater = false;

		this.setState({ discussionStarter: discussionStarter });
	}

	goBack() {
		if (this.state.questionIndex > 0) {
			this.setState({
				questionIndex: this.state.questionIndex - 1
			});
		} else {
			const { goBack } = this.props.navigation;
			goBack();
		}
	}

	onNext() {
		if (this.state.questionIndex < this.state.questionTotalCount - 1) {
			this.setState({ questionIndex: this.state.questionIndex + 1 });
			setTimeout(() => {
				this.scrollView.scrollTo(0);
			});
		} else {
			this.onFinish();
		}
	}

	onFinish() {
		setTimeout(() => {
			this.setState({ questionIndex: 0 });
			this.scrollView.scrollTo({ y: 0 });
		}, 500);

		const { navigate, goBack } = this.props.navigation;

		if (this.state.editFromResults) {
			goBack();
		} else {
			if (this.state.activityIndex + 1 >= this.state.activityCount) {
				navigate('Complete', { discussionStarter: this.state.discussionStarter });
			} else {
				navigate({
					routeName: 'UpNext',
					key: `UpNext${this.state.activityIndex}`,
					params: { activityIndex: this.state.activityIndex, discussionStarter: this.state.discussionStarter }
				});
			}
		}
	}

	playAudios(questionAudioURL, choiceAudioURLs) {
		let audioURLs = [ questionAudioURL, ...choiceAudioURLs ];
		playSounds(audioURLs);
	}

	renderQuestion() {
		let questionData = this.state.activity.questions[this.state.questionIndex];
		let questionIndex = this.state.questionIndex;
		const {
			question,
			question_type,
			question_choices,
			category,
			question_audio_url,
			question_choices_audio_urls,
			answerLater,
			neverAnswer,
			answerData,
			otherData
		} = questionData;
		const answerList = question_choices.split('\r\n');

		return (
			<Card 
				style={Styles.questionItem}
				contentStyle={Styles.questionItemContent}
			>
				<View style={Styles.questionTitle}>
					<HTML html={question} containerStyle={Styles.questionContainer} tagsStyles={htmlStyles} />
				</View>
				<View style={Styles.itemBody}>
					{question_type == 'freetext' ? (
						<TextInput
							key={questionIndex.toString()}
							style={Styles.textArea}
							value={answerData ? answerData : ''}
							multiline={true}
							numberOfLines={4}
							onChangeText={(text) => this.onChangedAnswer(questionIndex, text)}
						/>
					) : question_type == 'choices' ? (
						<Choices
							key={questionIndex.toString()}
							scrollViewRef={this.scrollView}
							questionIndex={questionIndex}
							data={answerList}
							selectedIndex={answerData || answerData == 0 ? answerData : -1}
							onChangedAnswer={this.onChangedAnswer.bind(this)}
						/>
					) : question_type == 'manychoices' ? (
						<ManyChoices
							key={questionIndex.toString()}
							scrollViewRef={this.scrollView}
							questionIndex={questionIndex}
							data={answerList}
							selectedIndexes={answerData || answerData == 0 ? answerData : []}
							onChangedAnswer={this.onChangedAnswer.bind(this)}
						/>
					) : question_type == 'choices_plus_other' ? (
						<View>
							<Choices
								key={questionIndex.toString() + 'a'}
								scrollViewRef={this.scrollView}
								questionIndex={questionIndex}
								data={answerList}
								selectedIndex={answerData || answerData == 0 ? answerData : -1}
								onChangedAnswer={this.onChangedAnswer.bind(this)}
							/>
							<View style={{ marginTop: 10 }}>
								<Text smallMedium color={Colors.textPrimary} style={{ marginBottom: 4 }}>
									More information:
								</Text>
								<TextInput
									key={questionIndex.toString() + 'b'}
									style={Styles.textArea}
									value={otherData ? otherData : ''}
									multiline={true}
									numberOfLines={4}
									onChangeText={(text) => this.onChangedAnswer(questionIndex, text, 'other')}
								/>
							</View>
						</View>
					) : question_type == 'manychoices_plus_other' ? (
						<View>
							<ManyChoices
								key={questionIndex.toString()}
								scrollViewRef={this.scrollView}
								questionIndex={questionIndex}
								data={answerList}
								selectedIndexes={answerData || answerData == 0 ? answerData : []}
								onChangedAnswer={this.onChangedAnswer.bind(this)}
							/>
							<View style={{ marginTop: 10 }}>
								<Text smallMedium color={Colors.textPrimary} style={{ marginBottom: 4 }}>
									More information:
								</Text>
								<TextInput
									key={questionIndex.toString() + 'b'}
									style={Styles.textArea}
									value={otherData ? otherData : ''}
									multiline={true}
									numberOfLines={4}
									onChangeText={(text) => this.onChangedAnswer(questionIndex, text, 'other')}
								/>
							</View>
						</View>
					) : (
						<View />
					)}
				</View>
				<View style={Styles.itemBottom}>
					<View style={Styles.answerButtonWrapper}>
						<TouchableOpacity
							style={answerLater ? Styles.answerButtonOn : Styles.answerButton}
							onPress={() => this.onAnswerLater(questionIndex)}
						>
							<Icon
								name={answerLater ? 'md-checkbox-outline' : 'md-square-outline'}
								size={24}
								color={Colors.navy}
								style={{ marginRight: deviceWidth(1), marginTop: 4 }}
							/>
							<Text bold color={Colors.navy}>
								I want to think about this
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={neverAnswer ? Styles.answerButtonOn : Styles.answerButton}
							onPress={() => this.onNeverAnswer(questionIndex)}
						>
							<Icon
								name={neverAnswer ? 'md-checkbox-outline' : 'md-square-outline'}
								size={24}
								color={Colors.navy}
								style={{ marginRight: deviceWidth(1), marginTop: 4 }}
							/>
							<Text bold color={Colors.navy}>
								I don’t want to talk about this
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{justifyContent: 'center', alignItems: 'center'}}>
						<Icon.Button
							name="md-volume-up"
							size={FontSizes.medium}
							style={{ height: deviceHeight(4.5), paddingHorizontal: 10 }}
							backgroundColor={Colors.navy}
							onPress={() => {
								this.playAudios(question_audio_url, question_choices_audio_urls)
							}}
						>
							<Text light bold>
								Play question
							</Text>
						</Icon.Button>
					</View>
				</View>
			</Card>
		);
	}

	render() {
		return (
			<View style={Styles.container}>
				<Loader loading={this.state.loaderVisible} />
				<Switch
					value={true}
					activeText="YES"
					inActiveText="NO"
				/>
				<ScrollView
					ref={(ref) => (this.scrollView = ref)}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={Styles.scrollView}
				>
					<Card topbar style={Styles.titleView}>
						<View style={Styles.title}>
							<Text mediumLarge center color={Colors.Red} style={{ fontWeight: '300' }}>
								Activity {this.state.activityIndex + 1}: {this.state.activity.stage}
							</Text>
						</View>
						<ProgressBar
							total={this.state.questionTotalCount}
							progress={this.state.questionIndex + 1}
							style={Styles.pregressBar}
						/>
					</Card>
					{this.renderQuestion()}
				</ScrollView>
				<Card style={Styles.buttonBar} contentStyle={Styles.buttonBarContent}>
					<View style={{ flexDirection: 'row' }}>
						<Button light bold onPress={this.goBack.bind(this)}>
							Go back
						</Button>
						<Button light bold onPress={this.onFinish.bind(this)}>
							Finish here
						</Button>
					</View>
					<Button dark bold onPress={this.onNext.bind(this)}>
						{this.state.editFromResults && this.state.questionIndex == this.state.questionTotalCount - 1 ? (
							'Done editing'
						) : (
							'Continue'
						)}
					</Button>
				</Card>
			</View>
		);
	}
}
