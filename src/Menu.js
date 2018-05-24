import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { Colors, Images, FontSizes } from './theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '@text'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

// StatusBar.setHidden(true);
export default class Menu extends Component {
    goto(route){
        this.props.drawerNavigation.navigate("DrawerClose")
        setTimeout(() => {
            this.props.homeNavigation.navigate(route)
        }, 500);
    }

    render() {
        return (
            <View style={styles.container}>
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
                        <Text light>Play Card Game <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={()=>this.goto('UserGuides')}>
                        <Text light>How to use this app <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={()=>this.goto('Resources')}>
                        <Text light>More Information <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={()=>this.goto('GetHelp')}>
                        <Text light>UsGet Help <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text light>Take a quick survey <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text light>About this app <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text light>Welcome slides <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text light>Support / FAQ <Icon name="arrow-right" size={FontSizes.smallMedium}/></Text>
                    </TouchableOpacity>
                </View>
                <Image 
                    source={Images.logo_footer} 
                    resizeMode={"contain"}
                    style={{width: responsiveHeight(20), height: responsiveHeight(6), tintColor: '#fff', alignSelf: 'center'}}
                />
                <View style={styles.footer}>
                    <Text style={styles.text_footer}>Funded by the Australian Goverment</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.Navy,
    },

    logo: {
        height: 300,
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
        paddingVertical: 12,
    },

    footer: {
        marginTop: 8,
        padding: 8,
        backgroundColor: Colors.darkNavy,
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveHeight(7),
    },

    text_footer: {
        color: '#fff',
        fontSize: 16,
        fontStyle: 'italic',
    }
})