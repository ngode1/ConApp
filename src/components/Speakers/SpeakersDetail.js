import React, { Component } from 'react';
import { View, Text } from 'react-native';

import data from '../../utils/Data';


class AboutScreen extends Component {
    static navigationOptions = {
        title: 'Detail',
    };
  render() {
    return (
        <View>
          <Text>Name</Text>
          <View>
              <Text>Subtitle</Text>
              <Text>Bio</Text>
          </View>
          <Text>Description of convention</Text>
          </View>
    );
  }
}

export default AboutScreen;