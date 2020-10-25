import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import axios from 'axios'
import Icon from 'react-native-vector-icons/AntDesign';

import backgroundImage from 'assets/images/loginBackground.png'

import styles from './Signup.style'

import UserContext, { UserConsumer } from 'Context'

export default (props) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

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
                            value={fullName}
                            onChangeText={text => setFullName(text)}
                        />
                    </View>

                    <View style = {styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}  
                            placeholder="Email Address"
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                    </View>

                    <View style = {styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}  
                            placeholder="Username"
                            value={username}
                            onChangeText={text => setUsername(text)}
                        />
                    </View>

                    <View style = {styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}  
                            placeholder="password"
                            secureTextEntry
                            value={password}
                            onChangeText={text => setPassword(text)}
                        />
                    </View>

                    <View style = {styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}  
                            placeholder="Confirm Password"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={text => setConfirmPassword(text)}
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