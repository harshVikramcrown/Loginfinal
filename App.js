import { StatusBar } from "expo-status-bar";
import React, { Component,useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,ImageBackground,Image,Text} from 'react-native';
import BottomTabNavigator from './tabnavigator';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
	return (
	  <NavigationContainer >
		<BottomTabNavigator/>
	  </NavigationContainer>
	);
  }
  export default App

