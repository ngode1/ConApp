import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Button } from "react-native";
import
{
  Container,
  Content,
  List,
  ListItem,
  Text,
  Body,
  View,
  Card,
  Right,
  Item,
  Badge
} from "native-base";
import Icon from "@expo/vector-icons/FontAwesome";
import { withNavigation } from 'react-navigation';
import * as Calendar from 'expo-calendar';
import * as Permissions from 'expo-permissions';
import * as Localization from 'expo-localization';
import moment from 'moment';
// import axios from "axios";

import EventList from "./events.json";

class Friday1 extends Component
{
  componentDidMount ()
  {
    // this.state = { schedule: [] };
    // console.log( EventList.friday );

    // axios.get("../utils/events.json").then(response => console.log(response));
    // .then(response => this.setState({ schedule: response.data.friday }));
    // console.log( this.state );
  }

  onLearnMore = event =>
  {
    this.props.navigation.navigate( "ScheduleDetail", { ...event } );
  };

  scheduleItems ( item )
  {
    return item.data.map( event =>
    {
      return (
        <ListItem key={ event.name } onPress={ () => this.onLearnMore( event ) }>
          <Body>
            <Text>{ event.name }</Text>
            <Text>{ event.place }</Text>
            <Text>{ event.time }</Text>
            <Badge style={ { backgroundColor: event.color, marginTop: 10 } }>
              <Text>
                { event.category }
              </Text>
            </Badge>
          </Body>
          {/* <Right>
            <Icon
              style={ { fontSize: 20 } }
              name="plus"
              onPress={ () => this.addToCalendar( null ) }
            />
          </Right> */}
        </ListItem>
      );
    } );
  }

  addToCalendar = async () =>
  {
    const hasCalendarPermission = await Permissions.askAsync( Permissions.CALENDAR );
    const defaultCal = await Calendar.getDefaultCalendarAsync();

    if ( hasCalendarPermission.status === 'granted' )
    {
      const event = {
        title: EventList.data.name[ 0 ],
        location: "Eddie's Attic, 515 N McDonugh St, Decatur, GA 30030, United States",
        notes: "All the notes",
        startDate: moment().toDate(),
        endDate: moment().add( 1, 'hours' ).toDate(),
        timeZone: Localization.timezone,
        alarms: [ { relativeOffset: -15 } ] //alarms: [ { absoluteDate: "2019-05-05T12:00:00:000Z" } ]
      };
      try
      {
        const createEventAsyncRes = await Calendar.createEventAsync(
          defaultCal.id,
          event
        );
        alert( "Added to your calendar!" )
        console.log( createEventAsyncRes );
        return createEventAsyncRes;
      } catch ( error )
      {
        console.log( error );
      }
    }
  }

  scheduleTimes ()
  {
    return EventList.friday.map( event =>
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
    backgroundColor: "#fafaf5" // Darker background for content area
  }
} );

export default withNavigation( Friday1 );
