import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/FontAwesome';

class ScheduleScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        < Button
        title = "Go to Speakers"
        onPress = {
            () => this.props.navigation.navigate('Speakers')
        }
        />
        < Button
        title = "Go to About"
        onPress = {
            () => this.props.navigation.navigate('About')
        }
        />
      </View>
    );
  }
}

class SpeakersScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Speakers Screen</Text>
        < Button
        title = "Go to Schedule"
        onPress = {
            () => this.props.navigation.navigate('Schedule')
        }
        />
        < Button
        title = "Go to About"
        onPress = {
            () => this.props.navigation.navigate('About')
        }
        />
      </View>
    );
  }
}

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        < Button
        title = "Go to Schedule"
        onPress = {
            () => this.props.navigation.navigate('Schedule')
        }
        />
        < Button
        title = "Go to Speakers"
        onPress = {
            () => this.props.navigation.navigate('Speakers')
        }
        />
      </View>
    );
  }
}

const ScheduleStack = createStackNavigator({
    Schedule: {
        screen: ScheduleScreen
    },
});

const SpeakersStack = createStackNavigator({
    Speakers: {
        screen: SpeakersScreen
    },
});

const AboutStack = createStackNavigator({
    About: {
        screen: AboutScreen
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
  });