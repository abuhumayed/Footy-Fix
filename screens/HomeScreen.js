import React, { useEffect, useState,useLayoutEffect } from 'react';
import {  StyleSheet, View, Image, Text,TouchableOpacity  } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import RegisterScreen from './RegisterScreen';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';




const HomeScreen = ({navigation}) => {


   useLayoutEffect(() => {
    navigation.setOptions({
    headerBackTitle : "",
    headerTitle : 'Home',
    
 });
 },[navigation]);

    return (
    <KeyboardAvoidingView style = {styles.container}  behavior = "padding" enabled keyboardVerticalOffset={Platform.select({ ios: 60, android: 78 })}>
      
          <Text>Welcome</Text>
        <FormButton  buttonTitle ='Logout'onPress = {() => {} } /> 
    </KeyboardAvoidingView>
    )
}

export default HomeScreen

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
