import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './Canteen.style'

export default () => {
  return (
    <View style = {styles.container} >
      <View style = {styles.container2} >
      <Text style = {styles.container3} > Where would {"\n"} you like to eat ? </Text>
    </View>

    <Image style = {styles.container4}
    source = {{uri: "https://pikamemo.com/wp-content/uploads/2020/08/undraw_special_event_4aj8-640x360.png", }}
    />
    <View style = {styles.container5}>
    <TouchableOpacity style = {styles.container6}>
      <Image style = {styles.container7}
      source = {{ uri: "https://burpple-1.imgix.net/foods/3b8459642ef0572ab941404317_original.?w=420&dpr=1& fit=crop&q=80&auto=format", }}
    />
    <View style = {styles.container8} >
    <Text style = {styles.container9} > Quad Cafe </Text>
    <Text style = {styles.container10} > 60 Nanyang Drive {"\n"} Singapore 637551 </Text>
    </View>
    </TouchableOpacity>
    </View>
    <TouchableOpacity style = {styles.container11} >
    <Image style = {styles.container12}
    source = {{uri: "https://sg1-cdn.pgimgs.com/listing/20968719/UPHO.95379376.V800/Koufu-the-South-Spine-NTU-Boon-Lay-Jurong-Tuas-Singapore.jpg", }}
    />
    <View style = {styles.container40} >
    <Text style = {styles.container13} > South Spine </Text>
    <Text style = {styles.container14} > 60 Nanyang Drive {"\n"} Singapore 637551 </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.container15} >
    <Image style = {styles.container16}
    source = {{uri: "https://www.ntu.edu.sg/has/FnB/PublishingImages/Canteen_14_1_280x180.png", }}
    />
    <View style = {styles.container17} >
    <Text style = {styles.container18} > Canteen 14 </Text>
    <Text style = {styles.container19} > 60 Nanyang Drive {"\n"} Singapore 637551 </Text>
    </View>
    </TouchableOpacity>
    
    <TouchableOpacity style = {styles.container20} >
      <Image style = {styles.container21}
      source = {
        {
          uri: "https://enewsletter.ntu.edu.sg/ntulink/Jun-Aug%202016/PublishingImages/DUNKIN%20055-VVS-NTU_NorthSpine-10926-Edit(LO).jpg"}
      }
      />
      <View style = {styles.container22} >
      <Text style = {styles.container23} > North Spine </Text>
      <Text style = {styles.container24} > 60 Nanyang Drive {"\n"} Singapore 637551 </Text>
      </View>
    </TouchableOpacity>
    
    <View style = {styles.container25} >
    
    <View style = {styles.container26} >
      <View style = {styles.container27} >    
      {/* some svg code thing*/}
      <Image style = {styles.container28}
      source = {{uri: "https://toppng.com/uploads/preview/home-icon-home-house-icon-house-icon-free-11553508857ouiuhg9nsa.png",}}/>
      <Text style = {styles.container29} > Home </Text>
    </View>
    
    <TouchableOpacity style = {styles.container30} >
      <View style = {styles.container31} >

      <Image style = {styles.container32}
      source = {{uri: "https://icon-library.com/images/food-and-drink-icon/food-and-drink-icon-15.jpg",}}/>
      <Text style = {styles.container33} > Canteens </Text>
      </View>
    </TouchableOpacity>

    <View style = {styles.container34} >
      {/* <Path /> {Path is not supported. It can be exported as Svg} */ }
      <Image style = {styles.container35}
      source = {{uri: "https://www.pinclipart.com/picdir/middle/70-700269_28-collection-of-dumbbell-clipart-transparent-dumbbells-icon.png",}}/>
      <Text style = {styles.container36} > Exercise </Text>
    </View>

    <View style = {styles.container37} >
      {/* <Path /> {Path is not supported. It can be exported as Svg} */ }
      <Image style = {styles.container38}
      source = {{uri: "https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png"}}
      />
      <Text style = {styles.container39} > Profile </Text>
    </View>
    
    </View>
    </View>
    </View>

  );
};
