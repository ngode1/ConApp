import React, { Component } from "react";
import { Container, Icon, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import HLNCard from "./EventCardHLN";
import TPPCard from "./EventCardTPP";

export default class Events extends Component
{
  render ()
  {
    return (
      <Container>
        <HLNCard />
        <View
          style={ {
            borderBottomColor: 'black',
            borderBottomWidth: 2,
          } }
        />
        <TPPCard />
      </Container>
    );
  }
}
