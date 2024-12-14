import React, { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const validatePassword = (password) => {
        return password.length >=6;
    }

    const handleLogin = () =>{
        if(!validateEmail(email)) {
            Alert.alert('Please enter a valid email address');
            return;
        }
        if(!validatePassword(password)){
            Alert.alert('Please must be at least 6 characters');
            return;
        }
        navigation.navigate('Dashboard')
    }

    const isButtonDisabled = !(email.trim() && password.trim());
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assests/SplashImage.png')} />
            </View>
            <Text style={styles.title}>Travel Buddy Login</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email Address"
                    value={email}
                    onChangeText={setEmail} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Pressable style={[styles.buttonContainer,{backgroundColor:isButtonDisabled? '#ccc' :'#235786'}]}
                disabled={isButtonDisabled}
                onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: '#235786',
        fontWeight: '500'
    },
    input: {
        width: '90%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#235786',
        marginBottom: 25,
        borderRadius: 10,
        paddingLeft: 10,
        elevation: 2,
        backgroundColor: '#fff'
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: '10%'
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '25%'
    },
    buttonContainer: {
        borderWidth: 0.5,
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#235786'
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500'
    }
})