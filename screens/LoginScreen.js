import React, { useEffect, useState } from 'react';
import {  StyleSheet, View, Image, Text,TouchableOpacity,ScrollView,  } from 'react-native';
import { KeyboardAvoidingView,Platform, } from 'react-native';
import{ StatusBar } from 'expo-status-bar';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import validator from 'validator'
import {auth,firestore} from 'firebase'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const validateFields = (email,password)=> {
    
    
    const isValid = {
        email: validator.isEmail(email),
        password : validator.isStrongPassword(password,{
            minLength : 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols : 1,
        })
    }
    return isValid
  }
  const login = (email,password)  => {
    auth().signInWithEmailAndPassword(email,password).then(()=>{
        console.log('Logged In');
        
    })
}


 export default () => {
    const [name,setName] = useState('')
    const [imageUrl,setImageUrl] = useState('')

    const createAccount = (email,password) => {
        auth()
        .createUserWithEmailAndPassword(email,password)
        .then(({user}) => {
            console.log('Creating User...');
            user.updateProfile({
                displayName : name,
                photoURL : imageUrl ||  
                "https://cencup.com/wp-content/uploads/2019/07/cencup_logo.png",//if no image supplied a default on is used
            });
        } )
    }

    const [isCreateMode,setCreateMode] = useState(false);
    const [emailField,setEmailField] = useState ({
        text:'',
        errorMessage: ''
    })
    const [passwordField,setPasswordField] = useState ({
        text:'',
        errorMessage: ''
    })
    const [passwordReentryField,setPasswordReentryField] = useState ({
        text:'',
        errorMessage: ''
    })
 
    return (
        
        
    <KeyboardAvoidingView

    style = {styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}>
    
            <StatusBar style = "night"/>
            <Image 
            source = {require('../src/icons/Logo.png')}
            />
            <Image
            source = {require('../src/icons/FOOTYFIXText.png')}
            />
         
      <View>
        
        
        {isCreateMode &&   <FormInput 
         placeholderText = "Name"
         autoFocus 
              type = 'text'
         
              onChangeText = {(text) => setName(text)}
        
    
          />
       }
         <FormInput 
         placeholderText = "Email"
         text ={emailField.text}  

         autoFocus type = "email"
         onChangeText={(text)=>{
            setEmailField({text});
           }}
         autoCapitalize = 'none'
         autoCorrect = {false}
         errorMessage = {emailField.errorMessage} 
         autoCompleteType='email'
          />
         
         <FormInput 
         placeholderText = "Password" 
         text ={passwordField.text} 
       
         secureTextEntry = {true}
         onChangeText = {(text)=>{
            setPasswordField({text});
           }}
         errorMessage = {passwordField.errorMessage} 
            />

         {isCreateMode &&   <FormInput 
            placeholderText = 'Re-Enter Password' 
             text ={passwordReentryField.text} 
             onChangeText = {(text)=>{
                 setPasswordReentryField({text});
               
                }}
              errorMessage = {passwordReentryField.errorMessage} 
             secureTextEntry = {true}
              />
              }
                 
        {isCreateMode &&   <FormInput 
         placeholderText = "Profile Picture URL (optional)" 
      
         onChangeText = {(text) => setImageUrl(text)}
         onSubmitEditing = {createAccount}
        
    
          />
       }
        </View>
        
        <FormButton 
        
        onPress = {()=>{
            const isValid = validateFields(
                emailField.text,
                passwordField.text
                );
            let isAllValid = true;
            if(!isValid.email){
                emailField.errorMessage = 'Please enter a valid email'
                setEmailField({...emailField});
                isAllValid = false ;
            }
            if(!isValid.password){
                passwordField.errorMessage = 'Password must contain atleast; 8 characters, 1 Uppercase,1 Lowercase and 1 Number'
                setPasswordField({...passwordField});
                isAllValid = false ;
            }
            if(isCreateMode && passwordReentryField.text != passwordField.text){
                passwordReentryField.errorMessage = 'Passwords do not match'
                setPasswordReentryField({...passwordReentryField});
                isAllValid = false ;
            }
           if(isAllValid){
               isCreateMode ? createAccount(emailField.text,passwordField.text) : login(emailField.text,passwordField.text);  
           }


        }}
        buttonTitle = {isCreateMode ? 'Create Account':'Login'}
        />
         
    
         <TouchableOpacity
           onPress = { () =>{setCreateMode(!isCreateMode)}}
           >
           <Text
            style = {{alignSelf:'center',color:'blue',fontSize:16,margin:4}}
           > {isCreateMode ? 'Already have an account?' :  'Create a new account'}    
           </Text>
           </TouchableOpacity>
       <TouchableOpacity style= {{marginTop : 25 }} 
       onPress = {() => alert('Well you just have to register again!')}
       >
           <Text style = {{fontWeight:'normal', textDecorationLine :'underline'  }} >Forgot Password?</Text>
       </TouchableOpacity>

       {!isCreateMode &&  <TouchableOpacity>
        <Image resizeMode = 'stretch'  
              style = {{marginBottom : 0}}
            source = {require('../src/icons/FBlogin.png')} 
            />
       
            </TouchableOpacity>
      }

      {!isCreateMode &&  <TouchableOpacity>
            <Image resizeMode = 'stretch'   
            style = {{marginTop : 0}}
            source = {require('../src/icons/GoogleLogin.png')}
            />
         </TouchableOpacity>
 }
     <View style = {{ height: 100}} />
        
       
       
    </KeyboardAvoidingView>
   
    )
}




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
