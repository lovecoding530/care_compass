import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView,
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Footer from '@footer'

import { getResources } from "@api";

let Props;

export default class Resources extends Component {
    constructor(props) {
        super(props);
        Props=this.props;
        this.state = ({
            resourceIndexes: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        })
    }

    async componentDidMount() {
        const ds = await getResources(true)
        const resources = ds[0].discussion_starter

        var resourceIndexes = [];
        for(var i = 0; i < resources.length; i ++){
            resourceIndexes.push(i + 1);
        }

        this.setState({
            resourceIndexes: resourceIndexes
        })
    }

    renderResourceItem({item}){
        return (
            <TouchableOpacity style={Styles.item} onPress={()=>{Props.navigation.navigate("ResourceDetail")}}>
                <Text medium bold>Resource {item}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            
            <View style={Styles.container}>
                <View style={Styles.scrollcontainer}> 
                    <ScrollView contentContainerStyle={Styles.scroll}>
                        <Text style={Styles.title}>Resources</Text>
                        <Text style={Styles.subtitle}>
                            View list of resources and use to learn more
                        </Text>
                 
                        <FlatList
                            numColumns = {2}
                            data = {this.state.resourceIndexes}
                            renderItem = {this.renderResourceItem}
                            keyExtractor = {(index) => index.toString()}
                        />
                    </ScrollView>
                </View>
                <Footer />
            </View>
             

           
        );
    }
}