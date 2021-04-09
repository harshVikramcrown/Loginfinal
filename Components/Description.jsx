import React, { useEffect,useCallback,useState } from 'react';
import Data from "./FoodData";
import styles from "./FoodStyles";
import { Ionicons as Icon } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 
import { StatusBar,AppRegistry, Button, TextInput, View, StyleSheet,ImageBackground,Image,Text,TouchableOpacity,ImageData,Animated} from 'react-native';
import ReadMore from 'react-native-read-more-text';

const Description=()=>{
  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{color: '#9acd32'}} onPress={handlePress}>
         View more
      </Text>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ReadMore
          numberOfLines={2}
          renderTruncatedFooter={this._renderTruncatedFooter}
        >
         Evereybody enjoys indulging in juicy red cherries during
          the summer season.
          This vibrant red fruits is a great blend of sweet
           flavours with a tingle of sourness and add the ..
          </ReadMore>
      </View>
    </View>
  );
};

export default Description;