import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './routes/home';
import Detail from './routes/weatherDetail';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
class App extends React.Component{
  render(){
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
export default App;
