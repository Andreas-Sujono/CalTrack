import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

import styles from './NewsCard.style'

function NewsCard(props) {
 
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{
                    uri: 'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/10/381340-Daily-Harvest-reviews-732x549-Feature-732x549.jpg?w=420'
                }}
            />
            <View style={styles.content}>
                <Text style={styles.title}>Daily Harvest reviews</Text>
                <Text style={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>
            
        </View>
    );
}

export default NewsCard;