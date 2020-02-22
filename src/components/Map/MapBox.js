import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoibmdvZGUiLCJhIjoiY2pvZWxpcHU3MDE3OTNsdG16dHk3ZHp5eSJ9.fRZN1tFbYrx9WZt1BCvujg');

export default class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={15}
            centerCoordinate={[-84.388, 33.761]}
            style={styles.container}>
        </Mapbox.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from "react";
import { View } from "react-native";
import MapboxGL from "@mapbox/react-native-mapbox-gl";
/* Use your own custom image and bundle it with your project's assets */
import customMarker from "../../../assets/custom_marker.png";

MapboxGL.setAccessToken("pk.eyJ1IjoibmdvZGUiLCJhIjoiY2pvZWwyZXRqMTl1dTNqcXUwbjVwdjE1bSJ9.PufLaA1CQx2M6oWNMrWNUQ");

class Markers extends React.Component {
  get markers () {
    /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
    return {
      type: "FeatureCollection",
      features:[{"type":"Feature","geometry":{"type":"Point","coordinates":[-78.47888798436543,37.219382192683824]}}]};
  }

  /* Map: This represents the map in your application. */
  /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
  /* Image: An image is loaded and added to the map. */
  render () {
    return (
      <View style={{ flex: 1 }}>
        <MapboxGL.MapView zoomLevel={5} centerCoordinate={[-77.039679,38.897435]} style={{ flex: 1 }} styleURL="mapbox://styles/mapbox/light-v9">
            <MapboxGL.ShapeSource id="marker-source" shape={this.markers}>
              <MapboxGL.SymbolLayer id="marker-style-layer" style={{ iconImage: customMarker }} />
            </MapboxGL.ShapeSource>
        </MapboxGL.MapView>
      </View>
    );
  }
}

export default Markers;
