import React, { Component } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import styles from './About.style';
import Icon from '@expo/vector-icons/FontAwesome';


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
          <Text style={styles.title}>Sample App</Text>
          <View style={styles.info}>
            <Icon name="calendar">
              <Text>April 2, 2019</Text>
            </Icon>
            <Icon name="map-pin">
              <Text>Atlanta, GA</Text>
            </Icon>
          </View>
          < Text style = {styles.description} > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras in metus ac turpis cursus suscipit at a nisi.Praesent eu vehicula ante.Nullam viverra diam erat, at venenatis leo rutrum non.Integer vulputate aliquam augue, et hendrerit erat pellentesque in. </Text>
          </View>
      </ScrollView>
    );
  }
}

export default AboutScreen;