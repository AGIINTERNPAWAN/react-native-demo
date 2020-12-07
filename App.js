import React from 'react';
// import {Appbar, AppBar} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import Home from './routes/home';
import WeatherDetail from './routes/home';
import {NavigationContainer,} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation/stack';
const AppNavigator = createStackNavigator();
class App extends React.Component{
  render(){
    return (
      <NavigationContainer>
        <AppNavigator.Navigator initialRouteName="Home">
          <AppNavigator.Screen name="Home" component={Home}/>
          <AppNavigator.Screen name="Detail" component={WeatherDetail}/>
        </AppNavigator.Navigator>
      </NavigationContainer>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default App;
