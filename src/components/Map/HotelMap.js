import React, { Component } from "React";
import { View, Image } from "react-native";

export default class HotelMap extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          style={{ marginLeft: 70 }}
          source={require("../../../assets/hotelmap.png")}
        />
      </View>
    );
  }
}
