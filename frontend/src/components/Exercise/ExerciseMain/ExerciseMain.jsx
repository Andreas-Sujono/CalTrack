import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import runImage from 'assets/images/runner.png'
import gymEllipse from 'assets/images/ExerciseMain/gym.png'
import swimEllipse from 'assets/images/ExerciseMain/swimmer.png'
import runEllipse from 'assets/images/ExerciseMain/running.png'
import cyclingEllipse from 'assets/images/ExerciseMain/Cycling.png'


import styles from './ExerciseMain.style';

export default (props) => {

    const handleCalories = () => {
      console.log('calories')
    }
return(
    <View style = {styles.container}>

            <Image
                style={styles.topImage}
                source={runImage}
            />
        
        <View style={styles.contentContainer}>
            <View style = {styles.formContainer}>

                <View style = {styles.textContainer} > 
                    <Text style = {styles.text1} > What did you do</Text>
                    <Text style = {styles.text2}> today?</Text>
                </View>
                <Image
                    style={styles.imageContainer1}
                    source={gymEllipse}
                />
                 <Image
                    style={styles.imageContainer2}
                    source={swimEllipse}
                />
                <Image
                    style={styles.imageContainer3}
                    source={runEllipse}
                />
                 <Image
                    style={styles.imageContainer4}
                    source={cyclingEllipse}
                />
                       
        

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