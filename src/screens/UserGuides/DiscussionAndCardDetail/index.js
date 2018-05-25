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
        const Piphone =  height-responsiveHeight(15.5);
        const Pipad =  height-responsiveHeight(14.5);
        const Pandroid =  height-responsiveHeight(16);
        const Lipad = height-responsiveHeight(14.9);
        const Lipone = height-responsiveHeight(13);
        const Landroid =  height-responsiveHeight(16);

        return (
             <View style={Styles.container}  onLayout={this.onLayout.bind(this)}>
                <ImageBackground source={require('../../../../assets/images/bg-how-to.jpg')} resizeMode='stretch' style={{ width: width,height: orientation === 'PORTRAIT' ? Platform.isPad ? Pipad : Platform.OS === 'android' ? Pandroid : Piphone  : Platform.isPad ? Lipad : Platform.OS === 'android' ? Landroid : Lipone }} >
                    <View style={Styles.scrollcontainer}> 
                        <ScrollView contentContainerStyle={Styles.scroll}>
                            <Loader loading={this.state.loaderVisible}/>
                            <View style={[Styles.itemTop,{width : width/1.2,marginTop : width/35,}]}>
                                <View style={[Styles.itemTopView,{width : width/1.2,}]}>
                                    <Text style={[Styles.title,{fontSize:  orientation === 'PORTRAIT' ? width/20 : height/20}]}>How to</Text>
                                        <Text style={[Styles.subtitle,{fontSize:  orientation === 'PORTRAIT' ? width/30 : height/30}]}>
                                            Using and getting the most out of the dying to talk app
                                        </Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={[Styles.firstrowItem,{width: width/2.47}]} onPress={()=>{navigate("UserGuidesDetail", {userguideIndex: index})}}>
                                <View style={[Styles.firstrowView,{ width: width/2.47}]}>
                                    <View style={Styles.iconView}>
                                        <Image source={require('../../../../assets/images/icon-professional.png')} resizeMode='stretch' style={Styles.iconProfessional}/>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={[Styles.cardtitle,{ color: Colors.Navy,fontSize:  orientation === 'PORTRAIT' ? width/30 : height/30}]}>Professional</Text>
                                          <Image source={require('../../../../assets/images/blue-left-arrow.png')} resizeMode='stretch'/>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={[Styles.firstrowItem,{width: width/2.47}]} onPress={()=>{navigate("UserGuidesDetail", {userguideIndex: index})}}>
                                <View style={[Styles.firstrowView,{ width: width/2.47}]}>
                                    <View style={Styles.iconView}>
                                        <Image source={require('../../../../assets/images/icon-community.png')} resizeMode='stretch' style={Styles.iconCommunity}/>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={[Styles.cardtitle,{ color: Colors.Navy,fontSize:  orientation === 'PORTRAIT' ? width/30 : height/30}]}>Community</Text>
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