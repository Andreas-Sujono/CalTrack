import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import Profile from './Main'

const Stack = createStackNavigator();

const NavStack = props => {

    return (
        <>
            <Stack.Navigator initialRouteName="Profile" screenOptions= {{
            animationEnabled: true,
            gestureEnabled: true,
            gestureDirection: 'horizontal'
            }}
            animation="fade"
            >
            <Stack.Screen 
                options={{ headerShown: false }} 
                name="Profile" 
                component={Profile} 
            />
            </Stack.Navigator>
        </>
    )
}

export default NavStack