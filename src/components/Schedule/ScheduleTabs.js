import React, { Component } from "react";
import
{
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Text,
  Button
} from "native-base";
import Friday from "./Friday";
import Day from "./Day";
import Friday1 from "./Friday1";
import Saturday from "./Saturday2";
import Sunday from "./Sunday";

export default class TabsAdvancedExample extends Component
{
  static navigationOptions = {
    title: "Schedule",
    headerStyle: {
      backgroundColor: "#ebebdd"  //'#ede2b4',
    },
    // headerTintColor: '#ffffff',
  };
  render ()
  {
    return (
      <Container>
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Text>FRI 17</Text>
              </TabHeading>
            }
          >
            <Friday1 />
            {/* <Day day="friday" /> */ }
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>SAT 18</Text>
              </TabHeading>
            }
          >
            <Saturday />
            {/* <Day day="saturday" /> */ }
          </Tab>

          <Tab
            heading={
              <TabHeading>
                <Text>SUN 19</Text>
              </TabHeading>
            }
          >
            <Sunday />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
