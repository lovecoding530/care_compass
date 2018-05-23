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
    WebView
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Footer from '@footer'
import Button from '@button'
import { Loader } from '@components';

import { getUserGuides, API_HTML_ROOT } from "@api";
import HTMLView from 'react-native-htmlview';
const { width,height } = Dimensions.get('window');
import {Colors} from '@theme';

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
        const {userguideIndex} = this.props.navigation.state.params
        this._share=this._share.bind(this);
        this._showResult=this._showResult.bind(this);
        this.state = ({
            userguideIndex: userguideIndex,
            title : '',
            image : '',
            body : '',
            faqs : [],
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
                loaderVisible: false
            })
        }
        else
        {
           this.setState({
               title : userguide.title,
               body : userguide.body,
               faqs : userguide.faqs,
                image: API_HTML_ROOT + userguide.featured_image.url,
                loaderVisible: false
            }) 
        }
        
    }
    _showResult(result){
        if(result.action == "sharedAction")
        {
            alert("Your content has been share successfully.");
        }
        else
        {
            alert("You have cancelled sharing.");
        }
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
                            renderNode={renderNode}
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
            </View>
        );
    }
}
