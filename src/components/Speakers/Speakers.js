import React, { Component } from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  View
} from "native-base";
import axios from "axios";

export default class SpeakerScreen extends Component {
  static navigationOptions = {
    title: "Speakers"
  };

  state = { speakers: [] };

  componentWillMount() {
    axios
      .get("https://cdn.jsdelivr.net/gh/ngode1/ConApp/src/utils/Data-raw.json")
      .then(response => this.setState({ speakers: response.data.speakers }));
  }

  gotoDetail = item => {
    this.props.navigation.navigate("SpeakerDetail", { ...item });
  };

  render() {
    // console.log(this.state);
    return (
      <Container>
        <Content>
          <List>
            {this.state.speakers.map(item => (
              <ListItem
                thumbnail
                key={item.name}
                onPress={() => this.gotoDetail(item)}
              >
                <Left>
                  <Thumbnail square source={{ uri: item.avatar }} />
                </Left>
                <Body>
                  <Text key={item.name}>{item.name}</Text>
                  <Text note>{item.subtitle}</Text>
                </Body>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
