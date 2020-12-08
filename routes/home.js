import React, { Component } from 'react';
import { Container, Item, Input, Button, Text, Card, Content, Header, Body, CardItem } from 'native-base';
export default class Home extends Component {
  render() {
    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Input placeholder="Search Location" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
            <Content>
          <Card>
            <CardItem button onPress={()=>this.props.navigation.navigate('Detail')}>
              <Body style={{textAlign:'center'}}>
                <Text style={{fontSize:200}}>30</Text>
                <Text>Hetauda,Nepal</Text>
                <Text>Partial Cloudy</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        </Container>

    );
  }
}