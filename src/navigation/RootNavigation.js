import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/FontAwesome';
import AboutScreen from '../components/About/About';
import SpeakersScreen from '../components/Speakers/Speakers';
import SpeakersDetail from '../components/Speakers/SpeakersDetail';
import ScheduleScreen from '../components/Schedule/Schedule';
import Saturday from '../components/Schedule/Saturday';
import ScheduleTabs from '../components/Schedule/ScheduleTabs';

const ScheduleStack = createStackNavigator(
    {
    STabs: {
        screen: ScheduleTabs
    },
    Schedule: {
      screen: ScheduleScreen
    },
    Saturday: {
      screen: Saturday
    },
});

const SpeakersStack = createStackNavigator(
    {
    Speakers: {
      screen: SpeakersScreen,
    },
    SpeakersDetail: {
      screen: SpeakersDetail,
    },
});

const AboutStack = createStackNavigator({
    About: {
        screen: AboutScreen
    },
});

const MapStack = createStackNavigator({
    Map: {
        screen: Map
    },
});

export default createBottomTabNavigator(
  {
    Schedule: { 
        screen: ScheduleStack,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="calendar"
                    color={tintColor}
                    size={24}
                />
            )
        })
    }, 
    Speakers: { 
        screen: SpeakersStack,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="users"
                    color={tintColor}
                    size={24}
                />
            )
        })
     },
    About: { 
        screen: AboutStack,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="info"
                    color={tintColor}
                    size={24}
                />
            )
        }) 
    },
    Map: { 
        screen: MapStack,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="map"
                    color={tintColor}
                    size={24}
                />
            )
        }) 
    },
  },
  {
    // navigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let iconName;
    //     if (routeName === 'Schedule') {
    //       iconName = `ios-today${focused ? '' : '-outline'}`;
    //     } else if (routeName === 'Speakers') {
    //           iconName = `ios-contacts${focused ? '' : '-outline'}`;
    //     } else if (routeName === 'About') {
    //       iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //     }

    //     // You can return any component that you like here! We usually use an
    //     // icon component from react-native-vector-icons
    //     return <Ionicons name={iconName} size={25} color={tintColor} />;
    //   },
    // }),
    tabBarOptions: {
      showLabel: true,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#586589',
        style: {
            backgroundColor: '#171F33'
        },
        tabStyle: {}
    }
  }
);