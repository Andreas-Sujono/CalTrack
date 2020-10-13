import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import welcomeImage from 'assets/images/welcome.png'
import backgroundImage from 'assets/images/loginBackground.png'

import styles from './Login.style';

export default () => {

  const handleSignIn = () => {
    console.log('sign in')
  }

  return (
    <View style = {styles.container}>

      <View style = {styles.imageContainer}>
        <Image
          style={styles.backgroundImage}
          source={backgroundImage}
        />
        <Image
          style={styles.topImage}
          source={welcomeImage}
        />
      </View>

      <View style={styles.contentContainer}>
        <View style = {styles.formContainer}>

          <View style = {styles.textContainer} > 
            <Text style = {styles.text1} > Welcome </Text>
            <Text style = {styles.text2} > Sign in to continue </Text>
          </View>

          <View style = {styles.inputContainer}>
            <TextInput
              style={styles.textInput}  
              placeholder="Username"
            />
          </View>

          <View style = {styles.inputContainer}>
            <TextInput
              style={styles.textInput}  
              placeholder="password"
              secureTextEntry
            />
          </View>

          <View style = {styles.inputContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSignIn()}
            > 
              <Text style={styles.buttonText}>Sign In </Text>
            </TouchableOpacity>
          </View>

          <View style = {styles.signUpContainer} >
            <Text style = {styles.signUpText} > Don’ t have account ? </Text>
            <TouchableOpacity
              style={styles.link}
              onPress={() => console.log('sign up link')}
            > 
              <Text style={styles.linkText}>Sign up here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  );
};