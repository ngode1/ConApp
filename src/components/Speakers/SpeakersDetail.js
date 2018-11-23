import React, { Component } from 'react';
import { View, Text } from 'react-native';

import data from '../../utils/Data-raw';


class SpeakersDetail extends Component {
    static navigationOptions = {
        title: 'Detail',
    };
    constructor(props) {
        super(props);
        
        let item = this.props.navigation.state.params.item;
        this.state={
            item:item,
    }
  }

  render() {
    return (
        <View>
            <Text>{data.name}</Text>
            <View>
                <Text>{data.bio}</Text>
                <Text>{data.twitter}</Text>
                <Text>{data.github}</Text>
            </View>
          </View>
    );
  }
}

export default SpeakersDetail;