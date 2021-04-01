import React, {useContext} from 'react';
import {View,Text,Switch} from "react-native";
import ThemeContext from "./ThemeContext";
import AppTheme from "./Theme";

const ThemeToggler=()=>{
    const[themeMode, setThemeMode]=useContext(ThemeContext);

    return(
        <View style={AppTheme[themeMode+"Container"]}>
                
            <Text style={{fontSize:70}}>
            {themeMode === "light" ? "🌚" : "🌝"}
            </Text>

            <Switch
            style={{transform:[{ scaleX:1.5},{scaleY:1.5}] }} //switch style
            value={themeMode === "light" ? false:true}
            onValueChange={() =>setThemeMode(themeMode==="light" ? "dark" : "light")}
       />
            </View>
    );
    }
    export default ThemeToggler;