import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

const { width } = Dimensions.get('window');

import {Colors} from './theme'
import { Button, Icon, Text} from 'native-base';
import Menu from "./Menu";
import Splash from "./screens/Splash";
import Home from "./screens/Home";
import DiscussionStarter from "./screens/DiscussionStarter";

const MenuIcon = ({ navigate }) => {
    return (
        <Button 
            iconLeft 
            style={{backgroundColor: 'gray', margin: 8}}
            onPress={() => navigate('DrawerOpen')}>
            <Icon name='menu' />
            <Text>MENU</Text>
        </Button>
    );
}

const BackIcon = ({ navigate, go }) => {
    return (
        <Icon name='arrow-back' />
    );
}

const HomeIcon = ({ navigate, goBack }) => {
    return (
        <Button 
            iconLeft 
            style={{backgroundColor: 'gray', margin: 8}}
            onPress={() => goBack()}>
            <Icon name='home' />
            <Text>HOME</Text>
        </Button>
    );
}

export const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dying To Talk</Text>  ,
            headerStyle: { backgroundColor: Colors.lightGray, height: 60},
            headerTitleStyle: {color: '#a7c3f2'},
            headerRight: <MenuIcon {...navigation} />,
        }),
    },
    DiscussionStarter: {
        screen: DiscussionStarter,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dying To Talk</Text>  ,
            headerStyle: { backgroundColor: Colors.lightGray, height: 60},
            headerTitleStyle: {color: '#a7c3f2'},
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <HomeIcon {...navigation} />,
        }),
    },
});

export const DrawerStack = DrawerNavigator(
    {
        homeStack: {
            screen: HomeStack,
        }
    },
    {
        drawerWidth: width / 2.5,
        drawerPosition: 'right',
        contentComponent: props => <Menu {...props} />
    }
);

export const PrimaryNav = StackNavigator({
    SplashScreen: { screen: Splash },
    DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'none',
})