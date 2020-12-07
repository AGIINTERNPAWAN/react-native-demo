import React, { Component } from 'react';
// import Cloud from '../assets/cloudy.png';
// import WeatherDetail from './weatherDetail';
import { Container, Item, Input, Button, Text, Card, Content, Header, Body, CardItem } from 'native-base';
import {NavigationContainer,} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation/stack';

// const data ={
//     labels: ['jan', 'feb', 'mar'],
//     datasets: [
//         {
//             label: 'Weather (M)',
//             data: [3,4,5,6,2,5]
//         }
//     ]
// }
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
            <CardItem button onPress={()=> alert('hello')}>
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
// class Detail extends React.Component {
//   render(){
//       return (
//           <View>
//               <Text>This is weather detail page.</Text>
//           </View>
//       )
//   }
// }

// const AppNavigator = createStackNavigator({
//   HomeScreen: Home,
//   WeatherDetail: Detail
// },
// {
//   initialRouteName: 'HomeScreen'
// }
// );
// const AppContainer = createAppContainer(AppNavigator);  
// <div className='chart'>
// <Line data={data} style={{width:'200px'}}/>
// </div>
// <Card>
//                <Image source={{uri:'../assets/cloudy.png'}} style={{height: 200, width: null, flex: 1}}/>
         
//                 <Title>Card title</Title>
//                 <Paragraph>Card content</Paragraph>
    
//             </Card>