import React, {useLayoutEffect,useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { KeyboardAvoidingView } from 'react-native';
import { Button, Input, Text} from 'react-native-elements';
import{ StatusBar } from 'expo-status-bar';
import FormButton from '../components/FormButton';


const RegisterScreen = ({navigation}) => {
    
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    
    useLayoutEffect(() => {
        navigation.setOptions({
          headerBackTitle : "Back to Login",
        
        });
        },[navigation]);

    

    const register = () =>
    {
        
    };

    return (
        <KeyboardAvoidingView  style = {styles.container}behavior = "padding" enabled keyboardVerticalOffset={Platform.select({ ios: 60 })}>
            
            <StatusBar style = ''/>
            
            <Text h3 style = {{marginBottom : 50}}>
                Create a Footy Fix account
            </Text>

            <View style = {styles.inputContainer}>
              
              <Input placeholder = "Full Name"
              autoFocus 
              type = 'text'
              value = {name}
              onChangeText = {(text) => setName(text)}
              
              />
               <Input placeholder = "Email"
              type = 'email'
              value = {email}
              onChangeText = {(text) => setEmail(text)}
              
              />
               <Input placeholder = "Password"
              type = 'password'
              secureTextEntry
              value = {password}
              onChangeText = {(text) => setPassword(text)}
              
              />
               <Input placeholder = "Profile Picture URL (optional)" 
              type = 'text'
              value = {imageUrl}
              onChangeText = {(text) => setImageUrl(text)}
              onSubmitEditing = {register}
              
              />
              
              <FormButton raised  text = 'Register' onPress = {register} />

            </View>
            
            
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
 
    container : {
        backgroundColor : '#ECFAED',
        flex : 1,
        alignItems: 'center',
        padding : 10,
        justifyContent : 'center',

    },
    inputContainer : {
        width : 300,

   },
  
})
