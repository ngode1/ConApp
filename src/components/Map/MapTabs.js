import React, { Component } from "react";
import { Container, Tab, Tabs, TabHeading, Text } from "native-base";
import FoodMap from "./React-Maps";
import HotelMap from "./HotelMap";

export default class TabsAdvancedExample extends Component {
  static navigationOptions = {
    title: "Maps"
  };
  render() {
    return (
      <Container>
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Text>Hotel</Text>
              </TabHeading>
            }
          >
            <HotelMap />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Food</Text>
              </TabHeading>
            }
          >
            <FoodMap />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
