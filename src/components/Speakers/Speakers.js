import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body } from 'native-base';
import { TouchableOpacity } from 'react-native';
import data from '../../utils/Data';

class SpeakerScreen extends Component {
  static navigationOptions = {
    title: 'Speakers',
  };
  render() {
    return (
      <Container>
        <Content>
          <TouchableOpacity>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: data.speakers.avatar }} />
              </Left>
              <Body>
                <Text onPress = {() => this.props.navigation.navigate('SpeakersDetail')} >{data.speakers.name}</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text onPress = {() => this.props.navigation.navigate('SpeakersDetail')} >Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </List>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default SpeakerScreen;