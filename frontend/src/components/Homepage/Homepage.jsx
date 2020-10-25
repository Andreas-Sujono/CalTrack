import React from 'react';
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

import NewsCard from './NewsCard'

import homepageImage from 'assets/images/homepageImage.png'

import styles from './Homepage.style'
import {newsData} from './data'

function Homepage(props) {
    const data = [
        { name: 'Consumed', population: 250, color: '#ACA5F8', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Remaining', population: 100, color: '#F0F3F4', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    ]
    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>Hello, <Text style={styles.textBold}>Andreas</Text></Text>
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
                        data={data}
                        width={Dimensions.get('window').width - 70}
                        height={150}
                        chartConfig={chartConfig}
                        accessor="population"
                        backgroundColor="transparent"
                        paddingLeft="15"
                        hasLegend = {true}
                    />
                </View>
                <View style={styles.eachChart}>
                    <Text style={styles.chartTitle}>Spending</Text>
                    <PieChart
                        data={data}
                        width={Dimensions.get('window').width - 70}
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

function Article(props){
    const {url} = props.route.params
    return(
        <View style={{flex: 1}}>
            <WebView source={{ uri: url }} style={{ marginTop: 20 }} />
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