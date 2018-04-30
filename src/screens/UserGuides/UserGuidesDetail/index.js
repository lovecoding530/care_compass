import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View,
    Linking,
    ScrollView,
    Share,
    FlatList
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Footer from '@footer'
import Button from '@button'
import { Loader } from '@components';

import { getUserGuides } from "@api";
import HTMLView from 'react-native-htmlview';
var BASE_URL = 'https://pca.techequipt.com.au'

export default class UserGuidesDetail extends Component {
    constructor(props) {
        super(props);
        const {userguideIndex} = this.props.navigation.state.params
        this._share=this._share.bind(this);
        this._showResult=this._showResult.bind(this);
        this.state = ({
            userguideIndex: userguideIndex,
            title : '',
            image : '',
            body : '',
            faqs : [],
            result : '',
            loaderVisible: true
        })
    }

    async componentDidMount() {
        const ds = await getUserGuides(true)
        const userguides = ds[0].guides
        const userguide = userguides[this.state.userguideIndex]

        if(userguide.featured_image == null)
        {
            this.setState({
                title : userguide.title,
                body : userguide.body,
                faqs : userguide.faqs,
            })
        }
        else
        {
           this.setState({
               title : userguide.title,
               body : userguide.body,
               faqs : userguide.faqs,
                image: BASE_URL + userguide.featured_image.url,
            }) 
        }

        setTimeout(()=>{
            this.setState({loaderVisible: false})
        }, 2000)
        
    }
    _showResult(result){
        this.setState({result : result});
    }

    _share(){
        Share.share({
            message : 'Dying To Talk',
            url : 'http://www.godeckyourself.com'
        }).then(this._showResult.bind(this));
    }

    renderFAQItem({item, index}){
        return (
            <View style={Styles.item}>
                <View style={Styles.itemTitle}>
                    <Text bold style={Styles.txtQuestion}>{index + 1}: </Text>
                    <Text style={Styles.txtQuestion}>
                        {" "}{item.question}
                    </Text>
                </View>
                <Text style={Styles.txtAnswer}>{item.answer} </Text>
            </View>
        )
    }

    render() {   
        return (
            <View style={Styles.container}>
            <View style={Styles.scrollcontainer}> 
               <ScrollView contentContainerStyle={Styles.scroll}> 
                    <Loader loading={this.state.loaderVisible}/>
                    <Text bold style={Styles.title}>user guides</Text>

                    <Text style={Styles.subtitle}>
                        {this.state.title}
                    </Text>

                    <View style={Styles.viewBody}>
                        <HTMLView
                            value={this.state.body}
                        />
                    </View>

                     {this.state.image == '' ? null 
                        
                        : <View style={Styles.viewImage}>
                            <Image style={Styles.middleimage} source={{uri: this.state.image}}/>
                          </View>  
                     }
                    
                    {this.state.faqs.length == 0 ? null 
                        : <View>
                            <View style={Styles.faqTitle}>
                                <Text bold >FAQ</Text>
                            </View>

                            <FlatList
                            data = {this.state.faqs}
                            renderItem = {this.renderFAQItem.bind(this)}
                            keyExtractor = {(item, index) => index.toString()}
                            style={Styles.flatList}
                            />
                        </View>
                    }

                    <View style={Styles.buttonContainer}>
                        <Button light onPress={ ()=> this.props.navigation.goBack() }>GO BACK</Button>
                        <Button dark  onPress={this._share}>SHARE</Button>
                    </View>
                </ScrollView> 
                </View>
                <Footer />
            </View>
        );
    }
}
