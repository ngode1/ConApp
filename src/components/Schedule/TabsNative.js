import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './Tabs';
import Sunday from './Sunday';

export default class App extends Component {
   static navigationOptions = {
     title: 'Schedule',
   };
  render() {
    return (
      <View style={styles.container}>
        <Tabs>
          {/* First tab */}
            <Sunday />
          {/* Second tab */}
          <View title="NATIVE" text="18" style={styles.content}>
            <Text style={styles.header}>
              Truly Native
            </Text>
            <Text style={styles.text}>
              Components you define will end up rendering as native platform widgets
            </Text>
          </View>
          {/* Second tab */}
          <View title="NATIVE" text="18" style={styles.content}>
            <Text style={styles.header}>
              Truly Native
            </Text>
            <Text style={styles.text}>
              Components you define will end up rendering as native platform widgets
            </Text>
          </View>
          {/* Third tab */}
          <View title="EASY" text="19" style={styles.content}>
            <Text style={styles.header}>
              Ease of Learning
            </Text>
            <Text style={styles.text}>
              It’s much easier to read and write comparing to native platform’s code
            </Text>
          </View>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // App container
  container: {
    flex: 1,                            // Take up all screen
    backgroundColor: '#800080', // Background color
  },
  // Tab content container
  content: {
    flex: 1,                            // Take up all available space
    justifyContent: 'center',           // Center vertically
    alignItems: 'center',               // Center horizontally
    backgroundColor: '#C2185B',         // Darker background for content area
  },
  // Content header
  header: {
    margin: 10,                         // Add margin
    color: '#FFFFFF',                   // White color
    fontFamily: 'Avenir',               // Change font family
    fontSize: 26,                       // Bigger font size
  },
  // Content text
  text: {
    marginHorizontal: 20,               // Add horizontal margin
    color: 'rgba(255, 255, 255, 0.75)', // Semi-transparent text
    textAlign: 'center',                // Center
    fontFamily: 'Avenir',
    fontSize: 18,
  },
});