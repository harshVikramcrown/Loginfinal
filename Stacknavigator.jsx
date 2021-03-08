import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Login from "./login.jsx";
import Navigation from "./navigation";
import Settings from './Home';
const MainStackNavigator = () => {
    return (
 
         <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Navigation" component={Navigation} />
        </Stack.Navigator>
);
}
const ContactStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
  }
  export { MainStackNavigator, ContactStackNavigator };