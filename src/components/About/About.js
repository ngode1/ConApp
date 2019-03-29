import React, { Component } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import styles from "./About.style";
import Icon from "@expo/vector-icons/FontAwesome";
import data from "../../utils/Data-raw";

class AboutScreen extends Component {
  static navigationOptions = {
    title: "About"
  };
  render() {
    return (
      <ScrollView>
        <Image
          source={require("../../../assets/dashcon.jpg")}
          style={styles.banner}
        />
        <View style={styles.container}>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.info}>
            <Icon name="calendar" style={styles.icon} />
            <Text style={styles.text}>{data.date}</Text>
            <Icon name="map-pin" style={styles.icon} />
            <Text>{data.location.city}</Text>
          </View>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </ScrollView>
    );
  }
}

export default AboutScreen;
