import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Flatlist,
  ScrollView
} from 'react-native';

import styles from './Canteen.style'
import data from '../CanteenData/canteen.json'
import canteenImage from 'assets/images/canteen.png'
import CanteenCard from './CanteenCard'

export default (props) => {
  return (
    <ScrollView style = {styles.container}>

        <Image
            style={styles.topImage}
            source={canteenImage}
        />

      <View style={styles.contentContainer}>
        <View style = {styles.formContainer}>

            <View style = {styles.textContainer} > 
                <Text style = {styles.text} > Where would {"\n"} you like to eat?</Text>
            </View>

            {
              data.map(item => {
                let name = Object.keys(item)[0]
                let address = item[name][0].address;
                let image = item[name][0].image;
                return (
                  <TouchableOpacity onPress={() => props.navigation.navigate('Stall', {stall: name})}>
                    <CanteenCard key={Math.random()} name={name} desc={address} image={image}/>
                  </TouchableOpacity>
                )
              })
            }
  
        </View>
      </View>

    </ScrollView>

  );
};




