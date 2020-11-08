import React from 'react';
import {useState, useEffect }from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import CacheStore from 'react-native-cache-store';
import Toast from 'react-native-toast-message';
import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios'

import profileImage1 from 'assets/profiles/profileImage1.png'
import backgroudImage from 'assets/images/profileBackgroundImage.png'
import Loading from 'components/Loading'

import { LineChart} from "react-native-chart-kit";
import styles from './Main.style';
import { withContext } from 'Context'
import {API_ENDPOINT} from 'api/constant'

const Profile = (props) => {
  const [age, setAge] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [goalweight, setGoalWeight] = React.useState('');
  const [goaldate, setGoalDate] = React.useState('');
  const [budget, setBudget] = React.useState('');
  const [sex, setSex] = useState('')
  const [activity, setActivity] = useState(0)
  const [bmi, setBmi] = useState('');
  const [showCalender, setShowCalender] = useState(false);
  const [caloryHistorydata, setCaloryHistoryData] = useState([0,0,0,0,0,0,0])
  const [spendingHistorydata, setSpendingHistoryData] = useState([0,0,0,0,0,0,0])
  const [isLoading, setIsLoading] = useState(false)

  const startTutorial = props.route?.params?.startTutorial;
  const startTutorialAgain = props.route?.params?.startTutorialAgain;

  const {state} = props.context

  useEffect(() => {
    getProfileData()
    getHistoryData()
    if(startTutorial || startTutorialAgain)
      Toast.show({
        text1: startTutorial ? 'Hello, ' : 'Welcome back!',
        text2: 'Please fill your profile, before you continue!',
        type: 'success'
      });
  }, [props.route?.params])

  const onChangeSetBmi = (weight, height) => {
    if(!weight || !height) return
    weight = parseFloat(weight)
    height = parseFloat(height) / 100
    return setBmi( (weight && height) ? (weight/(height*height)).toFixed(2) : 0);
  }

  const formatDate = (date) => {
    if(date instanceof Date)
      return date.toLocaleDateString()
    return 'dd/mm/yy'
  }

  const validateForm = () => {
    let isValidated = true;
    let errorMessage = ''

    let numReg = /^\d+\.{0,1}\d*$/;

    //required 
    if(!age || !height || !weight || !goalweight || !goaldate || !budget){
      isValidated = false
      errorMessage = "Please fill all the field"
    }
    else if(!numReg.test(height)){
      isValidated = false
      errorMessage = "Please fill your correct height"
    }
    else if(!numReg.test(weight)){
      isValidated = false
      errorMessage = "Please fill your correct weight"
    }
    else if(!numReg.test(goalweight)){
      isValidated = false
      errorMessage = "Please fill your correct goal weight"
    }
    else if(!numReg.test(budget)){
      isValidated = false
      errorMessage = "Please fill your correct goal budget"
    }

    if(!isValidated){
      Toast.show({
        text1: 'Error',
        text2: errorMessage,
        type: 'error'
      });
    }

    return isValidated
  }

  const updateProfileLocalState = (res) => {
    props.context.updateState("userDetails", res)
    setAge(res.age || '')
    setWeight(res.weight || '')
    setHeight(res.height || '')
    setSex(res.sex || 'male')
    setGoalWeight(res.goalWeight || '')
    setGoalDate(new Date(res.goalDate) || '')
    setBudget(res.budget || '')
    setActivity(res.activity || 0)
    onChangeSetBmi(res.weight, res.height)
  }

  const getProfileData = async () => {
    setIsLoading(true)
    await axios.get(`${API_ENDPOINT}/user/userDetails`, { headers: {"Authorization" : `Bearer ${state.token}`} })
      .then(res => res.data.data)
      .then(res => {
        //if success
        console.log(res)
        updateProfileLocalState(res)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }

  const handleUpdateProfile = async () => {
    if(!validateForm()) return

    let data = {
      age,
      weight,
      height,
      goalWeight: goalweight,
      goalDate: goaldate,
      budget,
      sex,
      activity
    }
    console.log('data passed: ', data)
    await axios.put(`${API_ENDPOINT}/user/userDetails`, data, { 
      headers: {"Authorization" : `Bearer ${state.token}`} 
    })
    .then(res => res.data.data)
    .then(res => {
      //if success
      console.log(res)
      updateProfileLocalState(res)
      Toast.show({
        text1: 'Success!',
        text2: 'Sucess updating profile',
        type: 'success'
      });
    })
    .catch(err => {
      console.log(err)
      Toast.show({
        text1: 'Error',
        text2: 'Error updating profile, try again later!',
        type: 'error'
      });
    })
  }

  const getHistoryData = async () => {
    await axios.get(`${API_ENDPOINT}/consumption/history`, { headers: {"Authorization" : `Bearer ${state.token}`} })
      .then(res => res.data.data)
      .then(res => {
        //if success
        console.log(res)
        setCaloryHistoryData(res.calories)
        setSpendingHistoryData(res.spending)
      })
      .catch(err => console.log(err))
  }

  const health = (bmi && (bmi < 24.9)) && (bmi > 18.5);
  const overweight = bmi && bmi >24.9;
  const underweight = bmi && bmi <18.5;

  const labels = [
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT',
    'SUN',
  ];

  const logout = () => {
    CacheStore.remove('auth')
    .then((res) => {
        props.context.updateState('isLoggedIn', false)
        props.context.updateState('token', '')
        props.context.updateState('userAccountId', null)
        props.context.updateState('userDetailsId', null)
        props.navigation.navigate('Login')
    })
    .catch((err) => {
      console.log(err);
      console.log('error while removing cache');
    });
  }

  if(isLoading){
    return <Loading isFullPage={true}/>
  }

  return (
    <ScrollView> 
      <View style = {{
      "alignItems": "flex-start",
      "flex": 1,
      backgroundColor: 'white',
    }}> 
        <View style = {styles.titleContainer}>
          <View style = {styles.profileContainer}>
            {/* <Image style={styles.profileImage} source={profileImage1}/> */}
            <Text style = {styles.title} >Profile</Text>
          </View>
          <Image source={backgroudImage} style={styles.backgroudImage}/> 
        </View>

        <Text style = {styles.text1} > Age </Text>
        <View style = {styles.inputContainer}>
          <TextInput 
              style = {styles.inputText} 
              onChangeText={text => setAge(parseInt(text) || '')}
              placeholder='input here'
              value={String(age)}/>
        </View> 

        <Text style = {styles.text1} > Sex </Text>
        <View style = {[styles.inputContainer, {borderWidth: 1, borderColor: 'rgba(235, 235, 242, 150)', borderRadius: 8}]}>
          <Picker
            selectedValue={sex}
            onValueChange={(itemValue, itemIndex) =>
              setSex(itemValue)
            }
            style = {[styles.inputText]} 
            itemStyle={{fontSize:14}}
          >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Prefer not to tell" value="null" />
          </Picker>
        </View> 

        <Text style = {styles.text1} > Height (in Cm) </Text>
        <View style = {styles.inputContainer}>
          <TextInput 
            style = {styles.inputText} 
            onChangeText={text => {
              setHeight(parseFloat(text) || '')
              onChangeSetBmi(weight, parseFloat(text))
            }}
            placeholder='input here (in cm)'
            value={String(height)}/>
        </View>
         
        <Text style = {styles.text1} > Weight (in Kg) </Text>
        <View style = {styles.inputContainer}>
        <TextInput 
            style = {styles.inputText} 
            onChangeText={text => {
              setWeight(parseFloat(text) || '')
              onChangeSetBmi(parseFloat(text), height)
            }}
            placeholder='input here (in kg)'
            value={String(weight)}/>
        </View> 

        <Text style = {[styles.text1, {left:4}]} >
          BMI: <Text style={{fontWeight: 'bold'}}>{bmi}
        </Text> 
          {health ? <Text style = {styles.alertText1} > You are normal weight! </Text> : null}
          {overweight ? <Text style = {styles.alertText2} > You are overwright! </Text> : null}
          {underweight ? <Text style = {styles.alertText3} > You are underweight! </Text> : null}
        </Text>
        {/* <View style = {styles.inputContainer}>
          <Text style = {styles.inputText}> {bmi} </Text>
          <TouchableOpacity style={styles.button}
                            onPress={onPress}>
            <Text>show BMI</Text>
          </TouchableOpacity>
        </View>    */}
         
        <Text style = {styles.text1} > Goal Weight (in Kg) </Text>
        <View style = {styles.inputContainer}>
          <TextInput 
            style = {styles.inputText} 
            onChangeText={text => setGoalWeight(parseFloat(text) || '')}
            placeholder='input here (in kg)'
            value={String(goalweight)}/>
        </View>  
        <Text style = {styles.text1} > Goal Date </Text>
        <View style = {styles.inputContainer}>
          {/* <TextInput 
            style = {styles.inputText} 
            onChangeText={text => onChangeText5(text)}
            placeholder='input here (dd/mm/yyyy)'
            value={goaldate}/> */}

            <TouchableWithoutFeedback onPress={() => setShowCalender(true)}>
              <View style={styles.inputText}>
                <Text style={{color: goaldate ? 'black' : '#A8A9B7'}}>{formatDate(goaldate)}</Text>
              </View>
            </TouchableWithoutFeedback>
            {
              showCalender &&
              <DateTimePicker
                testID="dateTimePicker"
                value={goaldate || new Date()}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  setShowCalender(false)
                  const currentDate = selectedDate || goaldate;
                  setGoalDate(currentDate)
                }}
              />
            }
            
        </View>

        <Text style = {styles.text1} > How often you do exercise? </Text>
        <View style = {[styles.inputContainer, {borderWidth: 1, borderColor: 'rgba(235, 235, 242, 150)', borderRadius: 8}]}>
          <Picker
            selectedValue={String(activity)}
            onValueChange={(itemValue, itemIndex) =>
              setActivity(parseInt(itemValue))
            }
            style = {[styles.inputText]} 
            itemStyle={{fontSize:14}}
          >
            <Picker.Item label="Sedentary (little to no exercise)" value="0" />
            <Picker.Item label="Light exercise (1-3 days per week)" value="1" />
            <Picker.Item label="Moderate exercise (3–5 days per week)" value="2" />
            <Picker.Item label="Heavy exercise (6–7 days per week)" value="3" />
          </Picker>
        </View>  

        
        <Text style = {styles.text1} > Weekly Budget </Text>
        <View style = {styles.inputContainer}>
          <TextInput 
            style = {styles.inputText} 
            onChangeText={text => setBudget(parseFloat(text) || '')}
            placeholder='input here (S$)'
            value={String(budget)}/>
        </View>

          <View style = {styles.inputContainer}>
            <TouchableOpacity onPress={() => handleUpdateProfile()}>
              <View style={styles.updateButton}>
              <Text style={{fontSize:16, color: 'white', textAlign: 'center'}}>Update profile</Text>
              </View>
            </TouchableOpacity>
          </View>

        <View style={styles.line}/>

        <View style={styles.historyContainer}>
          <Text style = {styles.text2} > Calorie Intake This Week</Text>
          <LineChart
            data={{ labels: labels,
                    datasets: [{ data: caloryHistorydata }],}}
            width={Dimensions.get('window').width - 10}
            height={220}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(124,115, 224, ${opacity})`,
              // abelColor: (opacity = 1) => `rgba(255, 210, 0, ${opacity})`,
              style: { borderRadius: 16, },
              propsForDots: { r: '6', strokeWidth: '2', stroke: '#ffffff', }, }}
            bezier
            style={{ marginVertical: 5, borderRadius: 15, }}
          />
        </View>

        <View style={styles.historyContainer}>
          <Text style = {styles.text2} > Budget Used This Week</Text>
          <LineChart
            data={{ labels: labels,
                    datasets: [{ data: spendingHistorydata }],}}
            width={Dimensions.get('window').width - 10}
            height={220}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(124,115, 224, ${opacity})`,
              // abelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: { borderRadius: 16, },
              propsForDots: { r: '6', strokeWidth: '2', stroke: '#ffffff', }, }}
            bezier
            style={{ marginVertical: 5, borderRadius: 15, }}
          />
        </View>

        <View style={styles.line}/>

        <TouchableOpacity style={styles.logoutContainer} onPress={() => logout()}>
          <View>
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </TouchableOpacity>

       
      </View>
    </ScrollView>
  
  );
  };
  
  

export default withContext(Profile);