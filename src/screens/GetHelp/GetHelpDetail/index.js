import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View,
    Linking,
    ScrollView,
    Share,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Footer from '@footer'
import Button from '@button'
import { Loader } from '@components';

import { getGetHelp } from "@api";
import HTMLView from 'react-native-htmlview';
var BASE_URL = 'https://pca.techequipt.com.au'
import Communications from 'react-native-communications';

export default class UserGuidesDetail extends Component {
    constructor(props) {
        super(props);
        const {gethelpIndexes} = this.props.navigation.state.params
        this.state = ({
            gethelpIndexes: gethelpIndexes,
            title : '',
            logo : '',
            description : '',
            email : '',
            website : '',
            phonenumber : '',
            loaderVisible: true,
        })
    }

    async componentDidMount() {
        const ds = await getGetHelp(true)
        const gethepls = ds[0].services
        const gethelp = gethepls[this.state.gethelpIndexes]

       
        this.setState({
            title : gethelp.title,
            logo : gethelp.logo,
            description : gethelp.description,
            email : gethelp.email_address,
            website : gethelp.website,
            phonenumber : gethelp.phone_number,
            loaderVisible: false
        }) 
    }

    render() {   
        return (
            <View style={Styles.container}>
            <View style={Styles.scrollcontainer}> 
               <ScrollView contentContainerStyle={Styles.scroll}> 
                    <Loader loading={this.state.loaderVisible}/>
                    <View style={Styles.itemTop}>
                        <Text bold style={Styles.title}>{this.state.title}</Text>
                    </View>
                    <View style={Styles.itemBottom}>
                       
                            {this.state.logo == null ?
                                <Image style={Styles.logo} source={require('../../../../assets/images/default_appLogo.png')}/>
                                :
                                <Image style={Styles.logo} source={{uri:  BASE_URL + this.state.logo.url}}/>
                            }
                           
                        <View style={Styles.viewBody}>
                            <HTMLView
                                value={this.state.description}
                            />
                        </View>

                        
                        {this.state.email == '' 
                            ?
                            <View style={{flex:1}}>
                                <View style={{flexDirection : 'row',padding:10}}>
                 
                                    <View style={Styles.contactView}>
                                        <View style={{justifyContent:'center'}}><Image source={require('../../../../assets/images/icon_call.png')}/></View>
                                        <Text style={Styles.contactText}>{this.state.phonenumber}</Text>
                                    </View>
                                    <View style={Styles.contactView}>
                                        <View style={{justifyContent:'center'}}><Image  source={require('../../../../assets/images/icon_website.png')}/></View>
                                        <Text style={Styles.contactText}>{this.state.website}</Text>
                                    </View>

                                </View>
                                <View style={Styles.listitemBottomView}>
                                    <TouchableOpacity style={Styles.buttonleft} onPress={() => Communications.phonecall(this.state.phonenumber, true)}>
                                        <View style={Styles.buttonView}>
                                            <View style={{justifyContent:'center'}}><Image source={require('../../../../assets/images/icon_call.png')}/></View>
                                            <Text style={Styles.buttonText}>CALL</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={Styles.buttonright} onPress={ ()=> Linking.openURL(this.state.website) }>
                                        <View style={Styles.buttonView}>
                                            <View style={{justifyContent:'center'}}><Image  source={require('../../../../assets/images/icon_website.png')}/></View>
                                            <Text style={Styles.buttonText}>WEBSITE</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            :

                            <View style={{flex:1}}>
                                <View style={{flexDirection : 'row',padding:10}}>
                 
                                    <View style={Styles.contactView}>
                                        <View style={{justifyContent:'center'}}><Image source={require('../../../../assets/images/icon_call.png')}/></View>
                                        <Text style={Styles.contactText}>{this.state.phonenumber}</Text>
                                    </View>
                                    <View style={Styles.contactView}>
                                        <View style={{justifyContent:'center'}}><Image  source={require('../../../../assets/images/icon_website.png')}/></View>
                                        <Text style={Styles.contactText}>{this.state.website}</Text>
                                    </View>
                                    <View style={Styles.contactView}>
                                        <View style={{justifyContent:'center'}}><Image  source={require('../../../../assets/images/icon_email.png')}/></View>
                                        <Text style={Styles.contactText}>{this.state.email}</Text>
                                    </View>

                                </View>
                                <View style={Styles.listitemBottomView}>
                                    <TouchableOpacity style={Styles.button} onPress={() => Communications.phonecall(this.state.phonenumber,true)}>
                                        <View style={Styles.buttonView}>
                                            <View style={{justifyContent:'center'}}><Image source={require('../../../../assets/images/icon_call.png')}/></View>
                                            <Text style={Styles.buttonText}>CALL</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={Styles.buttonMiddle} onPress={ ()=> Linking.openURL(this.state.website) }>
                                        <View style={Styles.buttonView}>
                                            <View style={{justifyContent:'center'}}><Image  source={require('../../../../assets/images/icon_website.png')}/></View>
                                            <Text style={Styles.buttonText}>WEBSITE</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={Styles.button} >
                                        <View style={Styles.buttonView}>
                                            <View style={{justifyContent:'center'}}><Image  source={require('../../../../assets/images/icon_email.png')}/></View>
                                            <Text style={Styles.buttonText}>EMAIL</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                        
                    </View>
                   
                    <View style={Styles.itemBottom}>
                        <View style={Styles.buttonContainer}>
                            <Button light onPress={ ()=> this.props.navigation.goBack() }>GO BACK</Button>
                            <View style={{flex:1}}/>
                            <Button dark  >SHARE</Button>
                        </View>
                    </View>
                </ScrollView> 
                </View>
                <Footer />
            </View>
        );
    }
}