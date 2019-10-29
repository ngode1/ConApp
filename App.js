import React from 'react';
import * as Font from "expo-font";
import { View, StatusBar } from 'react-native';
import Navigator from './src/navigation/RootNavigation';

export default class App extends React.Component
{
  constructor ( props )
  {
    super( props );
  }

  async componentWillMount ()
  {
    await Font.loadAsync( {
      Roboto: require( "native-base/Fonts/Roboto.ttf" ),
      Roboto_medium: require( "native-base/Fonts/Roboto_medium.ttf" ),
      Ionicons: require( "@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf" ),
    } );
  }
  render ()
  {
    StatusBar.setBarStyle( 'dark-content', true );
    return (
      <View style={ { flex: 1 } }>
        <StatusBar />
        <Navigator />
      </View>
    );
  }
}