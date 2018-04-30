import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Footer from '@footer'

import { getUserGuides } from "@api";

export default class UserGuidesList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            activityIndexes: [],
            slug:''
        })
    }

    async componentDidMount() {
        const ds = await getUserGuides(false)
        const userguides = ds[0].guides
        this.setState({slug : ds[0].slug});

        var userguideIndexes = [];
        for(var i = 0; i < userguides.length; i ++){
            userguideIndexes.push(userguides[i]);
        }

        this.setState({
            userguideIndexes: userguideIndexes
        })
    }

    renderUserGuideItem({item, index}){
        const {navigate} = this.props.navigation
        const first = index === 0;
        const second = index === 1;
        return (
            <TouchableOpacity style={[first ? Styles.firstrowItem : second ? Styles.firstrowItem : Styles.item]} onPress={()=>{navigate("UserGuidesDetail", { slug : this.state.slug , itemSlug: item.slug })}}>
                <Text style={Styles.cardtitle}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={Styles.container}>
             <View style={Styles.scrollcontainer}> 
             <ScrollView contentContainerStyle={Styles.scroll}>
                <Text bold style={Styles.title}>user guides</Text>
                <Text style={Styles.subtitle}>
                    How to get the most out of this app
                </Text>
                <FlatList
                    numColumns = {2}
                    data = {this.state.userguideIndexes}
                    renderItem = {this.renderUserGuideItem.bind(this)}
                    keyExtractor = {(index) => index.toString()}
                    />
                    </ScrollView>
                </View>
                <Footer />
            </View>
        );
    }
}