import React, { Component } from "react";
import { Image, ImageBackground, Text, View, ScrollView } from "react-native";
import { MySpinner, Button} from "@components";

import { Images } from "@theme";
import Styles from "./styles";
import { getBundle } from "@api";
import { deviceWidth, deviceHeight } from "@ResponsiveDimensions";

export default class Splash extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    let json = await getBundle();
    this.setState({ loading: false });
  }

  onBegin = () => {
    const { navigate } = this.props.navigation;
    navigate("OnBoardingScreen");
  }

  render() {
    return (
      <View
        style={Styles.backgroundImage}
      >
        <Image source={Images.onboarding_image} style={Styles.onboarding_image}/>
        <ScrollView
          contentContainerStyle={Styles.scrollView}
        >
          <View style={Styles.circle_above}>
            <Image source={Images.dtt_blue} style={Styles.dtt_logo} />
            <Text style={Styles.app_name}>Care Compass</Text>
            <Text style={Styles.text_desc}>
              Supporting people living with{'\n'}
              dementia to work out what is{'\n'}
              right for them
            </Text>
            {this.state.loading ? (
              <MySpinner
                loading={this.state.loading}
                size={60}
                style={Styles.spinner}
              />
            ):(
              <View style={{height: 60, marginVertical: 40}}>
                <Button dark bold onPress={this.onBegin} textStyles={{fontSize: 20}}>Begin</Button>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}
