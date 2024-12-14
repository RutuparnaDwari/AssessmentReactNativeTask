import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";


const SplashScreen = ({ navigation }) => {
    useEffect(() =>{
        const timer = setTimeout(()=>{
            navigation.replace('Login');
        },3000);
        return () =>clearTimeout(timer);
    },[navigation])
    return (
        <View style={styles.container}>
         <Image source={require('../assests/SplashImage.png')}
         style={styles.logo}/>
        </View>
    )
}

export default SplashScreen;


const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
},
logo:{
    width:150,
    height:150,
    marginBottom:20
}
})