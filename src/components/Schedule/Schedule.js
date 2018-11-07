import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Body, Segment, Button, Right } from 'native-base';
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

  render() {  
    console.log(this.state); 
    return (
      <Container>
        <Segment>
          <Button medium first>
            <Text>Friday</Text>
          </Button>
          <Button medium>
            <Text>Saturday</Text>
          </Button>
          <Button medium last>
            <Text>Sunday</Text>
          </Button>
        </Segment>
        <Content>
        <List>
        {
          this.state.schedule.map(schedule =>
            <ListItem thumbnail key={schedule.title} onPress = {
            () => ('SpeakersDetails')}>
            <Body>
              <Text>
                {schedule.title}
              </Text>
              <Text>
               {schedule.data[0].name}
              </Text>
            </Body>
            <Right>
              < Icon name = 'plus' onPress={() => alert('Added to your schedule')}/>
            </Right>
            </ListItem>
          )
        }
      </List>
      </Content>
      </Container>
    );
  }
}

export default ScheduleScreen;