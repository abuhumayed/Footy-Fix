import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import {auth} from 'firebase'
import FormButton from '../components/FormButton';

const Settings = (props) => {
    return (
        <SafeAreaView 
        style = {styles.container}
        >
            <Text>Settings Screen</Text>
            <FormButton 
            style = {{flex : 1, alignItems: 'flex-start'}}
            buttonTitle ='Join a league' onPress = {()=>{}}/> 
             <FormButton 
            style = {{flex : 1, alignItems: 'flex-start',marginTop:-200}}
            buttonTitle ='Account' onPress = {()=>{}}/> 
            <FormButton 
            style = {{flex : 1, }}
            buttonTitle ='Logout' onPress = {()=>{
              auth().signOut();
          }}/> 
        
        </SafeAreaView>
    )
}

export default Settings

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#ECFAED',
        flex : 1,
        alignItems: 'center',
         
       
    }
})