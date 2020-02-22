import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from './ScheduleDetailStyle';

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
      <View style={ styles.container }>
        <Text style={ styles.name }>{ name }</Text>
        <Text style={ styles.info }>{ time }</Text>
        <Text style={ styles.info }>{ place }</Text>
        <Text style={ styles.description }>{ description }</Text>
        <Text style={ styles.speaker }>Speaker: { speaker }</Text>
      </View>
    );
  }
}
