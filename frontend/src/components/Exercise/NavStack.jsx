import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import Exercise from './Main'

const Stack = createStackNavigator();

const NavStack = props => {

    return (
        <>
            <Stack.Navigator initialRouteName="Exercise" screenOptions= {{
            animationEnabled: true,
            gestureEnabled: true,
            gestureDirection: 'horizontal'
            }}
            animation="fade"
            >
            <Stack.Screen 
                options={{ headerShown: false }} 
                name="Exercise" 
                component={Exercise} 
            />
            </Stack.Navigator>
        </>
    )
}

export default NavStack