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
import Loading from 'components/Loading'

import styles from './Signup.style'

import {API_ENDPOINT} from 'api/constant'

import { withContext } from 'Context'

const Signup = (props) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState(errorMessage)
    const [isLoading, setIsLoading] = useState(false)

    const validateForm = () => {
        let isValidated = true
        if(!fullName || !email || !username || !password || !confirmPassword){
          isValidated = false
          setErrorMessage('Please input all the field')
        } 
        else if(! (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)))
        {
            isValidated = false
            setErrorMessage('Please input a valid email')
        }
        else if (password !== confirmPassword){
            isValidated = false
          setErrorMessage('Password is not matched')
        }
        return isValidated
      }

    const handleSignup = async () => {
        if(!validateForm()) return
        setIsLoading(true)

        await axios.post(`${API_ENDPOINT}/user/register`, {
            fullName, email, username, password
        })
          .then(res => res.data.data)
          .then(res => {
            //if success
            console.log(res)
            props.context.updateState('isLoggedIn', true)
            props.context.updateState('token', res.token)
            props.context.updateState('userAccountId', res.userAccount._id)
            props.context.updateState('userDetailsId', res.userDetails._id)
            props.context.updateState('userAccount', res.userAccount)
            props.context.updateState('userDetails', res.userDetails)

            props.navigation.navigate('BottomTabs', {startTutorial: true, screen: 'Profile'})
          })
          .catch(err => {
              console.log(err)
            let data = err.response.data
            setErrorMessage(data.message)
          })
          setIsLoading(false)
    }

    if(isLoading)
        return (
        <Loading/>
        )
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

                    {
                        errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null
                    }

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
                            onPress={() => {
                                setErrorMessage('')
                                props.navigation.navigate('Login')
                            }}
                        > 
                            <Text style={styles.linkText}>Sign In here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>

    );
};

export default withContext(Signup);