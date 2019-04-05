import React, { Component } from "react";
import { Container, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import HLNCard from "./EventCardHLN";
import TPPCard from "./EventCardTPP";

export default class Events extends Component {
  render() {
    return (
      <Container>
        <HLNCard />
        <TPPCard />
      </Container>
    );
  }
}
