import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default class App extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 33.6266194,
          longitude: -84.4631616,
          // latitudeDelta: 0.006866,
          // longitudeDelta: 0.004757
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
        ShowsMyLocationButton={true}
      >
        <Marker
          coordinate={{
            latitude: 33.627,
            longitude: -84.4578
          }}
          title={"Southern Table"}
          description={"Located in the Westin"}
        />
        <Marker
          coordinate={{
            latitude: 33.6263,
            longitude: -84.4605
          }}
          title={"Bentley Steak House"}
          description={"Located in the Marriot"}
          pinColor={"black"}
        />
        <Marker
          coordinate={{
            latitude: 33.6232,
            longitude: -84.4738
          }}
          title={"Waffle House"}
          description={"1 mile away"}
          pinColor={"yellow"}
        />
        <Marker
          coordinate={{
            latitude: 33.6159,
            longitude: -84.4764
          }}
          title={"McDonalds"}
          description={"The Golden Arches smile upon you benevolently"}
          image={require("../../../assets/arches2.png")}
        />
      </MapView>
    );
  }
}

//Waffle House: @33.6260072,-84.469674 / 33.6232, -84.4738
//McDonalds's: @33.6230686,-84.4739085
//Old National Village Discount Mall: @33.6230686,-84.4739085 / 33.6153, -84.4749
//Ruby Tuesday: @33.621031,-84.4751101
