
import React from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

const Loading = (props) => {
  if(props.isFullPage)
    return (
      <View  style = {{flex:1, justifyContent: 'center', alignItems: 'center', transform: [{ scale: 2 }], backgroundColor:'white'}}>
        <ActivityIndicator size="large" color="#7C73E0"/>
      </View>
    )
  return <ActivityIndicator size="large" color="#7C73E0"/>
}
  

Loading.defaultProps = {
  isFullPage: true
}

export default Loading