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
        <View style = {styles.boxContainer}>
            <Image
                style={styles.imageContainer}
                source={{
                    uri: props.image
                }}
            />
            <Text style ={styles.nameText}> {props.name}</Text>
            <Text style = {styles.descText}>{props.desc}</Text>
        </View>
    );
};
