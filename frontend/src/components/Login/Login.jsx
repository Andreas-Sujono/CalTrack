import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios'
import CacheStore from 'react-native-cache-store';

import welcomeImage from 'assets/images/welcome.png'
import backgroundImage from 'assets/images/loginBackground.png'
import Loading from 'components/Loading'

import styles from './Login.style';
import {API_ENDPOINT} from 'api/constant'

import { withContext } from 'Context'

const Login = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(errorMessage)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    CacheStore.get('auth')
      .then((auth) => {
        if(auth){
          console.log(auth)
          setUsername(auth.username)
          setPassword(auth.password)
          handleSignIn(auth)
        }
        
      })
      .catch((err) => {
        console.log(err);
        console.log('error while get cache');
      });

  }, [])

  const validateForm = () => {
    let isValidated = true
    if(!username || !password){
      isValidated = false
      setErrorMessage('Username and password cannot be empty')
    }
    return isValidated
  }

  const handleSignIn = async (data = null) => {
    if(!validateForm() && !data) return
    setIsLoading(true)
    await axios.post(`${API_ENDPOINT}/user/login`, {
      username: data ? data.username : username, 
      password: data ? data.password : password
    })
      .then(res => res.data.data)
      .then(res => {
        //if success
        console.log(res)
        props.context.updateState('isLoggedIn', true)
        props.context.updateState('token', res.token)
        props.context.updateState('userAccountId', res.userAccount._id)
        props.context.updateState('userDetailsId', res.userDetails._id)

        //save in cache
        CacheStore.set('auth', {username, password})
        .then(() => console.log('save cache success'))
        .catch((err) => console.log(err));

        props.navigation.navigate('BottomTabs')
      })
      .catch(err => {
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
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>

          <View style = {styles.inputContainer}>
            <TextInput
              style={[styles.textInput]}  
              placeholder="password"
              secureTextEntry
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>

          {
            errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>
          }

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSignIn()}
          > 
            <Text style={styles.buttonText}>Sign In </Text>
          </TouchableOpacity>

          <View style = {styles.signUpContainer} >
            <Text style = {styles.signUpText} > Don’ t have account ? </Text>
            <TouchableOpacity
              style={styles.link}
              onPress={() => {
                setErrorMessage('')
                props.navigation.navigate('Signup')
              }}
            > 
              <Text style={styles.linkText}>Sign up here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  );
};

export default withContext(Login);