import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { PieChart } from 'react-native-chart-kit'
import { WebView } from 'react-native-webview';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { AppLoading } from 'expo'
import axios from 'axios'

import NewsCard from './NewsCard'

import homepageImage from 'assets/images/homepageImage.png'
import {API_ENDPOINT} from 'api/constant'

import { withContext } from 'Context'

import styles from './Homepage.style'
// import {newsData} from './data'

function Homepage(props) {
    const [newsData, setNewsData] = useState([])
    const [caloriesBurnt, setCaloriesBurnt] = useState(0)
    const [caloriesGained, setCaloriesGained] = useState(0)
    const [caloriesGainedWeek, setCaloriesGainedWeek] = useState(0)
    const [caloriesLimit, setCaloriesLimit] = useState(0)
    const [currentSpending, setCurrentSpending] = useState(0)
    const [budget, setBudget] = useState(0)
    const [showWarning, setShowWarning] = useState(true)


    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    const {state} = props.context

    useEffect(() => {
        props.navigation.navigate('Profile', { screen: 'Profile', 
            params: {
                startTutorialAgain: true
            }
        })

        if(isProfileFilled()){
            getNewsData()
            getHomepageData()
        }
        else{
            console.log('profile has not been filled')
            // props.navigation.navigate('Profile', { Screen: 'Profile', startTutorialAgain: true})
        }
        
    }, [])

    const getHomepageData = async () => {
        await axios.get(`${API_ENDPOINT}/consumption/spending`, { headers: {"Authorization" : `Bearer ${state.token}`} })
            .then(res => res.data.data)
            .then(res => {
              //if success
              console.log(res)
              setCaloriesBurnt(res.caloriesBurnt)
              setCaloriesGained(res.caloriesGain)
              setCaloriesGainedWeek(res.caloriesInAWeek)
              setCaloriesLimit(calculateTargetCalories(state.userDetails.weight, state.userDetails.goalWeight, state.userDetails.height, state.userDetails.age, state.userDetails.sex)) //TEST
              setCurrentSpending(res.spendingInAWeek)
              setBudget(state.userDetails.budget)
            })
            .catch(err => console.log(err))
    }
    
    const calculateTargetCalories = (currentWeight, targetWeight, height, age, sex = 'male') => {
        //BMR Harris-Benedict equations
        // BMR Male (kcal/day) (Metric) = 66.5 + (13.75 × Weight, kg) + (5.003 × Height, cm) - (6.775 × Age)
        // BMR Female (kcal/day) (Metric) = 655.1 + (9.563 × Weight, kg) + (1.850 × Height, cm) - (4.676 × Age)
        // Sedentary (little to no exercise) = BMR × 1.2
        // Light exercise (1-3 days per week) = BMR × 1.375
        // Moderate exercise (3–5 days per week) = BMR × 1.55
        // Heavy exercise (6–7 days per week) = BMR × 1.725
        // Very heavy exercise (twice per day and/or extra heavy workouts) = BMR × 1.9
        return 1000
    }

    const isProfileFilled = () => {
        const {weight, height, age} = state.userDetails
        if(weight === 0 || height === 0 || age === 0){
            return false
        }
        return true
    }

    const getNewsData = () => {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=sg&category=health&' +
          'apiKey=905be364027047889f2247ca6514c172'; //don't share this key, should be hide but too lazy
        axios.get(url)
            .then(res => res.data)
            .then(res => {
                console.log('fetched news API')
                if(res.articles && res.articles?.length){
                    let articles = res.articles.map(item => ({...item, image: item.urlToImage, desc: item.description}))
                    setNewsData(articles)
                }
            })
            .catch(err => console.log(err))
    }


    const caloriesChartData = [
        { name: 'Consumed', population: caloriesGainedWeek, color: '#ACA5F8', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Remaining', population: Math.max(caloriesLimit - caloriesGainedWeek,0), color: '#F0F3F4', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    ]
    const SpendingChartData = [
        { name: 'Consumed', population: currentSpending, color: '#ACA5F8', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Remaining', population: Math.max(budget - currentSpending, 0), color: '#F0F3F4', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    ]
    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
    }

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        <ScrollView style={[styles.container, {fontFamily: 'Poppins_400Regular'}]}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>Hello, <Text style={styles.textBold}>{state.userAccount.fullName}</Text></Text>
                
                    <Text style={styles.title}>You have burnt <Text style={[styles.textBold, {color: '#7C73E0'}]}>{caloriesBurnt}</Text> Calories today</Text>
                
                <Image
                    style={styles.topImage}
                    source={homepageImage}
                />
            </View>
            
            {
                <View style={styles.chartContainer}>
                    <Text style={styles.chartTitle}>Net Calories</Text>
                    <View style={styles.eachChart}>
                        <PieChart
                            data={caloriesChartData}
                            width={Dimensions.get('window').width * 0.5}
                            height={150}
                            chartConfig={chartConfig}
                            accessor="population"
                            backgroundColor="transparent"
                            paddingLeft="15"
                            hasLegend = {false}
                            style={{
                                maxWidth: Dimensions.get('window').width * 0.5,
                            }}
                        />
                        <View style={styles.legend}>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                <View style={styles.colorChart}></View>
                                <Text>{caloriesGainedWeek} Cal Net </Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                <View style={styles.whiteChart}></View>
                                <Text>{caloriesLimit - caloriesGainedWeek} Cal Remaining</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.chartTitle}>Spending</Text>
                    <View style={styles.eachChart}>
                        <PieChart
                            data={SpendingChartData}
                            width={Dimensions.get('window').width * 0.5}
                            height={150}
                            chartConfig={chartConfig}
                            accessor="population"
                            backgroundColor="transparent"
                            paddingLeft="15"
                            hasLegend = {false}
                            style={{
                                maxWidth: Dimensions.get('window').width * 0.5,
                            }}
                        />
                        <View style={styles.legend}>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                <View style={styles.colorChart}></View>
                                <Text>{currentSpending} SGD Spent</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                <View style={styles.whiteChart}></View>
                                <Text>{budget - currentSpending} SGD Remaining</Text>
                            </View>
                        </View>
                    </View>
                </View> 
            }

            <View style={styles.newsContainer}>
                <Text style={[styles.chartTitle, {fontSize: 24, textAlign: 'left'}]}>News of the day</Text>
                {
                    newsData.map((news, idx) => 
                        <TouchableOpacity onPress={() => {
                            console.log('clicked')
                            props.navigation.navigate('Article', {url: news.url})
                        }}
                        key={idx}
                        >
                            <NewsCard image={news.image} title={news.title} desc={news.desc}/>
                        </TouchableOpacity>
                    )
                }
            </View>

        </ScrollView>
    );
}
Homepage = withContext(Homepage)

function Article(props){
    const {url} = props.route.params
    return(
        <View style={{flex: 1}}>
            <WebView source={{ uri: url }} style={{ marginTop: 0 }} />
        </View>
    )
}

const Stack = createStackNavigator();

function NavStack(){
    return(
        <>
            <Stack.Navigator initialRouteName="Homepage" screenOptions= {{
                animationEnabled: true,
                gestureEnabled: true,
                gestureDirection: 'horizontal'
                }}
                animation="fade"
            >
                <Stack.Screen 
                    options={{ headerShown: false }} 
                    name="Homepage" 
                    component={Homepage} 
                />
                <Stack.Screen 
                    options={{ headerShown: true }} 
                    name="Article" 
                    component={Article} 
                />
            </Stack.Navigator>
        </>
    )
}
export default NavStack;