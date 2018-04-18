import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    ImageBackground,
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import {Colors} from '../../theme';
import Styles from './styles';
import Swiper from './Swiper';
import Button from './Button';

// Detect screen width and height
const { width, height } = Dimensions.get('window');
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default class Home extends Component {
    constructor(props) {
        super(props);
       
    }

    componentDidMount() {
    }

    /**
    * method called on done button click
    */
    onDone(){
        const {navigate} = this.props.navigation;
        navigate("DrawerStack");
    }

    render() {
        return (
            <Swiper>
        <View style={[styles.slide]}>
          <Image style={{marginBottom:responsiveHeight(3),marginTop:responsiveHeight(8)}} source={require('../../../assets/OnBoarding/OnBoarding_logo.png')}/>
          <Image source={require('../../../assets/OnBoarding/OnBoarding_middleimage.png')}/>
          <Text style={[styles.text,{marginVertical:responsiveHeight(4)}]}>Start to play card game or discuss your point with us</Text>
         
          <View style={{flexDirection:'row',padding:10,marginTop:responsiveHeight(11)}}>
            <Image style={{marginTop:responsiveHeight(8)}} source={require('../../../assets/OnBoarding/OnBoarding_bottom_logo.png')}/>
            <Text style={{marginTop:responsiveHeight(10),marginLeft:100,width:200,textAlign:'right',fontSize:10}}>Use dying to talk developed by Palliative care app </Text>
          </View>
        </View>
        <View style={[styles.slide]}>
          <Image style={{marginBottom:responsiveHeight(3),marginTop:responsiveHeight(8)}} source={require('../../../assets/OnBoarding/OnBoarding_logo.png')}/>
          <Image source={require('../../../assets/OnBoarding/OnBoarding_middleimage.png')}/>
          <Text style={[styles.text,{marginVertical:responsiveHeight(4)}]}>Start to play card game or discuss your point with us</Text>
         
          <View style={{flexDirection:'row',padding:10,marginTop:responsiveHeight(11)}}>
            <Image style={{marginTop:responsiveHeight(8)}} source={require('../../../assets/OnBoarding/OnBoarding_bottom_logo.png')}/>
            <Text style={{marginTop:responsiveHeight(10),marginLeft:100,width:200,textAlign:'right',fontSize:10}}>Use dying to talk developed by Palliative care app </Text>
          </View>
        </View>
        <View style={[styles.slide]}>
          <Image style={{marginBottom:responsiveHeight(3),marginTop:responsiveHeight(8)}} source={require('../../../assets/OnBoarding/OnBoarding_logo.png')}/>
          <Image source={require('../../../assets/OnBoarding/OnBoarding_middleimage.png')}/>
          <Text style={[styles.text,{marginVertical:responsiveHeight(4)}]}>Start to play card game or discuss your point with us</Text>
            <Button style={{marginLeft:100}} text="Done" onPress={() => this.onDone()} />
        </View>
      </Swiper>
        );
    }
}



const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1,                    // Center vertically
    alignItems: 'center',       // Center horizontally
  },
  // Header styles
  header: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  // Text below header
  text: {
    color: 'gray',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});
