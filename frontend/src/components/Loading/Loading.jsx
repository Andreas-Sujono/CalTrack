
import React from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

const Loading = (props) =>
  <View  style = {{flex:1, justifyContent: 'center', alignItems: 'center', transform: [{ scale: 2 }], backgroundColor:'white'}}>
      <ActivityIndicator size="large" color="#7C73E0"/>
  </View>

export default Loading