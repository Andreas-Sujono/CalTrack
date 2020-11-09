import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios'
import Toast from 'react-native-toast-message';

import FoodItemCard from './FoodItemCard'
import topImage from 'assets/images/profileBackgroundImage.png'

import styles from './FoodItem.style'

import { withContext } from 'Context'
import {API_ENDPOINT} from 'api/constant'

const FoodItem = (props) => {
  const { stallName, foods, canteenName } = props.route.params;
  const {state} = props.context

  const handleEatFood = (menuName, menuPrice, calory) => {
    let data = {
      date: new Date(), 
      menuName, 
      menuPrice, 
      calory
    }
    axios.post(`${API_ENDPOINT}/consumption`, data, { 
      headers: {"Authorization" : `Bearer ${state.token}`} 
    })
      .then(res => res.data.data)
      .then(res => {
        //if success
        console.log(res)
        props.context.updateState('rerender', Math.random())
        Toast.show({
          text1: 'Success!',
          text2: 'Success posting food',
          type: 'success'
        });
      })
      .catch(err => {
        console.log(err)
        Toast.show({
          text1: 'Error',
          text2: 'Error posting food, try again later!',
          type: 'error'
        });
      })
  }

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

        <ScrollView horizontal={true} style={{marginTop:70, padding: 20, marginRight: 2}}>
          {
            foods.map(item => {
              let {menu, price, calories, image} = item
        
              return (
                  <FoodItemCard key={Math.random()} menu={menu} price={price} image={image} calories={calories} handleEatFood={handleEatFood}/>
              )
            })
          }
        </ScrollView>
        
      </View>

    </View>

  );
};

export default withContext(FoodItem)