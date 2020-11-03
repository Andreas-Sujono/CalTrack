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
import data from '../CanteenData/Canteen1.json'
import CanteenCard from '../Main/CanteenCard'

export default (props) => {
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
                <Text style = {styles.text} >Stall 1</Text>
            </View>

            {
              data.map(item => {
                let name = Object.keys(item)[0]
                let [canteenName, stallName] = name.split('_')

                let menu = item[name][0].menu;
                let image = item[name][0].image;

                return <CanteenCard name={canteenName} address={menu} image={image}/>
              })
            }
          
              
                  

              
        </View>
      </View>

    </ScrollView>

  );
};

