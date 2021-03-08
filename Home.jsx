import React from 'react';
import {FlatList,View,StyleSheet,Text,ImageBackground} from 'react-native';

const Home=()=>{

    return (
        
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', }}>
     
     
     <ImageBackground style={styles.backgroundImage} source={require("./b.jpg")}>
           </ImageBackground>
           <FlatList style={styles.flat}
           data={[
          {key: 'Edit Profile'},
          {key: 'Payment History'},
          {key: 'Our Plans'},
          {key: 'Notification'},
          {key: 'Refer a Friend'},
          {key: 'Give us Feedback'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}
        </Text>}
        />
      
     </View>
    )
}
const styles = StyleSheet.create({
          backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3,
      },
    flat:{
        flex: 1,
        paddingTop: 22,
       left:0,
       
    },
    item:{
        padding: 10,
        fontSize: 18,
        height: 64,
    }
})
export default Home;
