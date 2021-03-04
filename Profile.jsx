import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const Profile=()=>{
    return (
 <View style={styles.constainer}>
     <Text style={styles.text}>Profile</Text>
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
export default Profile;