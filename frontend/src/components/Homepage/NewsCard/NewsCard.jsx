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
                    uri: props.image
                }}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.desc}>{props.desc}</Text>
            </View>
            
        </View>
    );
}

export default NewsCard;