import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const Home=()=>{
    return (
 <View style={styles.container}>
     <Text style={styles.text}>Hello</Text>
 </View>
    )
}
const styles = StyleSheet.create({
    container:{
flex:1,
alignItems:'center',
justifyContent:'center',
backgroundColor:'red',
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
    }
})
export default Home;
