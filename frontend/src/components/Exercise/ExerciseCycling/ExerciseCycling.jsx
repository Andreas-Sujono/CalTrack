import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import cyclingImage from 'assets/images/Cycling.png'

import styles from './ExerciseCycling.style';

export default (props) => {

    const handleCalories = () => {
      console.log('calories')
    }
return(
    <View style = {styles.container}>

        <Image
            style={styles.topImage}
            source={cyclingImage}
        />
        <TouchableOpacity onPress={() => props.navigation.navigate('Exercise')}>
            <Icon name="arrowleft" style={styles.arrowLeft}/>
        </TouchableOpacity>

        <View style={styles.contentContainer}>
            <View style = {styles.formContainer}>

                <View style = {styles.textContainer} > 
                    <Text style = {styles.text1} > Cycling </Text>
                </View>
        
                <View style = {styles.textContainer}>
                    <Text style = {styles.text2}>How long did you ride today?</Text>
                </View>
                
                <View style = {styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}  
                        placeholder="Input in minutes"
                    />
                </View>

                <View style = {styles.textContainer}>
                    <Text style = {styles.text3}>Calories Burned:</Text>
                </View>

                <View style = {styles.inputContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleCalories()}
                    > 
                        <Text style={styles.buttonText}>Update Calories Burned </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    </View>
    )
}