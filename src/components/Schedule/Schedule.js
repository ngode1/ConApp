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

  render() {  
    console.log(this.state); 
    return <Container>
        {/* <View style={{ margin: 20, flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Badge style={{marginLeft: 5}} primary>
              <Text>
                17
              </Text>
            </Badge>
            < Text style={{marginTop: 10}}> 
              Friday 
            </Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Saturday')}>
              <Badge bordered info style={{marginLeft: 15}}>
              <Text>
                18
              </Text>
            </Badge>
            <Text style={{marginTop: 10}}> 
              Saturday 
            </Text>
          </TouchableOpacity>
          </View>

          <View>
            <Badge bordered info style={{marginLeft: 10}}>
              <Text>
                19
              </Text>
            </Badge>
            <Text style={{marginTop: 10}}>
               Sunday 
            </Text>
          </View>

        </View> */}
        <Content>
            {this.state.schedule.map(item => {
          return (<List>
            <ListItem itemDivider key={item.title}>
              <Text>
                {item.title}
              </Text>
            </ListItem>
            <ListItem key={item.index}>
              <Body>
                <Text>{item.title}</Text>
                <Text>{item.data[0].name}</Text>
              </Body>
              <Right>
                <Icon name="plus" onPress={() => alert("Added to your schedule")} />
              </Right>
            </ListItem>
          </List>);
        })}
        </Content>
      </Container>;
  }
}

export default ScheduleScreen;