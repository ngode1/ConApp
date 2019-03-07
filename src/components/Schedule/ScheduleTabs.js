import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Text, Button } from 'native-base';
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
              FRI 17
            </Text>
            </TabHeading>
          }>
            <Friday />
          </Tab>
          <Tab heading={ <TabHeading><Text>SAT 18</Text></TabHeading>}>
            <Saturday />
          </Tab>
          <Tab heading={ <TabHeading><Text>SUN 19</Text></TabHeading>}>
            <Sunday />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}