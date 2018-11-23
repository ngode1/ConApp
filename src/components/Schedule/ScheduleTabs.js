import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Text, Badge } from 'native-base';
import Friday from './Schedule';
import Saturday from './Saturday';
import Sunday from './Sunday';

export default class TabsAdvancedExample extends Component {
  static navigationOptions = {
    title: 'Schedule',
  };
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={ 
          <TabHeading>
            <Text> 
              Friday 
            </Text>
            </TabHeading>
          }>
            <Friday />
          </Tab>
          <Tab heading={ <TabHeading><Text>Saturday</Text></TabHeading>}>
            <Saturday />
          </Tab>
          <Tab heading={ <TabHeading><Text>Sunday</Text></TabHeading>}>
            <Sunday />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}