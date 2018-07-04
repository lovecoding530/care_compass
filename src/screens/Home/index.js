import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';

import {Colors, Images, FontSizes} from '@theme';
import Styles from './styles';
import Text from '@text'
import Icon from 'react-native-vector-icons/FontAwesome';
import { MediaQuery } from "react-native-responsive";
import store from '../../Store'
import { Card } from "@components";

const {height, width} = Dimensions.get('window');

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        })
    }

    componentDidMount() {
        console.log(Dimensions.get('window'))
    }

    gotoRoute(routeName){
        store.activeRoute = routeName
        store.routesInStack.push(routeName)
        var key = routeName
        this.props.navigation.navigate({routeName, key})
    }

    render() {
        return ( 
            <ImageBackground source={Images.bg_navigation} style={Styles.container}>
                <ScrollView contentContainerStyle={Styles.scrollView} scrollEnabled={height < 768}>
                    <View style={Styles.containerLeft}>
                        <Card topbar={{color: Colors.Red}} style={Styles.item} onPress={()=>{this.gotoRoute('DiscussionStarter')}}>
                            <MediaQuery minDeviceWidth={768}>
                                <Image source={Images.discussion_starter} style={Styles.right_icon}/>
                            </MediaQuery>
                            <Text medium bold style={Styles.right_item_text}>Use discussion starter <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                        </Card>
                        <Card topbar={{color: Colors.Red}} style={Styles.item} onPress={()=>{this.gotoRoute('CardGame')}}>
                            <MediaQuery minDeviceWidth={768}>
                                <Image source={Images.cardgame} style={Styles.right_icon}/>
                            </MediaQuery>
                            <Text medium bold style={Styles.right_item_text}>Start discussion cards <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                        </Card>
                    </View>
                    <View style={Styles.containerRight}>
                        <Card topbar={{color: Colors.Navy}} style={Styles.item} onPress={()=>{this.gotoRoute("GetHelp")}}>
                            <MediaQuery minDeviceWidth={768}>
                                <Image source={Images.looking_after} style={Styles.left_icon}/>
                            </MediaQuery>
                            <Text bold style={Styles.left_item_text}>Looking after your self <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                        </Card>
                        <Card topbar={{color: Colors.Navy}} style={Styles.item} onPress={()=>{this.gotoRoute("UserGuides")}}>
                            <MediaQuery minDeviceWidth={768}>
                                <Image source={Images.icon_how_to} style={Styles.left_icon}/>
                            </MediaQuery>
                            <Text bold style={Styles.left_item_text}>App instructions <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                        </Card>
                        <Card topbar={{color: Colors.Navy}} style={Styles.item} onPress={()=>{this.gotoRoute("Resources")}}>
                            <MediaQuery minDeviceWidth={768}>
                                <Image source={Images.more_info} style={Styles.left_icon}/>
                            </MediaQuery>
                            <Text bold style={Styles.left_item_text}>Resource library <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                        </Card>
                        <Card topbar={{color: Colors.Navy}} style={[Styles.item, Styles.survey_item]} onPress={()=>{this.gotoRoute("GetHelp")}}>
                            <Text bold style={Styles.left_item_text}>Take a quick survey <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                        </Card>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}
