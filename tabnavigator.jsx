import React from "react";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./Stacknavigator";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={MainStackNavigator} />
      <Tab.Screen name="Settings" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;