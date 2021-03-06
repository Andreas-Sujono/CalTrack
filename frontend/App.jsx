import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Toast from 'react-native-toast-message';

import Login from './src/components/Login'
import Signup from './src/components/Signup'
import BottomTabs from './src/components/BottomTabs'

import { UserProvider } from './src/Context'

const Stack = createStackNavigator();

//REACT_NATIVE_PACKAGER_HOSTNAME=127.0.0.1
export default class App extends Component{
  state = {
    isLoggedIn: false,
    token: '',
    userAccountId: '',
    userDetailsId: '',
    userAccount: {},
    userDetails: {},
    rerender: 0,
  }

  updateState = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  render(){
    // const toastConfig = {
    //   success: (internalState) => (
    //     <View style={{ height: 60, width: '80%', backgroundColor: 'white', padding:5, paddingLeft: 12, borderRadius: 8}}>
    //       <Text style={{fontWeight: 'bold', fontSize: 16}}>{internalState.text1}</Text>
    //       <Text style={{fontSize: 14}}>{internalState.text2}</Text>
    //     </View>
    //   ),
    //   error: () => {},
    //   info: () => {},
    // };

    return (
      <View style={{flex:1, fontFamily: 'Poppins_400Regular'}}>
      <UserProvider value={{state: this.state, updateState: this.updateState}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions= {{
            animationEnabled: true,
            gestureEnabled: true,
            gestureDirection: 'horizontal'
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
            {
              this.state.isLoggedIn && 
              <Stack.Screen 
                options={{ headerShown: false }} 
                name="BottomTabs" 
                component={BottomTabs} 
              />
            }
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
    );
  }
  
}
