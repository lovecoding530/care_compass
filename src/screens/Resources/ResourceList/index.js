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
            resourceIndexes: [],
        })
    }

    async componentDidMount() {
        const ds = await getResources(false)

        var resourceIndexes = [];
        for(var i = 0; i < ds.resources.length; i ++){
            resourceIndexes.push(ds.resources[i]);
        }

        this.setState({
            resourceIndexes: resourceIndexes
        })
    }

    renderResourceItem({item}){
        return (
            <TouchableOpacity style={Styles.item} onPress={()=>{Props.navigation.navigate("ResourceDetail", { items: item })}}>
                <Text style={Styles.txttitle}>{item.title}</Text>
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
                            keyExtractor={item => item.title}
                        />
                    </ScrollView>
                </View>
                <Footer />
            </View>
             

           
        );
    }
}