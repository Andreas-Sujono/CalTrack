import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import styles from './changeProfile.style';

import profileImage1 from 'assets/profiles/profileImage1.png'
import profileImage2 from 'assets/profiles/profileImage2.png'
import profileImage3 from 'assets/profiles/profileImage3.png'
import profileImage4 from 'assets/profiles/profileImage4.png'
import profileImage5 from 'assets/profiles/profileImage5.png'
import profileImage6 from 'assets/profiles/profileImage6.png'

export default () => {
  return (
    <View style = {styles.container} >
      <Image style = {styles.proflie_now}
            source = {profileImage1}/>
      <Text style = {styles.text1} > Change profile photo </Text>
      <View style = {styles.profileContainer1} > 
        <Image style = {styles.profile1}
              source = {profileImage1}/>
        <Image style = {styles.profile2}
              source = {profileImage2}/>
      </View>
      <View style = {styles.profileContainer2} > 
        <Image style = {styles.profile3}
              source = {profileImage3}/>
        <Image style = {styles.profile4}
              source = {profileImage4}/>
      </View>
      <View style = {styles.profileContainer3} > 
        <Image style = {styles.profile5}
              source = {profileImage5}/>
        <Image style = {styles.profile6}
              source = {profileImage6}/>
      </View>
    </View>

  );
};
