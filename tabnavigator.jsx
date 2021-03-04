import React from 'react';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import  Home from "./Home.jsx";
import Create from "./Create.jsx";
import Profile from "./Profile.jsx";

const Tab = createBottomTabNavigator()
const TabNavigator=()=>{
    return (
<Tab.Navigator>
    <Tab.screen name='Home' components={Home}/>
    <Tab.screen name='Create' components={Create}/>
    <Tab.screen name='Profile' components={Profile}/>
</Tab.Navigator>   
    )
}
export default TabNavigator;