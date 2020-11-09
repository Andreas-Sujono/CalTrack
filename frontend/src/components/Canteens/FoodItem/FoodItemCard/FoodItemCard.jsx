import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import styles from './FoodItemCard.style'

export default (props) => {
    let defaultImage = 'https://cdn.iconscout.com/icon/free/png-256/food-1454622-1231018.png'
    let image = props.image || defaultImage
    return (
        <View style = {styles.boxContainer}>
            <Text style ={styles.title}> {props.menu}</Text>
            <Text style ={styles.desc}>Price: ${props.price}</Text>
            <Text style ={styles.desc}>Calories: {props.calories} Cal</Text>
            <Image
                style={styles.imageContainer}
                source={{
                    uri: image
                }}
            />
            <TouchableOpacity style={styles.button} onPress={() => props.handleEatFood(props.menu, props.price, props.calories)}>
                <Text style={styles.buttonText}>I ate this</Text>
            </TouchableOpacity>
        </View>
    );
};
