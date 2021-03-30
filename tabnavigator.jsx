import React from "react";
import { AppRegistry, Button, TextInput, View, StyleSheet,ImageBackground,Image,Text} from 'react-native';
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator,ProfileStackNavigator} from "./Stacknavigator";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
     
  return (
    <Tab.Navigator  activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' }} >
      <Tab.Screen name="Login"  component={MainStackNavigator} />
      <Tab.Screen name="Settings" component={ContactStackNavigator} />
      <Tab.Screen name="Profile"  component={ProfileStackNavigator}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;