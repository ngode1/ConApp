import React from 'react';
import {Text, View, StatusBar } from 'react-native';
import Navigator from './src/navigation/RootNavigation';

export default class App extends React.Component {
  render() {
    StatusBar.setBarStyle('dark-content', true);
    return (
        <View style={{flex: 1}}>
          < StatusBar />
          <Navigator />
        </View>
    );
  }
}