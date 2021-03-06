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
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

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

  let [fontsLoaded] = useFonts({
      Poppins_400Regular,
  });

  useEffect(() => {
    CacheStore.get('state')
      .then((state) => {          
        console.log('retrieve state: ', state)

        if(state && state.username && state.password){
          const {username, password, token, userAccount, userDetails} = state
          setUsername(username)
          setPassword(password)

          props.context.updateState('isLoggedIn', true)
          props.context.updateState('token', token)
          props.context.updateState('userAccountId', userAccount._id)
          props.context.updateState('userAccount', userAccount)
          props.context.updateState('userDetailsId', userDetails._id)
          props.context.updateState('userDetails', userDetails)

          props.navigation.navigate('BottomTabs')

          // handleSignIn(auth)
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
        props.context.updateState('userAccount', res.userAccount)
        props.context.updateState('userDetailsId', res.userDetails._id)
        props.context.updateState('userDetails', res.userDetails)
        setErrorMessage('')

         //save in cache
         CacheStore.set('state', {...res, username, password})
         .then(() => console.log('save cache success'))
         .catch((err) => console.log(err));

        props.navigation.navigate('BottomTabs')
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
      <Loading isFullPage={true}/>
    )

  return (
    <View style = {[styles.container, {fontFamily: 'Poppins_400Regular'}]}>

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
            errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null
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
              <View>
                <Text style={styles.linkText}>Sign up here</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  );
};

export default withContext(Login);