import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from "native-base";
export default class HLNCard extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={require("../../../assets/HLN.jpg")} />
                <Body>
                  <Text>Homeless Network (Room #1640)</Text>
                  <Text note>Room #1640 (Un)Offical Con Suite </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  We are a network dedicated to helping out our fellow 221B Con
                  goers. Here you will find lost and found, missed connections,
                  cosplayer who’s who, and so much more. Need a ride somewhere?
                  Let us help you spread the word. Want to know who drew that
                  piece of fan art? We can help you find out. We are not
                  officially associated with 221B Con. {"\n"}
                  {"\n"}Room Hours {"\n"}Friday: 4 PM - 8 PM {"\n"}
                  Saturday: 10 AM - 2 PM ; 4 PM - 6 PM {"\n"}Sunday:10 AM - 3 PM{" "}
                  {"\n"}
                  {"\n"}Games and Prizes: {"\n"}• Pin the Mustache on John and
                  Bingo is back this year. {"\n"}• The Harry Potter Common room
                  is also making a return. {"\n"}• Can you guess how many DND
                  dice are in the jar? If you can then you can take the jar
                  home! {"\n"}• Add your fav trope to our Trope-ical Islands!{" "}
                  {"\n"}• We’ll have coloring books, dominos, and playing cards.
                  {"\n"}• Don’t forget about our Door Decorating Contest! Come
                  by the suite for rules and to sign up.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  {/* <Icon name="logo-github" /> */}
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
