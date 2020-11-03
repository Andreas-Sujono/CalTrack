import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Canteen from './Main/Canteen'
import Stall from './Stall/Stall'
// import FoodItem from './FoodItem'

const Stack = createStackNavigator();

const NavStack = props => {

    return (
        <>
            <Stack.Navigator initialRouteName="Canteen" screenOptions= {{
            animationEnabled: true,
            gestureEnabled: true,
            gestureDirection: 'horizontal'
            }}
            animation="fade"
            >
            <Stack.Screen 
                options={{ headerShown: false }} 
                name="Canteen" 
                component={Canteen} 
            />
            <Stack.Screen 
                options={{ headerShown: false }} 
                name="Stall" 
                component={Stall} 
            />
            </Stack.Navigator>
        </>
    )
}

export default NavStack