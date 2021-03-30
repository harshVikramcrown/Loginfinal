import React, { Component,useState,useEffect } from 'react';
import {  ScrollView,Alert, Button, TextInput, View,StyleSheet,ImageBackground,Image,Text,Easing,StatusBar,SafeAreaView} from 'react-native';
import Navigation from './navigation';
//import styles from './loginStyle';
import { Formik } from 'formik';
import * as yup from 'yup';
import { color } from 'react-native-reanimated';
const Login=({navigation})=>{
  const valid = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid emailID")
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })
    //const [username, setusername] = useState(null);
 //const [password, setpassword] = useState(null);
/*const[spinAnim, setSpin]=useState(new Animated.Value(0));
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
});*/
    return (
      <>
      <ImageBackground style={{ position: 'absolute',top: 0,left: 0,bottom: 0,right: 0,opacity: 0.8,}} source={require("./w1.jpg")}>
           </ImageBackground>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
          <Formik
           validationSchema={valid}
            initialValues={{ email: '', password: '' }}
           
          >
            {({ handleChange, handleBlur, values,errors,isValid }) => (
              <>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
       }
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                 {errors.password &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
       }
                <Button 
                 disabled={!isValid}
                 onPress={()=>{
                    navigation.navigate('Navigation')}
                  }
               title="Login" />
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
  },
  loginContainer: {
    marginTop:370,
    width: '80%',
    alignItems: 'center',
    padding: 10,
    elevation: 10,
    color:'black',
    opacity:0.8,
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'grey',
    borderColor:'black',

    borderRadius: 10,
    color:'black',
  },
})
export default Login;