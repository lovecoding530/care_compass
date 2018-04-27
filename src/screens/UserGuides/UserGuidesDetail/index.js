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

import { getUserGuidesDetail } from "@api";
import HTMLView from 'react-native-htmlview';

export default class UserGuidesDetail extends Component {
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        this.state = ({
            slug : params.slug,
            itemSlug : params.itemSlug,
            title : '',
            body : '',
            faqs : [],
            
        })
    }

    async componentDidMount() {
        const ds = await getUserGuidesDetail(this.state.slug,this.state.itemSlug,false)
        const userguidesDetail = ds[0].guides
        this.setState({
           title : userguidesDetail[0].title,
           body : userguidesDetail[0].body,
           faqs : userguidesDetail[0].faqs
        })
    }

    render() {   
        return (
            <View style={Styles.container}>
            <View style={Styles.scrollcontainer}> 
               <ScrollView contentContainerStyle={Styles.scroll}> 
                    <Text bold style={Styles.title}>user guides</Text>
                                 
                    <Text style={Styles.subtitle}>
                        {this.state.title}
                    </Text>
                    <HTMLView
                        value={this.state.body}
                    />
                    {this.state.faqs.map((item, i) =>
                        <View>
                            <Text style={Styles.subtitle}>
                                Question : {item.question}
                            </Text>
                            <Text style={Styles.subtitle}>
                                Answer : {item.answer}
                            </Text>
                        </View>
                    )}
                    <View style={Styles.buttonContainer}>
                        <Button light onPress={ ()=> this.props.navigation.goBack() }>GO BACK</Button>
                        <Button dark  >SHARE</Button>
                    </View>
                </ScrollView> 
                </View>
                <Footer />
            </View>
        );
    }
}