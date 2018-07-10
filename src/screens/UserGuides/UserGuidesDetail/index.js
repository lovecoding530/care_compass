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
import Text from '@text'
import Footer from '@footer'
import Button from '@button'
import {Colors, Images, FontSizes} from '@theme';
import { Loader } from '@components';

import { getUserGuides, API_HTML_ROOT } from "@api";
import HTMLView from 'react-native-htmlview';
const { width,height } = Dimensions.get('window');
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import {SharedModal} from '../../modals';

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
            loaderVisible: true,
            modalVisible : false
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
                this.setState({modalVisible: true})
            console.log("Your content has been share successfully.");
        }
        else
        {
            console.log("You have cancelled sharing.");
        }
    }

    _share(){
        Share.share({
            message : 'Dying To Talk',
            url : 'http://www.godeckyourself.com'
        }).then(this._showResult.bind(this));
    }

    closeModal(){
        this.setState({
            modalVisible: false
        })
    }

    renderFAQItem({item, index}){
        return (
            <View style={Styles.item}>
                <View style={Styles.itemTitle}>
                    <Text bold style={[Styles.txtQuestion,{fontSize:orientation === 'PORTRAIT' ? width/30 : height/30}]}>{index + 1}: </Text>
                    <Text style={Styles.txtQuestion}>
                        {" "}{item.question}
                    </Text>
                </View>
                <Text style={[Styles.txtAnswer,{fontSize:orientation === 'PORTRAIT' ? width/30 : height/30}]}>{item.answer} </Text>
            </View>
        )
    }


    render() {   

        return (
            <ImageBackground source={Images.bg_how_to} resizeMode="stretch" style={Styles.container} >

                <ScrollView contentContainerStyle={Styles.scroll}>
                    <Loader loading={this.state.loaderVisible}/>

                    <View style={Styles.titleView}>
                             <Text large style={Styles.title}>App Instructions</Text>
                            <Text medium style={Styles.subtitle}>{this.state.title}</Text>
                    </View>

                     <View style={[Styles.itemView]}>
                        <View style={Styles.viewBody}>
                            <HTMLView
                                value={this.state.body}
                                renderNode={renderNode}
                            />
                        </View>

                        {this.state.image == '' ? null 
                            
                            : <View style={Styles.viewImage}>
                                <Image style={[Styles.middleimage]} source={{uri: this.state.image}}/>
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
                       
                    </View>
                </ScrollView> 
                <View style={Styles.buttonBar}>
                    <Button light onPress={ ()=> this.props.navigation.goBack() } >Go back</Button>
                    <Button dark  onPress={this._share} >Share</Button>
                </View>
                <SharedModal 
                    visible={this.state.modalVisible} 
                    onCancel={this.closeModal.bind(this)}
                    />
            </ImageBackground>
        );
    }
}
