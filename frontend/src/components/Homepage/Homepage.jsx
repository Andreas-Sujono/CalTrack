import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {
    PieChart,
} from 'react-native-chart-kit'
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
    let [newsData, setNewsData] = useState([])
    let [caloriesBurnt, setCaloriesBurnt] = useState(0)
    let [caloriesGained, setCaloriesGained] = useState(0)
    let [caloriesGainedWeek, setCaloriesGainedWeek] = useState(0)
    let [caloriesLimit, setCaloriesLimit] = useState(0)
    let [currentSpending, setCurrentSpending] = useState(0)
    let [budget, setBudget] = useState(0)

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    const {state} = props.context

    useEffect(() => {
        // getNewsData()
        getHomepageData()
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
              setCaloriesLimit(res.caloriesGain * 2)
              setCurrentSpending(res.spendingInAWeek)
              setBudget(state.userDetails.budget)
            })
            .catch(err => console.log(err))
    }

    const getNewsData = () => {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&category=health&' +
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


    const chartData = [
        { name: 'Consumed', population: 250, color: '#ACA5F8', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Remaining', population: 100, color: '#F0F3F4', legendFontColor: '#7F7F7F', legendFontSize: 15 },
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
                <Text style={styles.title}>You have burnt <Text style={[styles.textBold, {color: '#7C73E0'}]}>520</Text> Calories today</Text>
                <Image
                    style={styles.topImage}
                    source={homepageImage}
                />
            </View>
            <View style={styles.chartContainer}>
                <View style={styles.eachChart}>
                    <Text style={styles.chartTitle}>Calories</Text>
                    <PieChart
                        data={chartData}
                        width={Dimensions.get('window').width - 20}
                        height={150}
                        chartConfig={chartConfig}
                        accessor="population"
                        backgroundColor="transparent"
                        paddingLeft="15"
                        hasLegend = {true}
                        style={{
                            maxWidth: '50%',
                            flexWrap: 'wrap'
                        }}
                    />
                </View>
                <View style={styles.eachChart}>
                    <Text style={styles.chartTitle}>Spending</Text>
                    <PieChart
                        data={chartData}
                        width={Dimensions.get('window').width - 20}
                        height={150}
                        chartConfig={chartConfig}
                        accessor="population"
                        backgroundColor="transparent"
                        paddingLeft="15"
                        hasLegend = {true}
                    />
                </View>
            </View>

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