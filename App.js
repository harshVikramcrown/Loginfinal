import { StatusBar } from "expo-status-bar";
import React, { Component,useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,ImageBackground,Image,Text} from 'react-native';
//import  Home from "./Home.jsx";
//import Settings from "./Settings.jsx";
import BottomTabNavigator from './tabnavigator';

// import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

//const RootStack = createStackNavigator();
const App = () => {
	return (
	  <NavigationContainer>
		<BottomTabNavigator/>
	  </NavigationContainer>
	);
  }
  export default App
/*const Tab = createBottomTabNavigator();
function MyTabs() {
	return (
		<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Settings" component={Settings} />
		</Tab.Navigator>
	);
}

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="MyTabs">
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Navigation" component={Navigation} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}*/

 /* export default function App(){
    
return (
  <NavigationContainer>
         <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Login" component={Login}/>
            <RootStack.Screen name="Navigation" component={Navigation} />
        
        
      </RootStack.Navigator>
      <TabNavigator/>
        </NavigationContainer>
);
}*/

