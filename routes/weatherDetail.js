import React from 'react';
import {StyleSheet} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Item, Input, Button, Text, Card, Content, Header, Body, CardItem } from 'native-base';

export default class Detail extends React.Component {
    render(){
        return (
            <Container>
            <Content>
            <Grid>
    <Row size={50}>
    <Col><Card >
    <CardItem>
      <Body>
        <Text>30%kldsfalkfks</Text>
      </Body>
    </CardItem>
  </Card>
  <Card >
    <CardItem>
      <Body>
        <Text>30%kldsfalkfks</Text>
      </Body>
    </CardItem>
  </Card></Col>
    <Col><Card >
    <CardItem>
      <Body>
        <Text>30%kldsfalkfks</Text>
      </Body>
    </CardItem>
  </Card>
  <Card >
    <CardItem>
      <Body>
        <Text>30%kldsfalkfks</Text>
      </Body>
    </CardItem>
  </Card></Col>
    </Row>
            <Text>Tomorrow Looks Like Sunny </Text>
            <Row>
            <Col><Text>Weather</Text><Text>14*</Text></Col>
                <Col><Text>Chance of rain</Text><Text>Humadity</Text></Col>
                </Row> 
            <Text>Next 7 Days Weather</Text>  
                <Card >
                    <CardItem>
                        <Body>
                            <Row>
                                <Text>Sunday</Text>
                                <Text>Rainy</Text>
                                <Text>12</Text>
                            </Row>
                            <Row>
                                <Text>Monday</Text>
                                <Text>Rainy</Text>
                                <Text>12</Text>
                            </Row>
                            <Row>
                                <Text>Tuesday</Text>
                                <Text>Rainy</Text>
                                <Text>12</Text>
                            </Row>
                            <Row>
                                <Text>Wednesday</Text>
                                <Text>Rainy</Text>
                                <Text>12</Text>
                            </Row>
                            <Row>
                                <Text>Thursday</Text>
                                <Text>Rainy</Text>
                                <Text>12</Text>
                            </Row>
                            <Row>
                                <Text>Friday</Text>
                                <Text>Rainy</Text>
                                <Text>12</Text>
                            </Row>
                            <Row>
                                <Text>Saturday</Text>
                                <Text>Rainy</Text>
                                <Text>12</Text>
                            </Row>
                        </Body>
                    </CardItem>
                </Card>
        </Grid>  
        </Content>
        </Container>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        width: '50%',
        padding: 5
    }
})