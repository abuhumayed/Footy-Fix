import React, { useEffect, useState } from 'react';
import {  StyleSheet, View, Image, Text,TouchableOpacity  } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Input} from 'react-native-elements';
import{ StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import RegisterScreen from './RegisterScreen';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';


const LoginScreen = ({navigation}) => {
   const[email, setEmail] = useState('') 
   const[password, setPassword] = useState('') 



    return (
    <KeyboardAvoidingView style = {styles.container}  behavior = "padding" enabled keyboardVerticalOffset={Platform.select({ ios: 60, android: 78 })}>
      
            <StatusBar style = "night"/>
            <Image 
            source = {require('../src/icons/Logo.png')}
            />
            <Image
            source = {require('../src/icons/FOOTYFIXText.png')}
            />
         
        <View >
         <FormInput 
         placeholderText = "Email" 
         autoFocus type = "email"
         labelValue = {email} 
         onChangeText={(userEmail) => setEmail(userEmail)}
         autoCapitalize = 'none'
         autoCorrect = {false}
          />
         
         <FormInput 
         placeholderText = "Password" 
         secureTextEntry = {true}
         onChangeText={(userPassword) => setPassword(userPassword)}
         labelValue = {password}
        
       

         />
        </View>
        
        <FormButton 
        buttonTitle = 'Login' onPress={RegisterScreen} 
         onPress = {() => alert('Sign-in Clicked')}/>
         
        <FormButton buttonTitle = 'Register' 
        onPress = {() => navigation.navigate('Register')} />

       <TouchableOpacity style= {{marginTop : 25 }} 
       onPress = {() => alert('Well you just have to register again!')}
       >
           <Text style = {{fontWeight:'normal', textDecorationLine :'underline'  }} >Forgot Password?</Text>
       </TouchableOpacity>


        <Image resizeMode = 'stretch'  
              style = {{marginBottom : 0}}
            source = {require('../src/icons/FBlogin.png')} 
            />
            <Image resizeMode = 'stretch'   
            style = {{marginTop : 0}}
            source = {require('../src/icons/GoogleLogin.png')}
            />
       
        <View style = {{ height: 100}} />
        
       
        
    </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#ECFAED',
        flex : 1,
        alignItems: 'center',
        resizeMode : 'cover',
        paddingTop :50
    },
    inputContainer : {
         width : 300,

    },
    loginScreenButton:{
        width : 200,
        marginTop : 10,
        backgroundColor:'#067B25',
    },
    textLogin:{
       color: 'white',
         },
     
});
