import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import { Colors, Images, FontSizes } from './theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '@text'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { deviceWidth, deviceHeight, windowHeight } from "@ResponsiveDimensions";
import { NavigationActions } from 'react-navigation';

var currentRoute = null

// StatusBar.setHidden(true);
export default class Menu extends Component {
    goto(route){
        this.props.navigation.navigate("DrawerClose")
        setTimeout(() => {
            this.props.navigation.navigate(route)
        }, 500);
    }

    goBackToOnboarding(){
        const resetAction = NavigationActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({ routeName: 'OnBoardingScreen' }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container} style={{backgroundColor: Colors.darkNavy}}>
                <ImageBackground source={Images.bg_splash_onboarding} style={styles.logo}>
                    <View style={styles.opacityView}>
                        <Image source={Images.icon_dying_to_talk} style={styles.icon_dtt}/>
                    </View>
                </ImageBackground>
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menuItem} onPress={()=>this.goto('DiscussionStarter')}>
                        <Text light>Use Discussion Starter <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={()=>this.goto('CardGame')}>
                        <Text light>Start Discussion Cards <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={()=>this.goto('GetHelp')}>
                        <Text light>Looking after yourself <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={()=>this.goto('UserGuides')}>
                        <Text light>App instructions <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={()=>this.goto('Resources')}>
                        <Text light>Resource library <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text light>Take a quick survey <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text light>About this app <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={()=>this.goBackToOnboarding()}>
                        <Text light>Welcome slides <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text light>Support / FAQ <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                </View>
                <Image  
                    source={Images.logo_footer} 
                    resizeMode={"contain"}
                    style={{width: deviceHeight(20), height: deviceHeight(5), tintColor: '#fff', alignSelf: 'center'}}
                />
                <SafeAreaView style={{backgroundColor: Colors.darkNavy}}>
                    <View style={styles.footer}>
                        <Text style={styles.text_footer}>Funded by the Australian Goverment</Text>
                    </View>
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, 
        backgroundColor: Colors.Navy,
    },

    logo: {
        height: deviceHeight(20),
    },

    opacityView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0009',
        flex: 1,
    },

    icon_dtt: {
        tintColor: '#fff',
    },

    menu: {
        flex: 1,
        padding: 24,
    },

    menuItem: {
        paddingVertical: deviceWidth(2),
    },

    footer: {
        marginTop: 8,
        padding: 8,
        backgroundColor: Colors.darkNavy,
        justifyContent: 'center',
        alignItems: 'center',
        height: deviceHeight(7),
    },

    text_footer: {
        color: '#fff',
        fontSize: 16,
        fontStyle: 'italic',
    }
})