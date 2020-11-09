import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Flatlist,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import styles from "./Stall.style"
import canteenImage from 'assets/images/canteen.png'
import CanteenCard from '../Main/CanteenCard'

export default (props) => {
  let { canteenName } = props.route?.params;
  console.log("canteenName: ",canteenName)
  let data = []
  switch (canteenName) {
    case 'QuadCafe': data = require(`../CanteenData/QuadCafe.json`); break;
    case 'South Spine': data = require(`../CanteenData/SouthSpine.json`); break;
    case 'North Spine': data = require(`../CanteenData/NorthSpine.json`); break;
    case 'Canteen 1': data = require(`../CanteenData/Canteen1.json`); break;
    case 'Canteen 2': data = require(`../CanteenData/Canteen 2.json`); break;
    case 'Canteen 9': data = require(`../CanteenData/Canteen 9.json`); break;
    case 'Canteen 11': data = require(`../CanteenData/Canteen11.json`); break;
    case 'Canteen 13': data = require(`../CanteenData/Canteen13.json`); break;
    case 'Canteen 14': data = require(`../CanteenData/Canteen13.json`); break; //wrong
    case 'Canteen 16': data = require(`../CanteenData/Canteen 16.json`); break;
    case 'North Hill \n Foodcourt': data = require(`../CanteenData/North Hill.json`); break;
    case 'Pioneer Foodcourt': data = require(`../CanteenData/North Spine Plaza.json`); break; //wrong
    case 'Tamarind \n Foodcourt': data = require(`../CanteenData/Saraca.json`); break;
    case 'Nanyang Executive \n Centre': data = require(`../CanteenData/Nanyang Excutive Center.json`); break;
    case 'North Spine \n Plaza': data = require(`../CanteenData/North Spine Plaza.json`); break;
  }

  return (
    <ScrollView style = {styles.container}>

      <Image
          style={styles.topImage}
          source={canteenImage}
      />
      <Icon name="arrowleft" style={styles.arrowLeft} onPress={() => props.navigation.navigate('Canteen')}/>
      
      <View style={styles.contentContainer}>
        <View style = {styles.formContainer}>

            <View style = {styles.textContainer} > 
              <Text style = {styles.text} >{canteenName}</Text>
            </View>

            {
              data.map(item => {
                let name = Object.keys(item)[0]
                let [_, stallName] = name.split('_')

                if(!name || !stallName || !item[name] || !item[name][0]) return null

                let menu = item[name][0].menu;
                let image = item[name][0].image;

                return (
                  <TouchableOpacity key={Math.random()} onPress={() => props.navigation.navigate('FoodItem', {stallName, foods: item[name], canteenName})}>
                    <CanteenCard key={Math.random()} name={stallName} desc={menu} image={image}/>
                  </TouchableOpacity>
                )
              })
            }
           
        </View>
      </View>

    </ScrollView>

  );
};

