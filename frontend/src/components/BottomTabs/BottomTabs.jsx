import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';

import Homepage from 'components/Homepage'
import Canteens from 'components/Canteens'
import Exercise from 'components/Exercise'
import Profile from 'components/Profile'

import homepageIcon from 'assets/icons/home.png'
import homepageActiveIcon from 'assets/icons/homeActive.png'
import exerciseIcon from 'assets/icons/exercise.png'
import exerciseActiveIcon from 'assets/icons/exerciseActive.png'
import canteensIcon from 'assets/icons/canteens.png'
import canteensActiveIcon from 'assets/icons/canteensActive.png'
import profileIcon from 'assets/icons/profile.png'
import profileActiveIcon from 'assets/icons/profileActive.png'

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
  
    if (focusedOptions.tabBarVisible === false) {
      return null;
    }  

    return (
        <View style={{ flexDirection: 'row', width: '100%', height: 70, backgroundColor: 'white' }}>
            {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
                options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
    
            const isFocused = state.index === index;
    
            const onPress = () => {
                const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
                });
    
                if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
                }
            };

            return (
                <TouchableWithoutFeedback
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    style={{ flex: 1,}}
                    key={index}
                >
                    <View style={{
                        flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: isFocused ? '#ACA5F8' : 'white',
                        borderTopColor: '#F5F5F5', borderTopWidth: 1 
                    }}>
                        {!isFocused ? options.tabBarIcon() : options.tabBarActiveIcon()}
                        <Text style={{ color: isFocused ? 'white' : '#222' }}>
                            {label}
                        </Text>
                    </View>
                
                </TouchableWithoutFeedback>
            );
            })}
      </View>
    );
}

function BottomTabs(props) {
    return (
        <Tab.Navigator initialRouteName="Homepage" tabBar={props => <MyTabBar {...props} screenProps={props}/>}>
            <Tab.Screen 
                name="Homepage" 
                component={Homepage} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Image 
                            source = {homepageIcon}
                            style={{
                                "width": 30,
                                "height": 25,
                            }}
                        />
                    ),
                    tabBarActiveIcon: () => (
                        <Image 
                            source = {homepageActiveIcon}
                            style={{
                                "width": 30,
                                "height": 25,
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="Exercise" 
                component={Exercise} 
                options={{
                    tabBarLabel: 'Exercise',
                    tabBarIcon: () => (
                        <Image 
                            source = {exerciseIcon}
                            style={{
                                "width": 30,
                                "height": 22,
                            }}
                        />
                    ),
                    tabBarActiveIcon: () => (
                        <Image 
                            source = {exerciseActiveIcon}
                            style={{
                                "width": 30,
                                "height": 22,
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="Canteens" 
                component={Canteens} 
                options={{
                    tabBarLabel: 'Canteens',
                    tabBarIcon: () => (
                        <Image 
                            source = {canteensIcon}
                            style={{
                                "width": 28,
                                "height": 25,
                            }}
                        />
                    ),
                    tabBarActiveIcon: () => (
                        <Image 
                            source = {canteensActiveIcon}
                            style={{
                                "width": 28,
                                "height": 25,
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => (
                        <Image 
                            source = {profileIcon}
                            style={{
                                "width": 25,
                                "height": 25,
                            }}
                        />
                    ),
                    tabBarActiveIcon: () => (
                        <Image 
                            source = {profileActiveIcon}
                            style={{
                                "width": 25,
                                "height": 25,
                            }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;