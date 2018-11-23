import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';

class SpeakerScreen extends Component {
  static navigationOptions = {
    title: 'Speakers',
  };

  state = { speakers: [] };

  componentWillMount(){
    axios.get('https://cdn.jsdelivr.net/gh/ngode1/ConApp/src/utils/Data-raw.json')
      .then(response => this.setState( { speakers: response.data.speakers } )
      );
  }

  gotoDetail=(item)=>{
    this.props.navigation.navigate('SpeakersDetail',{item:item});
  }

  render() {  
    console.log(this.state); 
    return (
      <Container>
        <Content>
        <List>
        {
          this.state.speakers.map(item =>
          <TouchableOpacity onPress={()=>this.gotoDetail(item)} key={item.name}>
            <ListItem thumbnail key={item.name} onPress = {
            () => ('SpeakersDetails', {name: item.name})}>
            <Left>
                <Thumbnail square source={{uri: item.avatar }} />
            </Left>
            <Body>
              <Text key={item.name}>
                {item.name}
              </Text>
              <Text note>
                {item.subtitle}
              </Text>
            </Body>
            </ListItem>
          </TouchableOpacity>
          )
        }
      </List>
      </Content>
      </Container>
    );
  }
}

export default SpeakerScreen;