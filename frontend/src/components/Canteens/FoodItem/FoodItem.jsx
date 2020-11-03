import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import FoodItemCard from './FoodItemCard'

import styles from './FoodItem.style'
import topImage from 'assets/images/profileBackgroundImage.png'

export default (props) => {
  const { stallName, foods, canteenName } = props.route.params;
  return (
    <View style = {styles.container}>

      <Image
        style={styles.topImage}
        source={topImage}
      />
      <Icon name="arrowleft" style={styles.arrowLeft} onPress={() => props.navigation.navigate('Stall', {canteenName})}/>

      <View style={styles.contentContainer}>
        <View style = {styles.textContainer} > 
          <Text style = {styles.text} >{stallName}</Text>
        </View>

        <ScrollView horizontal={true} style={{marginTop:100, padding: 20}}>
          {
            foods.map(item => {
              let {menu, price, calories, image} = item
        
              return (
                  <FoodItemCard key={Math.random()} menu={menu} price={price} image={image} calories={calories}/>
              )
            })
          }
        </ScrollView>
        
      </View>

    </View>

  );
};