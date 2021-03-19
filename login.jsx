import React, { Component,useState,useEffect } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,ImageBackground,Image,Text,Animated,Easing} from 'react-native';
import Navigation from './navigation';
import styles from './loginStyle';

const Login=({navigation})=>{
    const [username, setusername] = useState(null);
 const [password, setpassword] = useState(null);
const[spinAnim, setSpin]=useState(new Animated.Value(0));
const spin=spinAnim.interpolate({
  inputRange: [0, 1],
  outputRange: ["0deg", "360deg"],
});
useEffect(() => {
  Animated.loop(
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();
});
    return (
      
      <View style={styles.container}>
         <Image style={styles.image3} source={require("./f.png")}></Image>
         <Image style={styles.image4} source={require("./t.png")}></Image>
         <Image style={styles.image5} source={require("./g.png")}></Image>
             <Text style={styles.description}>
          CAFE WIFI
        </Text>
        
           <ImageBackground style={styles.backgroundImage} source={require("./b.jpg")}>
           </ImageBackground>
           <Animated.Image
           source={require("./smile.png")}
             style={styles.image}
             style={{height:80, width:80 , transform:[{rotate:spin}] }}
             />
          
        <TextInput
       value={username}
          onChangeText={(username) =>{
            setusername( username )}
            }
          placeholder={'Username'}
          style={styles.input}
        />

        {username===""? (<Text>UserName Can't be empty!</Text>):null}
        
        <TextInput
          value={password}
          onChangeText={(password) =>setpassword( password )}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
     
{password===""? (<Text>password can't be empty!</Text>):null}
       
       
        <Button
          title={'Login'}
          style={styles.input}
          onPress={()=>{
            if(username!='' && username!= null &&password!='' && password!=null){
              navigation.navigate('Navigation')}
            }
        }
          />
        </View>
    );
}


  export default Login;