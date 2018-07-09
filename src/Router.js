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
import store from './Store';

var drawerNavigator = null

const headerStyle = { 
    backgroundColor: Colors.Navy, 
    height: deviceHeight(6), 
}

const HeaderTitle = () => {
    return (
        <Text light smallMedium bold center style={{
            position: 'absolute',
            width: '100%',
            zIndex: -1,
        }}>Dying to Talk{"\n"}in the Bush</Text>
    );
}

const Footer = () => {
    return (
        <View style={{
            height: deviceHeight(5), 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            paddingHorizontal: deviceWidth(2),
            backgroundColor: Colors.Navy,
            overflow: 'hidden'
        }}>
            <View style={{
                width: deviceHeight(7),
                height: deviceHeight(7),
                borderRadius: deviceHeight(3.5),
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image 
                    source={Images.dtt_blue} 
                    style={{width: deviceHeight(6), height: deviceHeight(5), resizeMode: 'contain'}}
                />
            </View>
            <Text light right small>logo footer logo footer {"\n"} logo footer</Text>
        </View>
    );
}

const withFooter = (Screen) => {
    const screen = (props) => {
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

const MenuIcon = () => {
    return (
        <Icon.Button 
            name="bars" 
            size={FontSizes.medium}
            style={{height: deviceHeight(4.5), paddingHorizontal: 10, marginHorizontal: deviceHeight(1)}}
            backgroundColor={'#0000'} 
            onPress={() => drawerNavigator.navigate('DrawerOpen')}>
            <Text light bold>Menu</Text>
        </Icon.Button>
    );
}

const WelcomeIcon = ({dispatch}) => {
    return (
        <TouchableOpacity 
            style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: deviceWidth(1)}}
            onPress={() => {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    key: null,
                    actions: [
                        NavigationActions.navigate({ routeName: 'OnBoardingScreen' }),
                    ],
                });
                dispatch(resetAction);
            }}
        >
            <Image source={Images.welcome_arrow} style={{width: deviceWidth(5), height: deviceWidth(3.5), resizeMode: 'contain'}}/>
            <Text light bold>Welcome</Text>
        </TouchableOpacity>
    );
}

const HomeIcon = ({goBack}) => {
    return (
        <Icon.Button 
            name="home" 
            size={FontSizes.medium}
            style={{height: deviceHeight(4.5), paddingHorizontal: 10,}}
            backgroundColor={'#0000'} 
            onPress={() => {
                goBack(store.routesInStack[0])
                store.activeRoute = null
                store.routesInStack = []
            }}>
            <Text light bold>Home</Text>
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
        gesturesEnabled: false,
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
        gesturesEnabled: false,
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

const HomeWithHeader = ({navigation}) => { 
    homeNavigator = navigation
    return ( 
        <View style={{flex: 1}}> 
            <SafeAreaView style={{backgroundColor: Colors.Navy}}> 
                <View style={[headerStyle, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}> 
                    <WelcomeIcon {...navigation}/> 
                    <HeaderTitle/> 
                    <MenuIcon/> 
                </View> 
            </SafeAreaView> 
            <Home navigation={navigation}/> 
        </View> 
    ) 
} 

export const HomeStack = StackNavigator({
    Home: {
        screen: HomeWithHeader,
    },
    DiscussionStarter: {
        screen: DiscussionStarterStack,
    },
    CardGame: {
        screen: CardGameStack,
    },
    Resources: {
        screen: ResourcesStack,
    },
    UserGuides: {
        screen: UserGuidesStack,
    },
    GetHelp: {
        screen: GetHelpStack,
    },
}, {
    headerMode: 'none',
});

export const DrawerStack = DrawerNavigator({
    Home: {
        screen: withFooter(HomeStack),
    },
},{
    drawerWidth: (deviceWidth(100) >= 768) ? deviceWidth(40) : deviceWidth(66),
    drawerPosition: 'right',
    contentComponent: props => {
        drawerNavigator = props.navigation
        return <Menu {...props}/>
    }
});

export const PrimaryNav = StackNavigator({
    SplashScreen: { screen: Splash },
    OnBoardingScreen: { screen: withFooter(OnBoarding) },
    DrawerStack: { screen: DrawerStack },
}, {
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false,
    }
})
