import React, {useState} from 'react';
import ThemeContext from './ThemeContext'
import {FlatList,View,StyleSheet,Text,ImageBackground} from 'react-native';
//import Header from "./Header";
import ThemeToggler from "./ThemeToggler";
//import Footer from "./Footer";

export default function themesc(){
    const themed = useState("light");

    return(
        <ThemeContext.Provider value ={themed}>
           
            <ThemeToggler/>
            
           </ThemeContext.Provider>
    );
}