import React, { Component } from "react";
import { Image } from "react-native";
import
{
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
export default class TPPCard extends Component
{
  render ()
  {
    return (
      <Container>
        <Content>
          <Card style={ { flex: 0 } }>
            <CardItem>
              <Left>
                <Thumbnail source={ require( "../../../assets/threepatch.jpg" ) } />
                <Body>
                  <Text>The Three Patch Podcast</Text>
                  <Text note>Greatest Sherlock Podcast.</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Come party with us in our Con Suite! The suite is open for
                  hanging out, knitting, writing, playing CAH, and so on. If you
                  need a place to chill, come say hi! { "\n" }(2017) Room Hours:{ " " }
                  { "\n" }
                  Friday: 3 pm - 2 am
                  { "\n" }Saturday: 11 am - 2 am { "\n" }Sunday: 12 pm - Midnight
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Text>
                { "\n" }Room Hours
                { "\n" }{ " " }
              </Text>
              <Left>
                <Button transparent textStyle={ { color: "#87838B" } }>
                  {/* <Icon name="logo-github" /> */ }
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
