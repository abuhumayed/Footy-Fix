import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import ChatScreen from '../screens/ChatScreen';
import Settings from '../screens/Settings';
import HomeScreen from '../screens/HomeScreen';
import AddChatScreen from '../screens/AddChatScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

function HomeStackScreen() {
    return (
      <Stack.Navigator
      screenOptions = {globalScreenOptions}   >
        <Stack.Screen
       
          name="Home"
          component={Home}
        
        />
      </Stack.Navigator>
    );
  }
  function ProfileStackScreen() {
    return (
      <Stack.Navigator
      screenOptions = {globalScreenOptions}   >
        <Stack.Screen
        
          name="Profile"
          component={Profile}
          options={{ tabBarLabel: 'Profile!' }}
        />
      </Stack.Navigator>
    );
  }
  function SettingsStackScreen() {
    return (
      <Stack.Navigator
      screenOptions = {globalScreenOptions}   >
        <Stack.Screen
        
          name="Settings"
          component={Settings}
    
        />
      </Stack.Navigator>
    );
  }
  function ChatStackScreen() {
    
    return (
      <Stack.Navigator
      screenOptions = {globalScreenOptions}   >
        <Stack.Screen
          name="Group Chat"
          component={HomeScreen}
       
        />
          <Stack.Screen name = 'AddChat' component = {AddChatScreen}/>
          <Stack.Screen name = 'Chat' component = {ChatScreen}/>
          <Stack.Screen name = 'Login' component ={LoginScreen}></Stack.Screen>
      </Stack.Navigator>
    );
  }
 
const AppStack = () => {
 return (
<Tab.Navigator 

    screenOptions = {({route}) =>({
        headerTitle : () => <Text>Header</Text> ,
        headerStyle: { backgroundColor: "#ECFAED"},
        headerTitleStyle: {color: "#067B25"},
        headerTintColor: "#067B25",
        tabBarIcon : ({focused,color,size,padding}) =>{
         let iconName;
         if(route.name === 'Home' )
         {
             iconName = focused ? 'home' : 'home-outline' 
         }else if (route.name === 'Chat'){
             iconName = focused ? 'chatbox-sharp' : 'chatbox-outline' 
         }else if (route.name === 'Profile'){
             iconName = focused ? 'person' : 'person-outline' 
         }else if (route.name === 'Settings'){
             iconName = focused ? 'settings-sharp' : 'settings-outline' 
         }
 
         return (
             <Ionicons 
             name = {iconName} 
             size = {size} 
             color = {color}
              style = {{ paddingBottom :padding }} 
              
              />
         );
        },
    })}
          tabBarOptions = {{
              activeTintColor: '#067B25',
              inactiveTintColor: 'gray',
              labelStyle: {fontSize :16},
             
          }}
    >
     <Tab.Screen name = "Home" component = {HomeStackScreen} />
     <Tab.Screen name = "Profile" component = {ProfileStackScreen} />
     <Tab.Screen name = "Chat" component = {ChatStackScreen} />
     <Tab.Screen name = "Settings" component = {SettingsStackScreen} />
    </Tab.Navigator>
 )
}
export default AppStack;