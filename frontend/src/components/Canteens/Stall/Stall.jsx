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
  const { canteenName } = props.route.params;
  let testStallName = "QuadCafe"
  let data = require(`../CanteenData/${testStallName}.json`)

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
                let [canteenName, stallName] = name.split('_')

                if(!name || !stallName || !item[name] || !item[name][0]) return null

                let menu = item[name][0].menu;
                let image = item[name][0].image;

                return (
                  <TouchableOpacity onPress={() => props.navigation.navigate('FoodItem', {stallName, foods: item[name], canteenName})}>
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

