import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import Homepage from 'components/Homepage'
import Canteen from 'components/Canteens/Main/Canteen'

import homepageIcon from 'assets/icons/home.png'
import exerciseIcon from 'assets/icons/exercise.png'
import canteensIcon from 'assets/icons/canteens.png'
import profileIcon from 'assets/icons/profile.png'

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
                <TouchableOpacity
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    style={{ flex: 1 }}
                >
                    <View>
                        {options.tabBarIcon && options.tabBarIcon()}
                        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                            {label}
                        </Text>
                    </View>
                
                </TouchableOpacity>
            );
            })}
      </View>
    );
}

function BottomTabs(props) {
    return (
        <Tab.Navigator initialRouteName="Homepage" tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen 
                name="Homepage" 
                component={Homepage} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Image 
                            source = {homepageIcon}
                            style={{
                                "width": 25,
                                "height": 19.44,
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="Canteen" 
                component={Canteen} 
                options={{
                    tabBarLabel: 'Canteen',
                    tabBarIcon: () => (
                        <Image 
                            source = {canteensIcon}
                            style={{
                                "width": 25,
                                "height": 19.44,
                            }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;