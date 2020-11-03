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

return(
    <View style = {styles.container}>

        <Image
            style={styles.topImage}
            source={runImage}
        />
        
        <View style={styles.contentContainer}>
            <View style = {styles.formContainer}>

                <View style = {styles.textContainer} > 
                    <Text style = {styles.text1}> What did you do {"\n"} today? </Text>
                </View>

                <View style={styles.exerciseContainer}>
                    <TouchableOpacity 
                        onPress={() => {
                            props.navigation.navigate('ExerciseWorkout')
                        }}
                        style={{width:'50%'}}
                    >
                        <View style={styles.imageContainer}>
                            <Image
                                source={gymEllipse}
                                resizeMode='contain'
                                style={styles.image}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate('ExerciseSwim')
                    }} style={{width:'50%'}}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={swimEllipse}
                                resizeMode='contain'
                                style={styles.image}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate('ExerciseRun')
                    }} style={{width:'50%'}}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={runEllipse}
                                resizeMode='contain'
                                style={styles.image}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate('ExerciseCycling')
                    }} style={{width:'50%'}}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={cyclingEllipse}
                                resizeMode='contain'
                                style={styles.image}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                       
            </View>
        </View>

    </View>
    )
}