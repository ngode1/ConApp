import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import
{
  Container,
  Content,
  List,
  ListItem,
  Text,
  Body,
  View
} from "native-base";
import { withNavigation } from 'react-navigation';

import EventList from "./events.json";

class Day extends Component
{
  componentDidMount ()
  {
    this.state = { schedule: [] };
    this.setState( {
      schedule: EventList[ this.props.day ]
    } );

    // console.log( EventList[ this.props.day ] );

    // var filtered = EventList.filter(a => a == this.props.day);
    // console.log(filtered);
    // this.setState({ schedule: EventList.get(this.props.day) });

    // console.log( EventList.friday );

    // axios.get("../utils/events.json").then(response => console.log(response));
    // .then(response => this.setState({ schedule: response.data.friday }));
    // console.log(this.state);
  }

  // onLearnMore = event => {
  //   this.props.navigation.navigate("ScheduleDetails", { ...event });
  // };

  pressRow ( event )
  {
    const { navigate } = this.props.navigation;
    navigate( "ScheduleDetails", { ...event } );
  }

  onLearnMore = event =>
  {
    this.props.navigation.navigate( "ScheduleDetails", { ...event } );
  };

  scheduleItems ( event )
  {
    return event.data.map( event =>
    {
      return (
        <ListItem key={ event.name } onPress={ () => this.onLearnMore( event ) }>
          <Body>
            <Text>{ event.name }</Text>
            <Text>{ event.place }</Text>
            <Text>{ event.time }</Text>
          </Body>
        </ListItem>
      );
    } );
  }

  scheduleTimes ()
  {
    const schedule = EventList[ this.props.day ];
    return schedule.map( event =>
    {
      return (
        <View style={ styles.content } key={ event.title }>
          <List>
            <ListItem itemDivider key={ event.title }>
              <Text key={ event.title }>{ event.title }</Text>
            </ListItem>
            { this.scheduleItems( event ) }
          </List>
        </View>
      );
    } );
  }

  render ()
  {
    return <Content>{ this.scheduleTimes() }</Content>;
  }
}

const styles = StyleSheet.create( {
  // Tab content container
  content: {
    flex: 1, // Take up all available space
    backgroundColor: "#ffffed" // Darker background for content area
  }
} );

export default withNavigation( Day );
