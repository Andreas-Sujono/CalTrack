import React from 'react';
import {
  View,
  Text
} from 'react-native';

export default () => {
  return (
    <View style = {
      {
        "alignItems": "flex-start"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins",
        "fontWeight": "bold",
        "fontSize": 25,
        "color": "rgba(92, 77, 177, 255)"
      }
    } > Where would you like to eat ? </Text>
    </View>

  );
};