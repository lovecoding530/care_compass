import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView,
    AsyncStorage,
    ImageBackground,
    Dimensions
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Button from '@button'
import Footer from '@footer'
import { Loader } from '@components';
import moment from 'moment';
import {Colors} from '@theme';
var { width,height } = Dimensions.get('window');
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
var orientation = width > height ? 'LANDSCAPE' : 'PORTRAIT';

export default class DiscussionAndCardDetail extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            loaderVisible: false
        })
    }

    componentDidMount() {

        Dimensions.addEventListener('change', ({ window: { width, height } }) => {
            orientation = width > height ? 'LANDSCAPE' : 'PORTRAIT';
        });
        
    }

    onLayout(e) {

        height = Dimensions.get('window').height;
        width = Dimensions.get('window').width;
         this.forceUpdate();
    }


    render() {
        return (
             <View style={Styles.container}  onLayout={this.onLayout.bind(this)}>
                <ImageBackground source={require('../../../../assets/images/bg-how-to.jpg')} resizeMode='stretch' style={{ width: width,height: height-responsiveHeight(15),}} >
                    <View style={Styles.scrollcontainer}> 
                        <ScrollView contentContainerStyle={Styles.scroll}>
                            <Loader loading={this.state.loaderVisible}/>
                            <View style={[Styles.itemTop,{width : width/1.2,marginTop : width/35,}]}>
                                <View style={[Styles.itemTopView,{paddingVertical:height/45,width : width/1.2,}]}>
                                    <Text style={[Styles.title,{fontSize:  orientation === 'PORTRAIT' ? width/20 : height/20}]}>How to</Text>
                                        <Text style={[Styles.subtitle,{fontSize:  orientation === 'PORTRAIT' ? width/30 : height/30}]}>
                                            Using and getting the most out of the dying to talk app
                                        </Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={[Styles.firstrowItem,{width: width/2.47, height: width/2.5,}]} onPress={()=>{navigate("UserGuidesDetail", {userguideIndex: index})}}>
                                <View style={[Styles.firstrowView,{ width: width/2.47,height: width/2.5,paddingVertical:height/50,}]}>
                                    <View style={[Styles.iconView,{height:height/9,marginVertical:height/20,}]}>
                                        <Image source={require('../../../../assets/images/icon-professional.png')} resizeMode='stretch' style={{ width : orientation === 'PORTRAIT' ? width/11 :height/11,height : orientation === 'PORTRAIT' ? height/7 : width/7}}/>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={[Styles.cardtitle,{ color: Colors.Red,fontSize:  orientation === 'PORTRAIT' ? width/30 : height/30}]}>Professional</Text>
                                          <Image source={require('../../../../assets/images/blue-left-arrow.png')} resizeMode='stretch'/>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={[Styles.firstrowItem,{width: width/2.47, height: width/2.5,}]} onPress={()=>{navigate("UserGuidesDetail", {userguideIndex: index})}}>
                                <View style={[Styles.firstrowView,{ width: width/2.47,height: width/2.5,paddingVertical:height/50,}]}>
                                    <View style={Styles.iconView}>
                                        <Image source={require('../../../../assets/images/icon-community.png')} resizeMode='stretch' style={{width :  orientation === 'PORTRAIT' ? width/7 : height/7 ,height :  orientation === 'PORTRAIT' ? height/7 : width/7}}/>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={[Styles.cardtitle,{ color: Colors.Red,fontSize:  orientation === 'PORTRAIT' ? width/30 : height/30}]}>Community</Text>
                                          <Image source={require('../../../../assets/images/blue-left-arrow.png')} resizeMode='stretch'/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            </View>

                        </ScrollView>

                    </View>
                    <View style={[Styles.buttonBackView,{ paddingHorizontal:width/12,}]}>
                        <Button light onPress={ ()=> this.props.navigation.goBack() } buttonStyles={Styles.buttonBack}>Go back</Button>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}