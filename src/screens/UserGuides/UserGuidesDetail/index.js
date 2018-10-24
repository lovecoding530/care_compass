import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View,
    Linking,
    ScrollView,
    Share,
    FlatList,
    Dimensions,
    WebView,
    ImageBackground
} from 'react-native';

import Styles from './styles';
import Footer from '@footer'
import {Colors, Images, FontSizes, htmlStyles} from '@theme';
import {Button, Card, Text} from '@components'
import { getUserGuides, API_HTML_ROOT } from "@api";
import HTMLView from 'react-native-htmlview';
const { width,height } = Dimensions.get('window');
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import {SharedModal} from '../../modals';
import HTML from 'react-native-render-html';

function renderNode(node, index, siblings, parent, defaultRenderer) {

    if(Platform.OS === 'ios')
    {
        if (node.name == 'iframe') {
            var atribute = node.attribs;
            var iframeHtml = `<iframe width=\"${atribute.width}\" height=\"${atribute.height}\" src=\"${atribute.src}" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>`;
            return (
              <View key={index} style={{width: width/3.5, height: height/10.5}}>
                <WebView source={{html: iframeHtml}} />
              </View>
            );
          }

        if (node.name == 'a') {
            var atribute = node.attribs;
            if(atribute.href.startsWith("https"))
            {
                var source = atribute.href;
                var aHtml = `<a href=\"${source}\" >${node.children[0].data}</a>`;
                return (
                    <HTMLView
                        value={aHtml}
                    />
                );
            }
            else
            {
                var source = API_HTML_ROOT + atribute.href;
                var aHtml = `<a href=\"${source}\" >${node.children[0].data}</a>`;
                return (
                    <HTMLView
                        value={aHtml}
                    />
                );
            }

        }
    }
    else
    {
        console.log(node);
        if (node.name == 'div') {
            var atribute = node.children[0].next.attribs;
            var iframeHtml = `<iframe src=\"${atribute.src}" width=\"${width/1.7}\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>`;
            return (
              <View key={index} style={{height: height/4.3,}}>
                <WebView
                    source={{html: iframeHtml}}
                    style={{backgroundColor: Colors.backgroundPrimary}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}/>
              </View>
            );
        }
        if (node.name == 'p') {
             if(node.children[0] != 'undefine')
             {
                // if(node.children[0].type == 'tag')
                // {
                //     alert(node.children[0].name)
                // }
                console.log(".......",node.children[0]);
             }
        }
    }
    if (node.name == 'img') {
        var atribute = node.attribs;
        var source = API_HTML_ROOT + atribute.src;
        var imgHtml = `<img src=\"${source}\" width=\"${width/1.5}\" height=\"${height/2.7}\" >`;
        return (
            <HTMLView
                value={imgHtml}
            />
        );
    }
}

export default class UserGuidesDetail extends Component {
    constructor(props) {
        super(props);
        const {userguide} = this.props.navigation.state.params

        let title = userguide.title;
        let body = userguide.body;
        let faqs = userguide.faqs;
        let image = userguide.featured_image ? API_HTML_ROOT + userguide.featured_image.url : '';

        this.state = ({
            userguide: userguide,
            title,
            image,
            body,
            faqs,
            loaderVisible: true,
        })
    }

    closeModal(){
        this.setState({
            modalVisible: false
        })
    }

    renderFAQItem = ({item, index}) => {
        return (
            <View style={Styles.faqItem}>
                <Text bold color={Colors.red} style={Styles.faqItemQuestion}>{index + 1}. {item.question} </Text>
                <Text>{item.answer} </Text>
            </View>
        )
    }


    render() {

        return (
            <View style={Styles.container} >

                <ScrollView contentContainerStyle={Styles.scroll}>

                    <Card topbar={{color: Colors.Navy}} style={Styles.titleView} contentStyle={Styles.title_content} >
                        <Text large style={Styles.title}>Using the app</Text>
                        <Text medium style={Styles.subtitle}>{this.state.title}</Text>
                    </Card>

                    <Card style={Styles.body} contentStyle={Styles.body_content}>
                        <View style={Styles.viewBody}>
                            <HTML 
                                html={this.state.body} 
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

                        {this.state.image &&
                            <View style={Styles.viewImage}>
                                <Image style={[Styles.middleimage]} source={{uri: this.state.image}} resizeMode='stretch'/>
                            </View>
                        }

                        {this.state.faqs.length > 0 &&
                            <FlatList
                                data = {this.state.faqs}
                                renderItem = {this.renderFAQItem}
                                keyExtractor = {(item, index) => index.toString()}
                                style={Styles.flatList}
                            />
                        }
                        <View style={Styles.buttonBar}>
                            <Button 
                                light 
                                bold 
                                buttonStyles={{
                                    margin: 0,
                                }}
                                onPress={ ()=> this.props.navigation.goBack() } 
                            >
                                Go back
                            </Button>
                        </View>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}
