import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import axios from 'axios'
import Icon from 'react-native-vector-icons/AntDesign';
import runImage from 'assets/images/running.png'
import styles from './ExerciseRun.style';
import Toast from 'react-native-toast-message'

import { withContext } from 'Context'
import {API_ENDPOINT} from 'api/constant'

const ExerciseRun = (props) => {
    const {state} = props.context
    const [calorieBurn, setCalorieBurn] = useState('');
    const [time, setTime] = useState('');

    const onChangeSetRun = (time) => {
        time = parseFloat(time)
        return setCalorieBurn(time*13.6);
    }
    const handleUpdateCalories = async () => {
        let data = {
          date: new Date(), 
          menuName: '', 
          menuPrice: 0, 
          calory: -parseFloat(calorieBurn)
        }
        await axios.post(`${API_ENDPOINT}/consumption`, data, { 
            headers: {"Authorization" : `Bearer ${state.token}`} 
          })
          .then(res => res.data.data)
          .then(res => {
            //if success
            console.log(res)
            props.context.updateState('rerender', Math.random())
            Toast.show({
              text1: 'Success!',
              text2: 'Calories updated successfully',
              type: 'success'
            });
          })
          .catch(err => {
            console.log(err)
            Toast.show({
              text1: 'Error',
              text2: 'Error updating calories, try again later!',
              type: 'error'
            });
          })
      }
    const handleCalories = () => {
      console.log('calories')
    }

return(
    <View style = {styles.container}>

        <Image
            style={styles.topImage}
            source={runImage}
        />
        <TouchableOpacity onPress={() => props.navigation.navigate('Exercise')}>
            <Icon name="arrowleft" style={styles.arrowLeft}/>
        </TouchableOpacity>

        <View style={styles.contentContainer}>
            <View style = {styles.formContainer}>

                <View style = {styles.textContainer} > 
                    <Text style = {styles.text1} > Running </Text>
                </View>
        
                <View style = {styles.textContainer}>
                    <Text style = {styles.text2}>How long did you run today?</Text>
                </View>
                
                <View style = {styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => {
                            setTime(parseFloat(text) || '')
                            onChangeSetRun(parseFloat(text))
                          }}  
                        placeholder="Input in minutes"
                        value={String(time)}
                    />
                </View>

                <View style = {styles.textContainer}>
                    <Text style = {styles.text3}>Calories Burned:<Text style={{fontWeight: 'bold'}}>{calorieBurn}</Text>
                    </Text>
                </View>

                <View style = {styles.inputContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleUpdateCalories()}
                    > 
                        <Text style={styles.buttonText}>Update Calories Burned </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    </View>
    )
}

export default withContext(ExerciseRun)