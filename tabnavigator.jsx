import React from "react";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator,ProfileStackNavigator} from "./Stacknavigator";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={MainStackNavigator} />
      <Tab.Screen name="Settings" component={ContactStackNavigator} />
      <Tab.Screen name="Profile"  component={ProfileStackNavigator}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;