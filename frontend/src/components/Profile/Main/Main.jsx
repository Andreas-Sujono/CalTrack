import React from 'react';
import {useState }from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import profileImage1 from 'assets/profiles/profileImage1.png'
import backgroudImage from 'assets/images/profileBackgroundImage.png'

import { LineChart} from "react-native-chart-kit";
import styles from './Main.style';

const Profile = () => {
  const [age, onChangeText1] = React.useState('');
  const [height, onChangeText2] = React.useState('');
  const [weight, onChangeText3] = React.useState('');
  const [goalweight, onChangeText4] = React.useState('');
  const [goaldate, onChangeText5] = React.useState('');
  const [budget, onChangeText6] = React.useState('');
  
  const [bmi, setBmi] = useState('Calculated BMI');
  const onPress = () => setBmi(weight/(height*height).toFixed(2));

  const health = (bmi < 24.9) &&  (bmi > 18.5);
  const overweight = bmi >24.9;
  const underweight = bmi <18.5;

  const labels = [
    'SUN',
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT',
  ];
  const data = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ];

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
            <Text style = {styles.title} >Profiles</Text>
          </View>
          <Image source={backgroudImage} style={styles.backgroudImage}/> 
        </View>

        <Text style = {styles.text1} > Age </Text>
        <View style = {styles.inputContainer}>
          <TextInput 
              style = {styles.inputText} 
              onChangeText={text => onChangeText1(text)}
              placeholder='input here'
              value={age}/>
        </View> 

        <Text style = {styles.text1} > Height </Text>
        <View style = {styles.inputContainer}>
          <TextInput 
            style = {styles.inputText} 
            onChangeText={text => onChangeText2(text)}
            placeholder='input here (m)'
            value={height}/>
        </View>
         
        <Text style = {styles.text1} > Weight </Text>
        <View style = {styles.inputContainer}>
        <TextInput 
            style = {styles.inputText} 
            onChangeText={text => onChangeText3(text)}
            placeholder='input here (kg)'
            value={weight}/>
        </View> 

        <Text style = {styles.text1} >
          BMI: <Text style={{fontWeight: 'bold'}}>20.5</Text> 
          {health && <Text style = {styles.alertText1} > You are normal weight! </Text>}
          {overweight && <Text style = {styles.alertText2} > You are overwright! </Text>}
          {underweight && <Text style = {styles.alertText3} > You are underweight! </Text>}
        </Text>
        {/* <View style = {styles.inputContainer}>
          <Text style = {styles.inputText}> {bmi} </Text>
          <TouchableOpacity style={styles.button}
                            onPress={onPress}>
            <Text>show BMI</Text>
          </TouchableOpacity>
        </View>    */}
         
        <Text style = {styles.text1} > Goal Weight </Text>
        <View style = {styles.inputContainer}>
          <TextInput 
            style = {styles.inputText} 
            onChangeText={text => onChangeText4(text)}
            placeholder='input here (kg)'
            value={goalweight}/>
        </View>  
        <Text style = {styles.text1} > Goal Date </Text>
        <View style = {styles.inputContainer}>
          <TextInput 
            style = {styles.inputText} 
            onChangeText={text => onChangeText5(text)}
            placeholder='input here (dd/mm/yyyy)'
            value={goaldate}/>
        </View>
        
        <Text style = {styles.text1} > Weekly Budget </Text>
        <View style = {styles.inputContainer}>
          <TextInput 
            style = {styles.inputText} 
            onChangeText={text => onChangeText6(text)}
            placeholder='input here (S$)'
            value={budget}/>
        </View>

        <View style={styles.line}/>

        <View style={styles.historyContainer}>
          <Text style = {styles.text2} > Calorie Intake This Week</Text>
          <LineChart
            data={{ labels: labels,
                    datasets: [{ data: data }],}}
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
                    datasets: [{ data: data }],}}
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

        <TouchableOpacity style={styles.logoutContainer}>
          <View>
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </TouchableOpacity>

       
      </View>
    </ScrollView>
  
  );
  };
  
  

export default Profile;