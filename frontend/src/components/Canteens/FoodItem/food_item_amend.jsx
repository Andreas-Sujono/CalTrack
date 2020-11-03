import styles from './food_item_amend.style';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';


export default () => {
  return (
    <View style = {
      
        styles.container
      
    } >

    <TouchableOpacity><Image style = {
        styles.container1
    }
    source = {{uri: "https://cdn0.iconfinder.com/data/icons/action-states-vol-2-flat/48/Action___States_-_Vol._2-21-512.png" ,}}
    /></TouchableOpacity>

    <View style = {
        styles.container2
    } >
    
    <Text style = {
      
        styles.container3
  
    } > Korean Food </Text>
    </View>
    <Image style = {
        styles.container34
    }
    source = {{uri: "https://www.kindpng.com/picc/m/153-1530782_transparent-exam-png-brunch-png-png-download.png" ,}} 
    />
    <View style = {
        styles.container4
    } >
    <View style = {
        styles.container5
    } > <View style = {
        styles.container6
    } >
    <Text style = {
       styles.container7
    } > 5 SGD </Text>
    </View>
    <View style = {
      styles.container8
    } >
    <Text style = {
      styles.container9
    } > Bibimbap </Text>
    </View>
    </View>
    <View style = {
      styles.container10
    } >
    <Text style = {
      styles.container11
    } > 1000 Cal </Text>
    </View>
    <TouchableOpacity style = {
      styles.container12
    } >
    <TouchableOpacity style = {
      styles.container13
    } >
    <Text style = {
      styles.container14
    } > I ate this! </Text>
    </TouchableOpacity>
    </TouchableOpacity>
    <Image style = {
      styles.container15
    }
    source = {
        {uri: "https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg", } 
    } >
    <View style = {
      styles.container16
    } >
    <View style = {
       styles.container17
    } >
    <View style = {
       styles.container18
    }
    />
    </View>
    </View>
    </Image></View >
    <View style = {
      styles.container19
    } >
    <View style = {
      styles.container20
    } >
    <TouchableOpacity style = {
      styles.container21
    }>
    
    <Image style = {
      styles.container22
    }
    source={{uri: 'https://toppng.com/uploads/preview/home-icon-home-house-icon-house-icon-free-11553508857ouiuhg9nsa.png',}}
    >
    </Image>
    <Text style = {
      styles.container23
    } > Home </Text>
    </TouchableOpacity>
    <TouchableOpacity style = {
      styles.container24
    } >
    <Image style = {
      styles.container25
    } 
      source = {{uri: "https://icon-library.com/images/food-and-drink-icon/food-and-drink-icon-15.jpg",}}
    ></Image>
    
    <Text style = {
      styles.container26
    } > Canteens </Text>
    

    </TouchableOpacity>
    <TouchableOpacity style = {
      styles.container28
    } >

    <Image style = {
      styles.container29
    }
      source = {{uri: "https://www.pinclipart.com/picdir/middle/70-700269_28-collection-of-dumbbell-clipart-transparent-dumbbells-icon.png" ,}}
    />
    <Text style = {
      styles.container30
    } > Exercise </Text>
    </TouchableOpacity>
    <TouchableOpacity style = {
      styles.container31
    } >
    <Text style = {
      styles.container32
    } > Profile </Text>

    <Image style = {
      styles.container33
    }
    source = {{uri: "https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png",}}
    />
    </TouchableOpacity>
    </View>
    </View>
    </View>

  );
};