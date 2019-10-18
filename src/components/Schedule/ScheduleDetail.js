import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ScheduleDetail extends Component
{
  static navigationOptions = {
    title: "Schedule Detail"
  };

  render ()
  {
    const { name, place, time, description, speaker } = this.props.navigation.state.params;
    // const name = this.props.navigation.getParam( 'name', 'Peter' );
    // const time = this.props.navigation.navigate( "ScreenName" )
    return (
      <View>
        <Text>{ name }</Text>
        <Text>{ place }</Text>
        <Text>{ time }</Text>
        <Text>{ description }</Text>
        <Text>{ speaker }</Text>
      </View>
    );
  }
}
