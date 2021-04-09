import React, { useContext,useState } from 'react';
import Data from "./FoodData";
import styles from "./FoodStyles";
import { Ionicons as Icon } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView,StatusBar,AppRegistry, Button, TextInput, View, StyleSheet,ImageBackground,Image,Text,TouchableOpacity,ImageData,Animated} from 'react-native';

const Footerr=()=>{
    return (
    <View style={{flex:1,backgroundColor:'white'}}>
           <Text style={styles.SimilarText}>
             Similar Products
           </Text>
    <View style={{height:130,marginTop:1}}>
      <ScrollView
      horizontal={true}
      >
        <View style={{height:100,Weidht:100,marginLeft:-5,borderWidth:0.3,borderColor:'white'}}>
          <View style={{flex:6}}>
         
         <Image source={Data.Image2}
         style={{flex:3,width:180,height:150,resizeMode:'cover',paddingTop:10}}
         />
         </View>
         
          <View style={{flex:0.5,paddingLeft:10,fontWeight:"bold"}}>
<Text>{Data.Name1}</Text>
          </View>
        </View>
        <View style={{height:100,Weidht:100,marginLeft:-5,borderWidth:0.3,borderColor:'white',left:10}}>
          <View style={{flex:6}}>
          <AntDesign style={{left:140,top:3}} name="hearto" size={24} color="grey" />
         <Image source={Data.Image3}
         style={{flex:2,width:180,height:100,resizeMode:'center',paddingTop:0}}
         />
         
         </View>
         
          <View style={{flex:0.5,paddingLeft:10,fontWeight:"bold"}}>
<Text>{Data.Name2}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
         </View>
         )
}
export default Footerr;