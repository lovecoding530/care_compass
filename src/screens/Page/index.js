import React, { Component } from 'react';
import { 
	View, 
	ScrollView, 
	Image, 
	Dimensions, 
	Linking,
	Share,
} from 'react-native';
import Styles from './styles';
import Text from '@text';
import Button from '@button';
import { htmlStyles, Images, Colors } from '@theme';
import { getApiData } from '@api';
import HTML from 'react-native-render-html';
import { API_HTML_ROOT } from '@api';
import store from '../../Store';
import { gotoHome } from 'router';
import { Loader, Card } from "@components";
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from '@ResponsiveDimensions';
import {SharedModal} from '../modals';

let { width } = Dimensions.get('window');

export default class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageContent: {},
			pageName: '',
			modalVisible : false
		};
	}

	async componentDidMount() {
		const { pageName } = this.props.navigation.state.params;
		const content = await getApiData(pageName);
		this.setState({pageName, pageContent: content[0] || {} });
	}

    share = () => {
        Share.share({
            message : 'Dying To Talk',
            url : this.state.pageContent.read_more_url
        }).then(this.showResult);
	}
	
    showResult = (result) => {
        if(result.action == "sharedAction")
        {
            this.setState({modalVisible: true});
            console.log("Your content has been share successfully.");
        }
        else
        {
            console.log("You have cancelled sharing.");
        }
	}
	
	render() {
		return (
			<View style={Styles.container}>
				<ScrollView contentContainerStyle={Styles.scroll}>
					<Card topbar={{color: Colors.navy}} style={Styles.titleView}>
						<Text large center style={Styles.title}>
							{this.state.pageContent.title}
						</Text>
					</Card>

					<Card style={[ Styles.itemView ]}>
						<View style={{margin: deviceWidth(3)}}>
							{this.state.pageContent.featured_image_full ? width <= 375 ? (
								<View style={Styles.featuredImage}>
									<Image
										source={{ uri: API_HTML_ROOT + this.state.pageContent.featured_image_600.url }}
										style={{
											width: this.state.pageContent.featured_image_600.width,
											height: this.state.pageContent.featured_image_600.height
										}}
									/>
								</View>
							) : (
								<View style={Styles.featuredImage}>
									<Image
										source={{ uri: API_HTML_ROOT + this.state.pageContent.featured_image_1200.url }}
										style={{
											width: this.state.pageContent.featured_image_1200.width,
											height: this.state.pageContent.featured_image_1200.height
										}}
									/>
								</View>
							) : null}
							<HTML 
								html={this.state.pageContent.body} 
								tagsStyles={htmlStyles} 
								onLinkPress={(e, url) =>{
									if(url){
										Linking.openURL(url).catch((err) =>
											console.error('An error occurred', err) 
										)}
									}
								}
							/>
						</View>
						<View style={Styles.buttonBar}>
							<Button
								bold
								light
								onPress={() => {
									this.props.navigation.goBack(null);
								}}
							>
								Go back
							</Button>
							{console.log(this.state)}
							{this.state.pageContent.read_more_url && (
								this.state.pageName == 'looking_after_yourself' ? 
									<Button 
										dark  
										bold 
										onPress={this.share}
									>
										Share
									</Button>
								:
									<Button
										dark
										bold
										onPress={() =>
											Linking.openURL(this.state.pageContent.read_more_url).catch((err) =>
												console.error('An error occurred', err)
											)}
									>
										Find out more
									</Button>
							)}
						</View>
					</Card>
				</ScrollView>
				{this.state.pageName == 'looking_after_yourself' && 
					<Image
						source={Images.image_looking_after}
						style={{
							zIndex: -1,
							position: 'absolute',
							bottom: -40,
							right: 0,
							width: deviceWidth(50),
							height: deviceWidth(50 * 401 / 388),
							resizeMode: 'contain'
						}}
					/>			
				}
				<SharedModal
                    visible={this.state.modalVisible}
                    onCancel={()=>this.setState({
						modalVisible: false
					})}
                />
			</View>
		);
	}
}
