import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import backgroundImage from 'assets/images/loginBackground.png'

import styles from './Signup.style'

export default (props) => {

    const handleSignup = () => {
        console.log('sign up')
    }
      
    return (
        <View style = {styles.container}>

            <View style = {styles.imageContainer}>
                <Image
                    style={styles.backgroundImage}
                    source={backgroundImage}
                />
                <Icon name="arrowleft" style={styles.arrowLeft} onPress={() => props.navigation.navigate('Login')}/>
            </View>

            <View style={styles.contentContainer}>
                <View style = {styles.formContainer}>

                <View style = {styles.textContainer} > 
                    <Text style = {styles.text1} > Sign Up </Text>
                    <Text style = {styles.text2} > Create a new account here </Text>
                </View>

                <View style = {styles.inputContainer}>
                    <TextInput
                    style={styles.textInput}  
                    placeholder="Full Name"
                    />
                </View>

                <View style = {styles.inputContainer}>
                    <TextInput
                    style={styles.textInput}  
                    placeholder="Email Address"
                    />
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
                    <TextInput
                    style={styles.textInput}  
                    placeholder="Confirm Password"
                    secureTextEntry
                    />
                </View>

                <View style = {styles.inputContainer}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleSignup()}
                    > 
                    <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.signUpContainer} >
                    <Text style = {styles.signUpText} > Already have an account ? </Text>
                    <TouchableOpacity
                    style={styles.link}
                    onPress={() => props.navigation.navigate('Login')}
                    > 
                    <Text style={styles.linkText}>Sign In here</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>

        </View>

    );
};