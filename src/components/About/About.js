import React, { Component } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import styles from './About.style';
import Icon from '@expo/vector-icons/FontAwesome';
import data from '../../utils/Data-raw';


class AboutScreen extends Component {
    static navigationOptions = {
        title: 'About',
    };
  render() {
    return (
      <ScrollView>
        <Image
          source={require('../../../assets/dashcon.jpg')}
          style={styles.banner}
        />
        <View style={styles.container}>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.info}>
            <Icon name="calendar">
              <Text>{data.date}</Text>
            </Icon>
            <Icon name="map-pin">
              <Text>{data.location.city}</Text>
            </Icon>
          </View>
          < Text style = {styles.description} >{data.description}</Text>
          </View>
      </ScrollView>
    );
  }
}

export default AboutScreen;