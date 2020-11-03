import styles from './FoodRecommendation.style';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

export default () => {
  return (
    <View style = { styles.container } >

      <TouchableOpacity>
        <View>
          <Image style = {styles.container1}
            source = {{uri: "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/38-512.png" ,}}
          />
        </View>
      </TouchableOpacity>

      <View style = {styles.container2} >
        <Text style = {styles.container3} >
          <Text style = {
            styles.container4
          } > You are currently looking at menu item from </Text>
          <Text style={{"fontFamily":"Poppins","fontWeight":"bold","fontSize":20,"color":"rgba(92, 77, 177, 255)"}}>Quad Cafe</Text > 
        </Text>
      </View>

      <Image style = {styles.container5}
        source = {
          {uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg", }
        }
      />
      <Text style = {
        styles.containesr6
      } > A46 Spaghetti Seafood Aglio Olio </Text>

      <Text style = {
        styles.container7
      } > $7 .00 </Text>

      <Text style = {
        styles.container8
      } > 500 kcal </Text>

      <View style = {styles.container9} > 
        <TouchableOpacity style = {styles.container10} >
          <Image style = {
            styles.container11
          }
          source = {{uri: "https://img1.pnghut.com/9/9/14/DPNjhtRpkN/public-domain-area-text-symbol-pixabay.jpg" ,}}
          />
        </TouchableOpacity>

        <TouchableOpacity style = {styles.container13} >
          <Image style = {
            styles.container14
          }
          source = {{uri: "https://w7.pngwing.com/pngs/555/667/png-transparent-information-technology-email-green-tick-miscellaneous-angle-service.png" ,}}
          />
        </TouchableOpacity>
      </View>

    </View>

  );
};