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
    let defaultImage = 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png'
    let desc = props.desc || ''
    desc = desc.slice(0,50)
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{
                    uri: props.image || defaultImage
                }}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.desc}>{desc}...</Text>
            </View>
            
        </View>
    );
}

export default NewsCard;