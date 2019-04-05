import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "./SpeakersDetailStyle";
import Icon from "@expo/vector-icons/FontAwesome";

export default class SpeakersDetail extends Component {
  static navigationOptions = {
    title: "Speaker Detail"
  };

  render() {
    const { name, avatar, bio, twitter } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Image source={{ uri: avatar }} style={styles.photo} />
        <Text style={styles.name}>{name}</Text>
        <Text>{bio}</Text>
        <View style={styles.info}>
          <Icon style={styles.icon} name="twitter" />
          <Text>{twitter}</Text>
        </View>
      </View>
    );
  }
}
