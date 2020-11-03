import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import gymImage from 'assets/images/gym.png'

import styles from './ExerciseWorkout.style';

export default (props) => {

    const handleCalories = () => {
      console.log('calories')
    }
return(
    <View style = {styles.container}>

        <Image
            style={styles.topImage}
            source={gymImage}
        />
        <TouchableOpacity onPress={() => props.navigation.navigate('Exercise')}>
            <Icon name="arrowleft" style={styles.arrowLeft}/>
        </TouchableOpacity>

        <View style={styles.contentContainer}>
            <View style = {styles.formContainer}>

                <View style = {styles.textContainer} > 
                    <Text style = {styles.text1} > Workout </Text>
                </View>
        
                <View style = {styles.textContainer}>
                    <Text style = {styles.text2}>Type of Workout</Text>
                </View>
                
                <View style = {styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}  
                        placeholder="Input"
                    />
                </View>

                <View style = {styles.textContainer}>
                    <Text style = {styles.text4}>How many reps you did today?</Text>
                </View>
                
                <View style = {styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}  
                        placeholder="Input in number"
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