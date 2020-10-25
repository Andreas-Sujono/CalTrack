import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from "./Stall.style"

export default () => {
  return (
    <View style = {styles.container} >

    {
      /* <Path /> {Path is not supported. It can be exported as Svg} */ }
    <Image style = {styles.container2}
    source = {{uri: "https://pikamemo.com/wp-content/uploads/2020/08/undraw_special_event_4aj8-640x360.png"}}
    />
    <View style = {styles.container3}>
    <Text style = {styles.container4}> Quad Cafe </Text>
    </View>
    <View style = {styles.container5}> 
    <Text style = {styles.container6}> Stalls </Text>
    </View>
    
    <View style = {styles.container8}>
    <TouchableOpacity style = {styles.container9}>
      <Image style = {styles.container10}
      source = {{uri: "https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg"}}/>
      <View style = {styles.container11}>
      <Text style = {styles.container12}> Korean Food </Text>
      <Text style = {styles.container13} > Bibimbap, {"\n"} Kimchi Fried Rice </Text>
      </View>
    </TouchableOpacity>
    </View>

    <View style = {styles.container29}>
    <View style = {styles.container30}>
    <Image style = {styles.container7}
    source = {{uri: "https://media.timeout.com/images/105634384/image.jpg"}}>
    </Image>
    </View>
    </View>

    <View style = {styles.container14} >
    <View style = {styles.container15} >
    <View style = {styles.container16} >

    {
      /* <Path /> {Path is not supported. It can be exported as Svg} */ }
    <Image style = {styles.container17}
    source = {{uri: "https://toppng.com/uploads/preview/home-icon-home-house-icon-house-icon-free-11553508857ouiuhg9nsa.png"}}/>
    <Text style = {styles.container18} > Home </Text>
    </View>
    <View style = {styles.container19} >
    <View style = {styles.container20} >

    {
      /* <Path /> {Path is not supported. It can be exported as Svg} */ }
    <Image style = {styles.container21}
    source = {{uri: "https://icon-library.com/images/food-and-drink-icon/food-and-drink-icon-15.jpg"}}/>
    <Text style = {styles.container22}> Canteens </Text>
    </View>
    </View>
    <View style = {styles.container23}>

    {
      /* <Path /> {Path is not supported. It can be exported as Svg} */ }
    <Image style = {styles.container24}
    source = {{uri: "https://www.pinclipart.com/picdir/middle/70-700269_28-collection-of-dumbbell-clipart-transparent-dumbbells-icon.png"}}/>
    <Text style = {styles.container25}> Exercise </Text>
    </View>
    <View style = {styles.container26}>
    <Image style = {styles.container28}
    source = {{uri: "https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png"}}/>
    <Text style = {styles.container27}> Profile </Text>

    {
      /* <Path /> {Path is not supported. It can be exported as Svg} */ }
    </View>
    </View>
    </View>
    </View>

  );
};