import React, {useLayoutEffect,useState} from 'react'
import { StyleSheet, View,TouchableOpacity } from 'react-native'
import { KeyboardAvoidingView } from 'react-native';
import { Button, Input, Text} from 'react-native-elements';
import{ StatusBar } from 'expo-status-bar';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';


const RegisterScreen = ({navigation}) => {
    
    const [name,setName] = useState('')
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    
    useLayoutEffect(() => {
           navigation.setOptions({
           headerBackTitle : "Login",
           headerTitle : 'Register',
           
        });
        },[navigation]);

    

    const register = () =>
    {
        
    };

    return (
        <KeyboardAvoidingView  style = {styles.container}behavior = "padding" enabled keyboardVerticalOffset={Platform.select({ ios: 60 })}>
            
            <StatusBar style = ''/>
            
            <Text h3 style = {{marginBottom : 50 , color : '#067B25'}}>
                Create a Footy Fix account
            </Text>

            <View style = {styles.inputContainer}>
              
              <FormInput placeholderText = "Full Name"
         
              type = 'text'
              labelValue = {name}
              onChangeText={(userName) => setName(userName)}
              
              />
               <FormInput labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
              placeholderText="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              />
               <FormInput 
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                secureTextEntry
                type = 'password'
              
              />
               <FormInput labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        secureTextEntry
        type = 'password'
              
              />
              
              <FormButton raised  buttonTitle = 'Register' onPress={() => register(email, password)}/>

              <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#067B25'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#067B25'}]}>
          Privacy Policy
        </Text>
      </View>

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
textPrivate: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginVertical: 35,
  justifyContent: 'center',
},
color_textPrivate: {
  fontSize: 13,
  fontWeight: '400',
  color: 'grey',
},
  
})
