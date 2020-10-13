import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/components/Login'
import Signup from './src/components/Signup'

import store from './src/store';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions= {{
            animationEnabled: false,
            gestureEnabled: false   
          }}
          animation="fade"
          >
            <Stack.Screen 
              options={{ headerShown: false }} 
              name="Login" 
              component={Login} 
            />
            <Stack.Screen 
              options={{ headerShown: false }} 
              name="Signup" 
              component={Signup} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}
