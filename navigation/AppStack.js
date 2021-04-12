import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';


import Home from '../screens/Home';
import Profile from '../screens/Profile';
import ChatScreen from '../screens/ChatScreen';
import Settings from '../screens/Settings';
import HomeScreen from '../screens/HomeScreen';
import AddChatScreen from '../screens/AddChatScreen';
import LoginScreen from '../screens/LoginScreen';
import createGame from '../screens/createGame';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const globalScreenOptions = {
    headerTitleStyle: {color: "#067B25"},
           headerTintColor: "#067B25",
            headerStyle : {
            backgroundColor : '#ECFAED',
            shadowColor : '#ECFAED', 
            backgroundColor: "#ECFAED",
         
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
  function CreateGameScreen() {
    return (
      <Stack.Navigator
      screenOptions = {globalScreenOptions}   >
        <Stack.Screen
       
          name="Create a new Game"
          component={createGame}
        
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
      
    })}
         
    >
     <Tab.Screen name = "Home" component = {HomeStackScreen} 
     options={{
          tabBarLabel: 'Home',
          tabBarColor : '#e88c54',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
     <Tab.Screen name = "Profile" component = {ProfileStackScreen}
      options={{
          tabBarLabel: 'Profile',
          tabBarColor : '#f60095',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" color={color} size={26} />
          ),
        }}/>
     <Tab.Screen name = "Game" component = {CreateGameScreen}
     options={{
          tabBarLabel: 'Games',
          tabBarColor : '#30AF77',
          tabBarIcon: ({ color }) => (
            <Ionicons name="football-outline" color={color} size={26} />
          ),
        }}  />
     <Tab.Screen name = "Chat" component = {ChatStackScreen} 
     options={{
          tabBarLabel: 'Chats',
          tabBarColor : '',
          tabBarIcon: ({ color }) => (
            <Icon name="comment" color={color} size={20} />
          ),
        }}/>
     <Tab.Screen name = "Settings" component = {SettingsStackScreen}
      options={{
          tabBarLabel: 'Settings',
          tabBarColor : '#808080',
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={26} />
          ),
        }}/>
     
    </Tab.Navigator>
 )
}
export default AppStack;