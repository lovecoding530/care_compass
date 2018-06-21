/**
 * @providesModule router
 */

import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View, SafeAreaView} from 'react-native';
import { StackNavigator, DrawerNavigator, NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get('window');

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
import {UserGuidesList,UserGuidesDetail,DiscussionAndCardDetail} from "./screens/UserGuides";
import {GetHelpList, GetHelpDetail, LookAfterYourself} from "./screens/GetHelp";
import { deviceWidth, deviceHeight } from "./components/ResponsiveDimensions";

var drawerNavigator = null
var primaryNavigator = null
var homeNavigator = null

const headerStyle = { 
    backgroundColor: Colors.Navy, 
    height: deviceHeight(6), 
}

const HeaderTitle = () => {
    return (
        <Text light medium bold center style={{
            position: 'absolute',
            width: '100%',
            zIndex: -1,
        }}>APP NAME</Text>
    );
}

const Footer = () => {
    return (
        <View style={{
            height: deviceHeight(7), 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            paddingHorizontal: deviceWidth(2),
            backgroundColor: Colors.Navy}}>
            <Image 
                source={Images.logo_footer} 
                resizeMode={"contain"}
                style={{width: deviceHeight(16), height: deviceHeight(5), tintColor: '#fff'}}
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
                    {height > 414 ? 
                        <Footer/>
                    :
                        <View/>
                    }
                </SafeAreaView>
            </View>
        )
    }
    screen.router = Screen.router
    return screen
}

const MenuIcon = ( navigation ) => {
    return (
        <Icon.Button 
            name="bars" 
            size={FontSizes.medium}
            style={{height: deviceHeight(4.5), paddingHorizontal: 10, marginHorizontal: deviceHeight(1)}}
            backgroundColor={'#0000'} 
            onPress={() => drawerNavigator.navigate('DrawerOpen')}>
            <Text light bold>MENU</Text>
        </Icon.Button>
    );
}

const WelcomeIcon = ({navigation}) => {
    const { navigate, goBack } = navigation
    return (
        <Icon.Button 
            name="arrow-left" 
            size={FontSizes.medium}
            style={{height: deviceHeight(4.5), paddingHorizontal: 10, marginHorizontal: deviceHeight(1)}}
            backgroundColor={'#0000'} 
            onPress={() => {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    key: null,
                    actions: [
                        NavigationActions.navigate({ routeName: 'OnBoardingScreen' }),
                    ],
                });
                navigation.dispatch(resetAction);
            }}>
            <Text light bold>WELCOME</Text>
        </Icon.Button>
    );
}

const HomeIcon = ({ navigate, goBack }) => {
    return (
        <Icon.Button 
            name="home" 
            size={FontSizes.medium}
            style={{height: deviceHeight(4.5), paddingHorizontal: 10,}}
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
    LookAfterYourself:{screen:LookAfterYourself},
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
                    <WelcomeIcon navigation={navigation}/>
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
    drawerWidth: (deviceWidth(100) >= 768) ? deviceWidth(40) : deviceWidth(66),
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
