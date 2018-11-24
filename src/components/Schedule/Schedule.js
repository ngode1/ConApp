import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Body, Segment, Button, Right, Badge, View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from '@expo/vector-icons/FontAwesome';

class ScheduleScreen extends Component {
  static navigationOptions = {
    title: 'Schedule',
  };

  state = { schedule: [] };

  componentWillMount(){
    axios.get('https://cdn.jsdelivr.net/gh/ngode1/ConApp/src/utils/Data-raw.json')
      .then(response => this.setState( { schedule: response.data.events } )
      );
  }
  
  scheduleItems(item) {
    return (
      item.data.map(event => {
        return (
          <ListItem key={event.name}>
            <Body>
              <Text>{event.name}</Text>                
              <Text>{event.place}</Text>                
              <Text>{event.time}</Text>               
            </Body>
            <Right>
              <Icon name="plus" onPress={() => alert("Added to your schedule")} />
            </Right>
          </ListItem>
        )
      })
    )
  }

  scheduleTimes() {
    return(
      this.state.schedule.map(item => {
        return (<List key={item.title}>
          <ListItem itemDivider key={item.title}>
            <Text key={item.title}>
              {item.title}
            </Text>
          </ListItem>
          { this.scheduleItems(item) }
          </List>)
      })
    )
  }

  render() {  

    return <Container>
        <Content>
          { this.scheduleTimes() }
        </Content>
      </Container>;
  }
}

export default ScheduleScreen;