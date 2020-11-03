import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

export default () => {
  return (
    <View style = {
      {
        "alignItems": "flex-start"
      }
    } >
    <View style = {
      {
        "flexDirection": "row",
        "alignItems": "flex-start",
        "paddingStart": 18,
        "paddingTop": 13,
        "width": 335,
        "height": 111,
        "borderRadius": 21,
        "borderWidth": 2,
        "borderColor": "rgba(199, 199, 199, 52)",
        "backgroundColor": "rgba(255, 255, 255, 255)"
      }
    } >
    <Image style = {
      {
        "width": 109,
        "height": 82,
        "borderRadius": 15
      }
    }
    source = {
      {
        /* add your source here */ }
    }
    />
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": 41,
        "marginTop": 2
      }
    } >
    <Text style = {
      {
        "fontFamily": "Poppins",
        "fontWeight": "bold",
        "fontSize": 18,
        "letterSpacing": 0.42,
        "color": "rgba(59, 59, 59, 255)"
      }
    } > Quad Cafe </Text>
    <Text style = {
      {
        "fontFamily": "Poppins",
        "fontSize": 11,
        "letterSpacing": 0.42,
        "color": "rgba(219, 219, 219, 255)",
        "marginTop": 5
      }
    } > 60 Nanyang Drive Singapore 637551 </Text>
    </View>
    </View>
    </View>

  );
};