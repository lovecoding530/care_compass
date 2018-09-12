import React, { Component } from 'react';
import { View, ScrollView, ImageBackground, Image, Dimensions } from 'react-native';
import Styles from './styles';
import Text from '@text';
import Button from '@button';
import { htmlStyles, Images } from '@theme';
import { getApiData } from '@api';
import HTML from 'react-native-render-html';
import { API_HTML_ROOT } from '@api';

let { width } = Dimensions.get('window');

export default class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageContent: ''
		};
	}

	async componentDidMount() {
		const { pageName } = this.props.navigation.state.params;
		const content = await getApiData(pageName);
		this.setState({ pageContent: content[0] });
	}

	render() {
		return (
			<ImageBackground source={Images.bg_navigation} resizeMode="stretch" style={Styles.container}>
				<ScrollView contentContainerStyle={Styles.scroll}>
					<View style={Styles.titleView}>
						<Text large style={Styles.title}>
							{this.state.pageContent.title}
						</Text>
					</View>

					<View style={[ Styles.itemView ]}>
						<View style={Styles.featuredImage}>
							{console.log(API_HTML_ROOT)}
							{/* {console.log(this.state.pageContent.featured_image_600.url)} */}
							{this.state.pageContent.featured_image_full ? width <= 375 ? (
								<Image
									source={{ uri: API_HTML_ROOT + this.state.pageContent.featured_image_600.url }}
									style={{
										width: this.state.pageContent.featured_image_600.width,
										height: this.state.pageContent.featured_image_600.height
									}}
								/>
							) : (
								<Image
									source={{ uri: API_HTML_ROOT + this.state.pageContent.featured_image_1200.url }}
									style={{
										width: this.state.pageContent.featured_image_1200.width,
										height: this.state.pageContent.featured_image_1200.height
									}}
								/>
							) : null}
						</View>
						<HTML html={this.state.pageContent.body} tagsStyles={htmlStyles} />
					</View>
				</ScrollView>
				<View style={Styles.buttonBar}>
					<Button bold light onPress={() => this.props.navigation.navigate('Home')}>
						Go back
					</Button>
				</View>
			</ImageBackground>
		);
	}
}
