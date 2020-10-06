import React from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './Login.style';

export default () => {
  return (
    <View style = {styles.container}>

      <View style = {styles.container2}>
        <View style = {styles.container3}/>
        <View style = {styles.container4}/>
        <View style = {styles.container5}/>
        <View style = {styles.container6}/>
        <View style = {styles.container7}/>
      </View>

      <View style = {styles.container8}>
        <View style = {styles.container9}>

          <View style = {styles.container10} > 
            <Text style = {styles.container11} > Welcome </Text>
            <Text style = {styles.container12} > Sign in to continue </Text>
          </View>


          <View style = {styles.container13}>
            <View style = {styles.container14}>
              <Text style = {styles.container15} > Username </Text>
            </View>
          </View>

          <View style = {styles.container16} >
            <View style = {styles.container17} >
              <Text style = {styles.container18} > Password </Text>
            </View>
          </View>

          <View style = {styles.container19} >
            <View style = {styles.container20} >
              <Text style = {styles.container21} > Sign In </Text>
            </View>
          </View>

          <Text style = {styles.container22} >
            <Text style = {styles.container23} > Don’ t have account ? </Text>
            <Text style={styles.container24}>Sign up here</Text > 
          </Text>
        </View>
      </View>
    </View>
  );
};