import React, { Component } from "react";
import { Container, Content, Accordion } from "native-base";
const dataArray = [
  { title: "Hotel", content: "Lorem ipsum dolor sit amet" },
  { title: "MARTA", content: "Lorem ipsum dolor sit amet" },
  { title: "Driving Directions", content: "Lorem ipsum dolor sit amet" },
  { title: "Food Truck Information", content: "Lorem ipsum dolor sit amet" },
  { title: "About", content: "Lorem ipsum dolor sit amet" }
];
export default class Info extends Component
{
  render ()
  {
    return (
      <Container>
        <Content padder>
          <Accordion dataArray={ dataArray } icon="add" expandedIcon="remove" />
        </Content>
      </Container>
    );
  }
}