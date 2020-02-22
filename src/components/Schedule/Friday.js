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
import * as Calendar from 'expo-calendar';
import * as Permissions from 'expo-permissions';
import * as Localization from 'expo-localization';
import moment from 'moment';

class Friday extends Component
{
  static navigationOptions = {
    title: "Schedule"
  };

  state = {
    schedule: [],
  };

  componentDidMount ()
  {
    axios
      .get( "https://cdn.jsdelivr.net/gh/ngode1/ConApp/src/utils/Data-raw.json" )
      .then( response => this.setState( { schedule: response.data.events } ) );
  }

  addToCalendar = async () =>
  {
    const hasCalendarPermission = await Permissions.askAsync( Permissions.CALENDAR );
    const defaultCal = await Calendar.getDefaultCalendarAsync();
    const allschedule = this.state.schedule;
    const schedule = this.state.schedule.map( item => item.name );
    // const newname = this.scheduleItems( item );
    // const newname = this.scheduleItems( item );
    // const newname = this.props.
    // console.log( newname );
    console.log( allschedule );

    if ( hasCalendarPermission.status === 'granted' )
    {
      const event = {
        title: 'event',
        location: "Eddie's Attic, 515 N McDonugh St, Decatur, GA 30030, United States",
        notes: "All the notes",
        startDate: moment().toDate(),
        endDate: moment().add( 2, 'hours' ).toDate(),
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
          <Right>
            <Icon
              style={ { fontSize: 20 } }
              name="plus"
              onPress={ () => this.addToCalendar() }
            // onPress={ () => alert( "Added to your schedule" ) }
            // onPress={ () => this.props.navigation.navigate( 'ScheduleDetail' ) }
            />
          </Right>
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
