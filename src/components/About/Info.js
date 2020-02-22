import React, { Component } from "react";
import { Container, Content, Accordion } from "native-base";
const dataArray = [
  { title: "Hotel", content: "Atlanta Airport Marriott, 4711 Best Rd, Atlanta, GA 30337•(404) 766-7900" },
  { title: "MARTA", content: "The Mariott Airport Station is the very last stop on the Gold and Red lines." },
  {
    title: "Shuttle Information",
    content: "Hotel shuttle service is available on the Purple aisle in the Ground Transportation area at the west end of the Domestic Terminal (West curb). The West curb is outside between the Domestic North and Domestic South terminals."
  },
  { title: "Driving Directions", content: "Lorem ipsum dolor sit amet" },
  { title: "Food Truck Information", content: "Lorem ipsum dolor sit amet" },
  { title: "About", content: "Cillum pariatur ex consectetur enim culpa laboris officia nisi. Nulla quis exercitation non amet incididunt nulla mollit pariatur reprehenderit exercitation irure. Non ea exercitation sit velit mollit est amet laboris veniam do. Ut officia ad labore adipisicing tempor Lorem nisi irure tempor mollit ut quis. Et occaecat consectetur ipsum consequat. Aliquip reprehenderit ea minim incididunt anim irure anim nisi nisi laboris anim. Eu commodo minim ad voluptate cillum deserunt ipsum tempor mollit velit reprehenderit exercitation.\r\n" }
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