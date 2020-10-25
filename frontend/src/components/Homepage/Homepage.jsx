import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import {
    PieChart,
} from 'react-native-chart-kit'

import NewsCard from './NewsCard'

import homepageImage from 'assets/images/homepageImage.png'

import styles from './Homepage.style'

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
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>

            </View>
          
        </ScrollView>
    );
}

export default Homepage;