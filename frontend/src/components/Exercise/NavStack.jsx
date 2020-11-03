import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import Exercise from './ExerciseMain'
import ExerciseRun from './ExerciseRun'
import ExerciseSwim from './ExerciseSwim'
import ExerciseWorkout from './ExerciseWorkout'
import ExerciseCycling from './ExerciseCycling'

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
            <Stack.Screen
                options = {{headerShown: false}}
                name="ExerciseRun"
                component={ExerciseRun}
            />
            <Stack.Screen
                options = {{headerShown: false}}
                name="ExerciseSwim"
                component={ExerciseSwim}
            />
            <Stack.Screen
                options = {{headerShown: false}}
                name="ExerciseWorkout"
                component={ExerciseWorkout}
            />
            <Stack.Screen
                options = {{headerShown: false}}
                name="ExerciseCycling"
                component={ExerciseCycling}
            />
            </Stack.Navigator>
        </>
    )
}

export default NavStack