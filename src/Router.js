/**
 * @providesModule router
 */

import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

const { width } = Dimensions.get('window');

import {Colors, FontSizes} from './theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Text } from './components';
import Menu from "./Menu";
import Splash from "./screens/Splash";
import OnBoarding from "./screens/OnBoarding";
import Home from "./screens/Home";
import {DSIntro, ActivityList, Activity, UpNext, Complete} from "./screens/DiscussionStarter";
import {CDIntro, CDSingleView, CDListView, CDSummary} from "./screens/CardGame";
import {ResourceList, ResourceDetail} from "./screens/Resources";
import {UserGuidesList,UserGuidesDetail} from "./screens/UserGuides";
import {GetHelpList, GetHelpDetail} from "./screens/GetHelp";
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const MenuIcon = ({ navigate }) => {
    return (
        <Icon.Button 
            name="bars" 
            size={FontSizes.medium}
            style={{height: responsiveHeight(4.5), paddingHorizontal: 10,}}
            backgroundColor={Colors.buttonPrimary} 
            onPress={() => navigate('DrawerOpen')}>
            <Text light>MENU</Text>
        </Icon.Button>
    );
}

const HomeIcon = ({ navigate, goBack }) => {
    return (
        <Icon.Button 
            name="home" 
            size={FontSizes.medium}
            style={{height: responsiveHeight(4.5), paddingHorizontal: 10,}}
            backgroundColor={Colors.buttonPrimary} 
            onPress={() => goBack()}>
            <Text light>HOME</Text>
        </Icon.Button>
    );
}

export const DiscussionStarterStack = StackNavigator({
    DSIntro: {screen: DSIntro},
    ActivityList: {screen: ActivityList},
    Activity: {screen: Activity},
    UpNext: {screen: UpNext},
    Complete: {screen: Complete},
}, {
    headerMode: 'none',
});

export const CardGameStack = StackNavigator({
    CDIntro: {screen: CDIntro},
    CDSingleView: {screen: CDSingleView},
    CDListView: {screen: CDListView},
    CDSummary: {screen: CDSummary},
}, {
    headerMode: 'none',
});

export const ResourcesStack = StackNavigator({
    ResourceList: {screen: ResourceList},
    ResourceDetail: {screen: ResourceDetail},
}, {
    headerMode: 'none',
});

export const UserGuidesStack = StackNavigator({
    UserGuidesList: {screen: UserGuidesList},
    UserGuidesDetail: {screen: UserGuidesDetail},
}, {
    headerMode: 'none',
});

export const GetHelpStack = StackNavigator({
    GetHelpList: {screen: GetHelpList},
    GetHelpDetail: {screen: GetHelpDetail},
}, {
    headerMode: 'none',
});

export const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: responsiveWidth(4), fontWeight: 'bold'}}>Dying To Talk</Text>  ,
            headerStyle: { backgroundColor: Colors.nav, height: responsiveHeight(6), paddingHorizontal: responsiveHeight(1)},
            headerTitleStyle: {color: '#a7c3f2'},
            headerRight: <MenuIcon {...navigation} />,
        }),
    },
    DiscussionStarter: {
        screen: DiscussionStarterStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: responsiveWidth(4), fontWeight: 'bold'}}>Dying To Talk</Text>  ,
            headerStyle: { backgroundColor: Colors.nav, height: responsiveHeight(6), paddingHorizontal: responsiveHeight(1)},
            headerTitleStyle: {color: '#a7c3f2'},
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <HomeIcon {...navigation} />,
        }),
    },
    CardGame: {
        screen: CardGameStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: responsiveWidth(4), fontWeight: 'bold'}}>Dying To Talk</Text>  ,
            headerStyle: { backgroundColor: Colors.nav, height: responsiveHeight(6), paddingHorizontal: responsiveHeight(1)},
            headerTitleStyle: {color: '#a7c3f2'},
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <HomeIcon {...navigation} />,
        }),
    },
    Resources: {
        screen: ResourcesStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: responsiveWidth(4), fontWeight: 'bold'}}>Dying To Talk</Text>  ,
            headerStyle: { backgroundColor: Colors.nav, height: responsiveHeight(6), paddingHorizontal: responsiveHeight(1)},
            headerTitleStyle: {color: '#a7c3f2'},
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <HomeIcon {...navigation} />,
        }),
    },
    UserGuides: {
        screen: UserGuidesStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: responsiveWidth(4), fontWeight: 'bold'}}>Dying To Talk</Text>  ,
            headerStyle: { backgroundColor: Colors.nav, height: responsiveHeight(6), paddingHorizontal: responsiveHeight(1)},
            headerTitleStyle: {color: '#a7c3f2'},
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <HomeIcon {...navigation} />,
        }),
    },
    GetHelp: {
        screen: GetHelpStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: responsiveWidth(4), fontWeight: 'bold'}}>Dying To Talk</Text>  ,
            headerStyle: { backgroundColor: Colors.nav, height: responsiveHeight(6), paddingHorizontal: responsiveHeight(1)},
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
    OnBoardingScreen: { screen: OnBoarding },
    DrawerStack: { screen: DrawerStack },
    
}, {
    headerMode: 'none',
})