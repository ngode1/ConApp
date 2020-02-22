import React, { Component } from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Body,
  Segment,
  Button,
  Right,
  Badge,
  View
} from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";
import Icon from "@expo/vector-icons/FontAwesome";

class Saturday extends Component {
  static navigationOptions = {
    title: "Schedule"
  };

  state = { schedule: [] };

  componentDidMount() {
    axios
      .get("https://cdn.jsdelivr.net/gh/ngode1/ConApp/src/utils/Data-raw.json")
      .then(response => this.setState({ schedule: response.data.events }));
  }
  gotoDetail = item => {
    this.props.navigation.navigate("SpeakerDetail", { ...item });
  };

  scheduleItems(item) {
    return item.data.map(event => {
      return (
        <ListItem key={event.name} onPress={() => this.gotoDetail(item)}>
          <Body>
            <Text>{event.name}</Text>
            <Text>{event.place}</Text>
            <Text>{event.time}</Text>
          </Body>
          <Right>
            <Icon
              style={{ fontSize: 20 }}
              name="plus"
              onPress={() => alert("Added to your schedule")}
            />
          </Right>
        </ListItem>
      );
    });
  }

  scheduleTimes() {
    return this.state.schedule.map(item => {
      return (
        <View style={styles.content} key={item.title}>
          <List>
            <ListItem itemDivider key={item.title}>
              <Text key={item.title}>{item.title}</Text>
            </ListItem>
            {this.scheduleItems(item)}
          </List>
        </View>
      );
    });
  }

  render() {
    return (
      <Container>
        <Content>{this.scheduleTimes()}</Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  // Tab content container
  content: {
    flex: 1, // Take up all available space
    backgroundColor: "#ffffed" // Darker background for content area
  }
});

export default Saturday;
