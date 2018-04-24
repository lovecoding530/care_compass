import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View,
    Linking,
    ScrollView
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Footer from '@footer'
import Button from '@button'

var BASE_URL = 'https://pca.techequipt.com.au'

export default class ResourceDetail extends Component {
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        this.state = ({
            title: params.items.title,
            subtitle: params.items.information_text,
            link: params.items.link,
            image: BASE_URL + params.items.image.url,
            width: params.items.image.width,
            height: params.items.image.height
        })
    }

    render() {
        return (
            <View style={Styles.container}>
               <ScrollView> 
                    <Text style={Styles.title}>{this.state.title}</Text>
                    <View style={Styles.viewImage}>
                        <Image style={Styles.middleimage} source={{uri: this.state.image}}/>
                    </View>                
                    <Text style={Styles.subtitle}>
                        {this.state.subtitle}
                    </Text>
                    <View style={Styles.buttonContainer}>
                        <Button light >GO BACK</Button>
                      <Button dark onPress={ ()=> Linking.openURL(this.state.link) } >VIEW</Button>
                    </View>
                </ScrollView> 
                <Footer />
            </View>
        );
    }
}