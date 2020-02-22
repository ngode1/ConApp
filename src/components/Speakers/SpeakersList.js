import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body } from 'native-base';
import data from '../../utils/Data';

export default class ListThumbnailExample extends Component
{
  static navigationOptions = {
    title: 'Speakers',
  };
  render ()
  {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={ { uri: data.avatar } } />
              </Left>
              <Body>
                <Text>{ data.name }</Text>
                <Text note numberOfLines={ 1 }>{ data.subtitle }</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}