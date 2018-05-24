/**
 * @providesModule router
 */

import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View, SafeAreaView} from 'react-native';
import { StackNavigator, DrawerNavigator, withNavigation } from 'react-navigation';

const { width } = Dimensions.get('window');

import {Colors, FontSizes, Images} from './theme';
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

var drawerNavigator = null
var primaryNavigator = null
var homeNavigator = null

const headerStyle = { 
    backgroundColor: Colors.Navy, 
    height: responsiveHeight(6), 
    paddingHorizontal: responsiveHeight(1)
}

const HeaderTitle = () => {
    return (
        <Image 
            source={Images.icon_dying_to_talk} 
            style={{width: responsiveHeight(7), height: responsiveHeight(5), tintColor: '#fff'}}
        />
    );
}

const Footer = () => {
    return (
        <View style={{
            height: responsiveHeight(7), 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            paddingHorizontal: responsiveWidth(2),
            backgroundColor: Colors.Navy}}>
            <Image 
                source={Images.logo_footer} 
                resizeMode={"contain"}
                style={{width: responsiveHeight(16), height: responsiveHeight(5), tintColor: '#fff'}}
            />
            <Text light right>logo footer logo footer {"\n"} logo footer</Text>
        </View>
    );
}

const withFooter = (Screen) => {
    const screen = (props) => {
        drawerNavigator = props.navigation
        return (
            <View style={{flex: 1}}>
                <Screen {...props}/>
                <SafeAreaView style={{backgroundColor: Colors.Navy}}>
                    <Footer/>
                </SafeAreaView>
            </View>
        )
    }
    screen.router = Screen.router
    return screen
}

const MenuIcon = ( navigation ) => {
    homeNavigator = navigation
    return (
        <Icon.Button 
            name="bars" 
            size={FontSizes.medium}
            style={{height: responsiveHeight(4.5), paddingHorizontal: 10,}}
            backgroundColor={'#0000'} 
            onPress={() => drawerNavigator.navigate('DrawerOpen')}>
            <Text light bold>MENU</Text>
        </Icon.Button>
    );
}

const WelcomeIcon = ({ navigate }) => {
    return (
        <Icon.Button 
            name="arrow-left" 
            size={FontSizes.medium}
            style={{height: responsiveHeight(4.5), paddingHorizontal: 10,}}
            backgroundColor={'#0000'} 
            onPress={() => primaryNavigator.goBack(null)}>
            <Text light bold>WELCOME</Text>
        </Icon.Button>
    );
}

const HomeIcon = ({ navigate, goBack }) => {
    return (
        <Icon.Button 
            name="home" 
            size={FontSizes.medium}
            style={{height: responsiveHeight(4.5), paddingHorizontal: 10,}}
            backgroundColor={'#0000'} 
            onPress={() => navigate('Home')}>
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
    navigationOptions: ({ navigation }) => ({
        headerTitle: <HeaderTitle/>,
        headerStyle: headerStyle,
        headerRight: <MenuIcon {...navigation} />,
        headerLeft: <HomeIcon {...navigation} />,
    }),
});

export const CardGameStack = StackNavigator({
    CDIntro: {screen: CDIntro},
    CDSingleView: {screen: CDSingleView},
    CDListView: {screen: CDListView},
    CDSummary: {screen: CDSummary},
}, {
    navigationOptions: ({ navigation }) => ({
        headerTitle: <HeaderTitle/>,
        headerStyle: headerStyle,
        headerRight: <MenuIcon {...navigation} />,
        headerLeft: <HomeIcon {...navigation} />,
    }),
});

export const ResourcesStack = StackNavigator({
    ResourceList: {screen: ResourceList},
    ResourceDetail: {screen: ResourceDetail},
}, {
    navigationOptions: ({ navigation }) => ({
        headerTitle: <HeaderTitle/>,
        headerStyle: headerStyle,
        headerRight: <MenuIcon {...navigation} />,
        headerLeft: <HomeIcon {...navigation} />,
    }),
});

export const UserGuidesStack = StackNavigator({
    UserGuidesList: {screen: UserGuidesList},
    UserGuidesDetail: {screen: UserGuidesDetail},
}, {
    navigationOptions: ({ navigation }) => ({
        headerTitle: <HeaderTitle/>,
        headerStyle: headerStyle,
        headerRight: <MenuIcon {...navigation} />,
        headerLeft: <HomeIcon {...navigation} />,
    }),
});

export const GetHelpStack = StackNavigator({
    GetHelpList: {screen: GetHelpList},
    GetHelpDetail: {screen: GetHelpDetail},
}, {
    navigationOptions: ({ navigation }) => ({
        headerTitle: <HeaderTitle/>,
        headerStyle: headerStyle,
        headerRight: <MenuIcon {...navigation} />,
        headerLeft: <HomeIcon {...navigation} />,
    }),
});

export const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <HeaderTitle/>,
            headerStyle: headerStyle,
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <WelcomeIcon {...navigation} />,
        }),
    },
    DiscussionStarter: {
        screen: DiscussionStarterStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <HeaderTitle/>,
            headerStyle: headerStyle,
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <HomeIcon {...navigation} />,
        }),
    },
    CardGame: {
        screen: CardGameStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <HeaderTitle/>,
            headerStyle: headerStyle,
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <HomeIcon {...navigation} />,
        }),
    },
    Resources: {
        screen: ResourcesStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <HeaderTitle/>,
            headerStyle: headerStyle,
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <HomeIcon {...navigation} />,
        }),
    },
    UserGuides: {
        screen: UserGuidesStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <HeaderTitle/>,
            headerStyle: headerStyle,
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <HomeIcon {...navigation} />,
        }),
    },
    GetHelp: {
        screen: GetHelpStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <HeaderTitle/>,
            headerStyle: headerStyle,
            headerRight: <MenuIcon {...navigation} />,
            headerLeft: <HomeIcon {...navigation} />,
        }),
    },
});

const HomeWithHeader = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <SafeAreaView style={{backgroundColor: Colors.Navy}}>
                <View style={[headerStyle, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
                    <WelcomeIcon/>
                    <HeaderTitle/>
                    <MenuIcon/>
                </View>
            </SafeAreaView>
            <Home navigation={navigation}/>
        </View>
    )
}

export const DrawerStack = DrawerNavigator({
    Home: {
        screen: withFooter(HomeWithHeader),
    },
    DiscussionStarter: {
        screen: withFooter(DiscussionStarterStack),
    },
    CardGame: {
        screen: withFooter(CardGameStack),
    },
    Resources: {
        screen: withFooter(ResourcesStack),
    },
    UserGuides: {
        screen: withFooter(UserGuidesStack),
    },
    GetHelp: {
        screen: withFooter(GetHelpStack),
    },
},{
    drawerWidth: (width >= 768) ? width / 2.5 : width * 2 / 3,
    drawerPosition: 'right',
    contentComponent: props => <Menu {...props}/>
});

const OnBoardingScreen = (props) => {
    primaryNavigator = props.navigation
    return (
        <View style={{flex: 1}}>
            <OnBoarding {...props}/>
            <Footer/>
        </View>
    );
}

export const PrimaryNav = StackNavigator({
    SplashScreen: { screen: Splash },
    OnBoardingScreen: { screen: OnBoardingScreen },
    DrawerStack: { screen: DrawerStack },
}, {
    headerMode: 'none',
})
