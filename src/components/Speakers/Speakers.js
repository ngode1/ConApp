import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, View } from 'native-base';
import axios from 'axios';
import data from '../../utils/Data';

class SpeakerScreen extends Component {
  static navigationOptions = {
    title: 'Speakers',
  };

  state = { speakers: [] };

  componentWillMount(){
    axios.get('https://cdn.jsdelivr.net/gh/ngode1/ConApp/src/utils/Data.json')
      .then(response => this.setState( { speakers: response.data } )
      );
  }

  // renderAlbums() {
  //   return this.state.speakers.map(speakers => 
  //     <Text key={speakers.name}>{speakers.name}</Text>
  //   );
  // }

  render() {  
    console.log(this.state); 
    return (
      <Container>
        <Content>
        <List>
        {
          this.state.speakers.map(speakers =>
            <ListItem thumbnail key={speakers.name}>
            <Left>
                <Thumbnail square source={speakers.avatar} />
            </Left>
            <Body>
              <Text key={speakers.name}>
                {speakers.name}
              </Text>
              <Text note>
                {speakers.subtitle}
              </Text>
            </Body>
            </ListItem>
              // onPress={()=>this.setState({speaker: l })}
          )
        }
      </List>
      </Content>
      </Container>
    );
  }
}

export default SpeakerScreen;