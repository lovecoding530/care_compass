import React, { Component } from "react";
import {
  Image,
  View,
  Linking,
  ScrollView,
  ImageBackground
} from "react-native";

import Styles from "./styles";
import Text from "@text";
import Button from "@button";
import { Colors, Images } from "@theme";
import { getResources } from "@api";
import { Loader, Card } from '@components';
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from "@ResponsiveDimensions";

var BASE_URL = "https://pca.techequipt.com.au";

export default class ResourceDetail extends Component {
  constructor(props) {
    super(props);
    const { resourceIndex } = this.props.navigation.state.params;
    this.state = {
      resourceIndex: resourceIndex,
      title: "",
      subtitle: "",
      link: "",
      image: ""
    };
  }

  async componentDidMount() {
    const ds = await getResources();
    const resources = ds.resources;
    const resource = resources[this.state.resourceIndex];

    this.setState({
      title: resource.title,
      subtitle: resource.information_text,
      link: resource.link,
      image: resource.image ? BASE_URL + resource.image.url : ""
    });
  }

  render() {
    return (
      <View
        style={Styles.container}
      >
        <ScrollView contentContainerStyle={Styles.scroll}>
          <Card 
            topbar={{color: Colors.navy}}
            style={Styles.titleView} 
            contentStyle={{padding:deviceWidth(3)}} 
          >
            <Text large center style={Styles.title}>
              {this.state.title}
            </Text>
          </Card>

          <Card style={[Styles.itemView]}>
            <View style={{margin: deviceWidth(3)}}>
              {this.state.image ? (
                <Image
                  style={[Styles.middleimage]}
                  resizeMode="contain"
                  source={{ uri: this.state.image }}
                />
              ) : null}
              <Text smallMedium style={Styles.subtitle}>
                {this.state.subtitle}
              </Text>
            </View>
            <View style={Styles.buttonBar}>
              <Button light bold onPress={() => this.props.navigation.goBack()}>
                Back
              </Button>
              {this.state.link == "" ? null : (
                <Button
                  dark
                  bold
                  onPress={() =>
                    Linking.openURL(this.state.link).catch(err =>
                      console.error("An error occurred", err)
                    )
                  }
                >
                  Find out more
                </Button>
              )}
            </View>
          </Card>
        </ScrollView>
      </View>
    );
  }
}
