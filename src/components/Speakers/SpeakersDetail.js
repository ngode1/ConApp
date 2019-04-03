import React, { Component } from "react";
import { View, Text } from "react-native";

class SpeakersDetail extends Component {
  static navigationOptions = {
    title: "Speaker Detail"
  };

  render() {
    const { name, subtitle, bio, twitter } = this.props.navigation.state.params;
    return (
      <View>
        <Text>{name}</Text>
        <Text>{subtitle}</Text>
        <Text>{bio}</Text>
        <Text>{twitter}</Text>
      </View>
    );
  }
}

export default SpeakersDetail;
