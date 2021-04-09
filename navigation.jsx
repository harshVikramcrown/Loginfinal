import React, { useContext,useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { StatusBar,AppRegistry, Button, TextInput, View, StyleSheet,ImageBackground,Image,Text,TouchableOpacity,ImageData,Animated} from 'react-native';
import { Ionicons as Icon } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import Data from "./Components/FoodData";
import styles from "./Components/FoodStyles";
import Head from "./Components/Icons.jsx";
import Description from './Components/Description.jsx';
import Footerr from './Components/Footerr';

const Navigation=({navigation})=>{
// const Nav= useNavigation();
 //const [selectedValue, setSelectedValue] = useState("Menu");
return(

  <View style={{flex:1}}>
  <View style={{flex:0.5,justifyContent: "center",alignContent: "center",}}>
   <View style={styles.MainContainer}>
  <Image source={Data.Image1} style={{resizeMode:'center',bottom:40,}}/>
      </View>
      <View style={styles.dotView}>
          <Animated.View style={styles.line}/>
          <Animated.View style={styles.dot} />
          <Animated.View style={styles.dot} />
          <Animated.View style={styles.dot} />
        </View>
      </View>
  <View style={styles.Head}>
    <Text style={styles.Title}>{Data.Title}</Text>
    <View style={{lexDirection: "row",}}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.MainPrice}>{Data.MainPrice}</Text>
        <Text style={styles.Price}>{Data.Price}</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnContainer}>{Data.Button1}</Text>
      </TouchableOpacity>
    </View>

    <Head/>
   
    <Description/>

    
    
    <View style={styles.cont}>
    <Icon name="heart" size={42} color="#fd2d59" />
          <TouchableOpacity style={styles.cartBtn}>
            <Text style={styles.cartText}>{Data.Cart}</Text>
          </TouchableOpacity>
    </View>
         
         
         <Footerr/>
    
    
    
    <View>
    <TouchableOpacity style={styles.checkOut}>               
            <Text style={styles.chkoutleft}>{Data.Price3}</Text>
            <Text style={styles.chkoutText}>{Data.Out}</Text>
            <AntDesign style={{top:6,left:15}} name="arrowright" size={24}  color="white" />
          </TouchableOpacity>
    </View>
  </View>
</View>
);
};
    
export default Navigation;