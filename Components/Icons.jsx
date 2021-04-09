import React, { useContext,useState } from 'react';
import styles from "./FoodStyles";
import { Ionicons as Icon } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 
import { StatusBar,AppRegistry, Button, TextInput, View, StyleSheet,ImageBackground,Image,Text,TouchableOpacity,ImageData,Animated} from 'react-native';
const Head =()=>{
return(
<View style={styles.icons}>
      <View style={styles.icon1}>
        <Icon name="happy-outline" size={24} color={"#9acd32"} />
        <Text style={styles.iconText1}>Safe</Text>
      </View>
      <View style={styles.icons2}>
        <Icon name="duplicate-outline" size={24} color={"#9acd32"} />
        <Text style={styles.iconText2}>Quality</Text>
      </View>
      <View style={styles.icons3}>
        <Icon name="eyedrop-outline" size={24} color={"#9acd32"} />
        <Text style={styles.iconText3}>Fresh</Text>
      </View>
    </View>
)
}
export default Head;
