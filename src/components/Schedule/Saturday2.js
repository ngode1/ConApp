import React, { Component } from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Body,
  View
} from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Sevents } from "../../utils/data";

export default class Friday1 extends Component {
  onLearnMore = event => {
    this.props.navigation.navigate("ScheduleDetails", { ...event });
  };

  scheduleItems(item) {
    return item.data.map(event => {
      return (
        <ListItem key={event.name} onPress={() => this.onLearnMore(event)}>
          <Body>
            <Text>{event.name}</Text>
            <Text>{event.place}</Text>
            <Text>{event.time}</Text>
          </Body>
        </ListItem>
      );
    });
  }

  scheduleTimes() {
    return Sevents.map(event => {
      return (
        <View style={styles.content} key={event.title}>
          <List>
            <ListItem itemDivider key={event.title}>
              <Text key={event.title}>{event.title}</Text>
            </ListItem>
            {this.scheduleItems(event)}
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
