
import React, {useState,useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import * as firebase from 'firebase';

import AuthStack from './AuthStack';
import AppStack  from './AppStack'

const Routes = () => {
const [isAuthenticated,setIsAuthenticated] = useState(false);
  useEffect (() => {
    if (firebase.auth().currentUser){
      setIsAuthenticated(true)
    }
    firebase.auth().onAuthStateChanged(user => {
      console.log('Checking Auth state...') 
      if (user){
        setIsAuthenticated (true)
      }
      else {
        setIsAuthenticated(false)
      }
    })
  }, [])

  
  return (
    
    <NavigationContainer>
       {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;

