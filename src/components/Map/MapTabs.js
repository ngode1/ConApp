import React, { Component } from "react";
import { Container, Tab, Tabs, TabHeading, Text } from "native-base";
import FoodMap from "./React-Maps";
import HotelMap from "./HotelMap";
import SlideMap from './CodeDailyMap';

export default class TabsAdvancedExample extends Component
{
  static navigationOptions = {
    title: "Maps"
  };
  render ()
  {
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
                <Text>Map</Text>
              </TabHeading>
            }
          >
            <FoodMap />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>ZOOM!</Text>
              </TabHeading>
            }
          >
            <SlideMap />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
