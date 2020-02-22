import React, { Component } from "react";
import
{
  AppRegistry,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import MapView, { Marker } from "react-native-maps";

const Images = [
  { uri: "https://i.imgur.com/N7rlQYt.jpg" },
  { uri: "https://i.imgur.com/UDrH0wm.jpg" },
  { uri: "http://www.vector-logo.net/logo_preview/eps/r/Ruby_Tuesday_2.png" },
  { uri: "https://i.imgur.com/Ka8kNST.jpg" },
  { uri: "https://cptdb.ca/wiki/images/4/46/Metropolitan_Atlanta_Rapid_Transit_Authority.png" }
]

const { width, height } = Dimensions.get( "window" );

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class screens extends Component
{
  state = {
    markers: [
      {
        coordinate: {
          latitude: 33.6263,
          longitude: -84.4605,
        },
        title: "Bentley Steak House",
        description: "Located in the Marriot",
        image: Images[ 0 ],
      },
      {
        coordinate: {
          latitude: 33.6270,
          longitude: -84.4578,
        },
        title: "Southern Table",
        description: "Located in the Westin",
        image: Images[ 1 ],
      },
      {
        coordinate: {
          latitude: 33.6263,
          longitude: -84.4531,
        },
        title: "Ruby Tuesday",
        description: "American Restaurant",
        image: Images[ 2 ],
      },
      {
        coordinate: {
          latitude: 33.6232,
          longitude: -84.4739,
        },
        title: "Waffle House",
        description: "Best late night food",
        image: Images[ 3 ],
      },
      {
        coordinate: {
          latitude: 33.6153,
          longitude: -84.4749,
        },
        title: "National Mall",
        description: "Food Court!",
        image: Images[ 3 ],
      },
      {
        coordinate: {
          latitude: 33.6407,
          longitude: -84.4462,
        },
        title: "MARTA - Airport Station",
        description: "Just inside the Domestic Terminal",
        image: Images[ 4 ],
      }
    ],
    region: {
      latitude: 33.6263,
      longitude: -84.4605,
      latitudeDelta: 0.006866,
      longitudeDelta: 0.004757
      // latitudeDelta: 0.04864195044303443,
      // longitudeDelta: 0.040142817690068
    },
  };

  componentWillMount ()
  {
    this.index = 0;
    this.animation = new Animated.Value( 0 );
  }
  componentDidMount ()
  {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener( ( { value } ) =>
    {
      let index = Math.floor( value / CARD_WIDTH + 0.3 ); // animate 30% away from landing on the next item
      if ( index >= this.state.markers.length )
      {
        index = this.state.markers.length - 1;
      }
      if ( index <= 0 )
      {
        index = 0;
      }

      clearTimeout( this.regionTimeout );
      this.regionTimeout = setTimeout( () =>
      {
        if ( this.index !== index )
        {
          this.index = index;
          const { coordinate } = this.state.markers[ index ];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10 );
    } );
  }

  render ()
  {
    const interpolations = this.state.markers.map( ( marker, index ) =>
    {
      const inputRange = [
        ( index - 1 ) * CARD_WIDTH,
        index * CARD_WIDTH,
        ( ( index + 1 ) * CARD_WIDTH ),
      ];
      const scale = this.animation.interpolate( {
        inputRange,
        outputRange: [ 1, 2.5, 1 ],
        extrapolate: "clamp",
      } );
      const opacity = this.animation.interpolate( {
        inputRange,
        outputRange: [ 0.35, 1, 0.35 ],
        extrapolate: "clamp",
      } );
      return { scale, opacity };
    } );

    return (
      <SafeAreaView style={ styles.container }>
        <MapView
          ref={ map => this.map = map }
          initialRegion={ this.state.region }
          style={ styles.container }
          showsUserLocation
          showsMyLocationButton
        >
          { this.state.markers.map( ( marker, index ) =>
          {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[ index ].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[ index ].opacity,
            };
            return (
              <Marker key={ index } coordinate={ marker.coordinate }>
                <Animated.View style={ [ styles.markerWrap, opacityStyle ] }>
                  <Animated.View style={ [ styles.ring, scaleStyle ] } />
                  <View style={ styles.marker } />
                </Animated.View>
              </Marker>
            );
          } ) }
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={ 1 }
          showsHorizontalScrollIndicator={ false }
          snapToInterval={ CARD_WIDTH }
          onScroll={ Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          ) }
          style={ styles.scrollView }
          contentContainerStyle={ styles.endPadding }
        >
          { this.state.markers.map( ( marker, index ) => (
            <View style={ styles.card } key={ index }>
              <Image
                source={ marker.image }
                style={ styles.cardImage }
                resizeMode="cover"
              />
              <View style={ styles.textContent }>
                <Text numberOfLines={ 1 } style={ styles.cardtitle }>{ marker.title }</Text>
                <Text numberOfLines={ 1 } style={ styles.cardDescription }>
                  { marker.description }
                </Text>
              </View>
            </View>
          ) ) }
        </Animated.ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
    position: "absolute",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    // position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
} );

AppRegistry.registerComponent( "mapfocus", () => screens );