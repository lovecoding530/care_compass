import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View,
    Linking,
    ScrollView,
    ImageBackground
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Footer from '@footer'
import Button from '@button'
import {Colors, Images, FontSizes} from '@theme';
import { getResources } from "@api";
var BASE_URL = 'https://pca.techequipt.com.au'

export default class ResourceDetail extends Component {
    constructor(props) {
        super(props);
        const {resourceIndex} = this.props.navigation.state.params
        this.state = ({
            resourceIndex: resourceIndex,
            title: '',
            subtitle: '',
            link: '',
            image: '',
        })
    }

    async componentDidMount() {
        const ds = await getResources(true)
        const resources = ds.resources
        const resource = resources[this.state.resourceIndex]
        
        this.setState({
            title: resource.title,
            subtitle: resource.information_text,
            link: resource.link,
            image: BASE_URL + resource.image.url,
        }) 
    }

    render() {   
        return (
           

            <ImageBackground source={Images.bg_more_information} resizeMode="stretch" style={Styles.container} >

                <ScrollView contentContainerStyle={Styles.scroll}>

                    <View style={Styles.titleView}>
                             <Text large style={Styles.title}>{this.state.title}</Text>
                    </View>

                    <View style={[Styles.itemView]}>
                        <Image style={[Styles.middleimage]} resizeMode="contain" source={{uri: this.state.image}}/>
                        <Text smallMedium  style={Styles.subtitle}>{this.state.subtitle}</Text>
                    </View>

                </ScrollView> 
                <View style={Styles.buttonBar}>
                    <Button light bold onPress={ ()=> this.props.navigation.goBack() } >Go back</Button>
                    { this.state.link == '' ? null : <Button dark  bold onPress={ ()=> Linking.openURL(this.state.link).catch(err => console.error('An error occurred', err)) }>Find out more</Button> }
                </View>
            </ImageBackground>
        );
    }
}