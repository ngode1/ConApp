import React from "react";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from "@expo/vector-icons/FontAwesome";
import AboutScreen from "../components/About/About";
import SpeakersScreen from "../components/Speakers/Speakers";
import SpeakersDetail from "../components/Speakers/SpeakersDetail";
import ScheduleTabs from "../components/Schedule/ScheduleTabs";
import ScheduleDetail from "../components/Schedule/ScheduleDetail";
// import TabsNative from '../components/Schedule/TabsNative';
// import Calendar from '../components/Calendar/app';
import MapTabs from "../components/Map/MapTabs";
import Events from "../components/Events/Events";

const ScheduleStack = createStackNavigator( {
  Tabs: {
    screen: ScheduleTabs
  },
  ScheduleDetail: {
    screen: ScheduleDetail
  }
} );

const SpeakersStack = createStackNavigator( {
  Speakers: {
    screen: SpeakersScreen
  },
  SpeakerDetail: {
    screen: SpeakersDetail
  }
} );

const MapStack = createStackNavigator( {
  Map: {
    screen: MapTabs
  }
} );

const AboutStack = createStackNavigator( {
  About: {
    screen: AboutScreen
  }
} );

const EventStack = createStackNavigator( {
  Events: {
    screen: Events
  }
} );

export default createAppContainer( createBottomTabNavigator(
  {
    Schedule: {
      screen: ScheduleStack,
      navigationOptions: () => ( {
        tabBarIcon: ( { tintColor } ) => (
          <Icon name="calendar" color={ tintColor } size={ 24 } />
        )
      } )
    },
    Speakers: {
      screen: SpeakersStack,
      navigationOptions: () => ( {
        tabBarIcon: ( { tintColor } ) => (
          <Icon name="users" color={ tintColor } size={ 24 } />
        )
      } )
    },
    Maps: {
      screen: MapStack,
      navigationOptions: () => ( {
        tabBarIcon: ( { tintColor } ) => (
          <Icon name="map" color={ tintColor } size={ 24 } />
        )
      } )
    },
    Events: {
      screen: EventStack,
      navigationOptions: () => ( {
        tabBarIcon: ( { tintColor } ) => (
          <Icon name="glass" color={ tintColor } size={ 24 } />
        )
      } )
    },
    About: {
      screen: AboutStack,
      navigationOptions: () => ( {
        tabBarIcon: ( { tintColor } ) => (
          <Icon name="info" color={ tintColor } size={ 24 } />
        )
      } )
    }
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
      activeTintColor: "#F8F8F8",
      inactiveTintColor: "#586589",
      style: {
        backgroundColor: "#171F33"
      },
      tabStyle: {}
    }
  }
) );
