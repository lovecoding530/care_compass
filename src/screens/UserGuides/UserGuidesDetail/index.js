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

import { getUserGuidesDetail } from "@api";
import HTMLView from 'react-native-htmlview';
var BASE_URL = 'https://pca.techequipt.com.au'

export default class UserGuidesDetail extends Component {
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        this._share=this._share.bind(this);
        this._showResult=this._showResult.bind(this);
        this.state = ({
            slug : params.slug,
            itemSlug : params.itemSlug,
            title : '',
            image : '',
            body : '',
            faqs : [],
            result : ''
        })
    }

    async componentDidMount() {
        const ds = await getUserGuidesDetail(this.state.slug,this.state.itemSlug,false)
        const userguidesDetail = ds[0].guides

        if(userguidesDetail[0].featured_image == null)
        {
            this.setState({
                title : userguidesDetail[0].title,
                body : userguidesDetail[0].body,
                faqs : userguidesDetail[0].faqs,
            })
        }
        else
        {
           this.setState({
               title : userguidesDetail[0].title,
               body : userguidesDetail[0].body,
               faqs : userguidesDetail[0].faqs,
                image: BASE_URL + userguidesDetail[0].featured_image.url,
            }) 
        }
        
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
