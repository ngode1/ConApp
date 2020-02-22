import React, { Component } from "react";
import
{
  Container,
  Content,
  List,
  ListItem,
  Text,
  Body,
  View,
  Right,
  Item
} from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
import Icon from "@expo/vector-icons/FontAwesome";
import { withNavigation } from 'react-navigation';

class Friday extends Component
{
  static navigationOptions = {
    title: "Schedule"
  };

  state = {
    schedule: [],
    modal: false
  };

  componentDidMount ()
  {
    axios
      .get( "https://cdn.jsdelivr.net/gh/ngode1/ConApp/src/utils/Data-raw.json" )
      .then( response => this.setState( { schedule: response.data.events } ) );
  }

  gotoDetail = event =>
  {
    this.props.navigation.navigate( "ScheduleDetail", { ...event } );
  };

  scheduleItems ( item )
  {
    return item.data.map( event =>
    {
      return (
        <ListItem
          key={ event.name }
          onPress={ () => this.gotoDetail( event ) }
        >
          <Body>
            <Text>{ event.name }</Text>
            <Text>{ event.place }</Text>
            <Text>{ event.time }</Text>
          </Body>
          {/* <Right>
            <Icon
              style={ { fontSize: 20 } }
              name="plus"
              // onPress={ () => alert( "Added to your schedule" ) }
              onPress={ () => this.props.navigation.navigate( 'ScheduleDetail' ) }
            />
          </Right> */}
        </ListItem>

      );
    } );
  }

  scheduleTimes ()
  {
    return this.state.schedule.map( item =>
    {
      return (
        <View style={ styles.content } key={ item.title }>
          <List>
            <ListItem itemDivider key={ item.title }>
              <Text key={ item.title } onPress={ () => this.props.navigation.navigate( 'ScheduleDetail' ) }>{ item.title }</Text>
            </ListItem>
            { this.scheduleItems( item ) }
          </List>
        </View>
      );
    } );
  }

  render ()
  {
    return (
      <Container>
        <Content>{ this.scheduleTimes() }</Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create( {
  // Tab content container
  content: {
    flex: 1, // Take up all available space
    backgroundColor: "#ffffed" // Darker background for content area
  }
} );

export default withNavigation( Friday );
