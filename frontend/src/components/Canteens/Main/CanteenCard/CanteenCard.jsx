import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import styles from './CanteenCard.style'

export default (props) => {
    return (

        <TouchableOpacity style = {styles.boxContainer} onPress={() => props.onClick()}>
            <View>
                <Image
                    style={styles.imageContainer}
                    source={{
                        uri: props.image
                    }}
                />
                    <Text style ={styles.canteenText}> {props.name}</Text>
                    <Text style = {styles.addressText}>{props.address}</Text>
            </View>

      </TouchableOpacity>
  
    );
  };
