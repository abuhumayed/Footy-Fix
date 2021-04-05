import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterScreen from '../screens/RegisterScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
const [isFirstLaunch,setIsFirstLaunch] = React.useState(null);
let routeName;

const globalScreenOptions = {
    headerTitleStyle: {color: "#067B25"},
           headerTintColor: "#067B25",
            headerStyle : {
            backgroundColor : '#ECFAED',
            shadowColor : '#ECFAED', 
            backgroundColor: "#ECFAED",
            elavation : 0,
        }
    
  };

useEffect(() => {
  AsyncStorage.getItem('alreadyLaunched').then(value => {
  if (value === null){
    AsyncStorage.setItem('alreadyLaunched','true');
    setIsFirstLaunch(true);
  }else{
    setIsFirstLaunch(false);
  }
  });
}, []);


if (isFirstLaunch === null){
  return null;
}else if (isFirstLaunch === true ){
  routeName = 'Onboarding';
} else{ (routeName = 'Login')
}
return (
    <Stack.Navigator initialRouteName={routeName}
             screenOptions = {globalScreenOptions}        
    >
    <Stack.Screen
      name="Onboarding"
      component={OnboardingScreen}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
     

    />
     
  </Stack.Navigator>
 );
};
export default AuthStack;