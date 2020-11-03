import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import swimImage from 'assets/images/swimmer.png'

import styles from './ExerciseSwim.style';

export default (props) => {

    const handleCalories = () => {
      console.log('calories')
    }
return(
    <View style = {styles.container}>

            <Image
                style={styles.topImage}
                source={swimImage}
            />
            <Icon name="arrowleft" style={styles.arrowLeft} onPress={() => props.navigation.navigate('Login')}/>
        <View style={styles.contentContainer}>
            <View style = {styles.formContainer}>

                <View style = {styles.textContainer} > 
                    <Text style = {styles.text1} > Swimming </Text>
                </View>
        
                <View style = {styles.textContainer}>
                    <Text style = {styles.text2}>How many reps you did today?</Text>
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