import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Body, Segment, Button, Right, Badge, View } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';
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
              <Text style={{fontFamily: 'Avenir'}}>{event.name}</Text>                
              <Text style={{fontFamily: 'Avenir'}}>{event.place}</Text>                
              <Text style={{fontFamily: 'Avenir'}}>{event.time}</Text>               
            </Body>
            <Right>
              <Icon style={{fontSize: 20}} name="plus" onPress={() => alert("Added to your schedule")} />
            </Right>
          </ListItem>
        )
      })
    )
  }

  scheduleTimes() {
    return(
      this.state.schedule.map(item => {
        return (<View style={styles.content} key={item.title}>
        <List>
          <ListItem itemDivider key={item.title}>
            <Text key={item.title}>
              {item.title}
            </Text>
          </ListItem>
          { this.scheduleItems(item) }
          </List>
        </View>
        )
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

const styles = StyleSheet.create(
  {
   // Tab content container
   content: {
     flex: 1, // Take up all available space
     backgroundColor: '#ffffed', // Darker background for content area
    },
  }
);
export default ScheduleScreen;