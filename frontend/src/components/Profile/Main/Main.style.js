import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    profileImage: {
        "marginStart": 9,
        "width": 113,
        "height": 113
      },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 160,
        backgroundColor: '#F7F7F7',
    },
    profileContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      maxWidth: '80%',
    },
    backgroudImage: {
      "width": 230,
      "height": 128,
      position: 'absolute',
      top:20,
      right:-80
    },
    title: {
      "fontWeight": "bold",
      "fontSize": 30,
      "letterSpacing": 0.5,
      "color": "rgba(0, 0, 0, 230)",
      "marginTop": 40,
      marginLeft:20
    },
    
    
    textContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    inputContainer: {
      width: '80%',
      marginTop:12,
      marginStart: 20
    },
    text1: {
      "fontSize": 18,
      "color": "rgba(0, 0, 0, 255)",
      "marginLeft": 20,
      "marginTop": 20
    },
    inputText: {
      "width": "100%",
      "height": 35,
      "borderRadius": 8,
      "borderWidth": 1,
      "borderColor": "rgba(235, 235, 242, 150)",
      "backgroundColor": "rgba(252, 252, 255, 255)",
      "padding":6,
      "paddingLeft":14,
      
    },
    
    alertContainer: {
      "flexDirection": "row",
      "alignItems": "flex-start",
      "marginStart": 12,
      "marginTop": 9,
      "opacity": 0.72
    },
    alert1: {
      "alignItems": "flex-start",
      "width": 18,
      "height": 18,
      "borderRadius": 12,
      "backgroundColor": "rgba(76, 215, 145, 255)",
      "marginStart": 15
    },
    alertText1: {
      "fontSize": 15,
      "color": "rgba(76, 215, 145, 255)",
      "marginStart": 5,
      
    },
    alert2: {
      "alignItems": "flex-start",
      "width": 18,
      "height": 18,
      "borderRadius": 12,
      "backgroundColor": "rgba(153, 0, 0, 255)",
      "marginStart": 15
    },
    alertText2: {
      "fontSize": 15,
      "color": "rgba(153, 0, 0, 255)",
      "marginStart": 5,
      
    },
    alert3: {
      "alignItems": "flex-start",
      "width": 18,
      "height": 18,
      "borderRadius": 12,
      "backgroundColor": "rgba(255, 178, 102, 255)",
      "marginStart": 15
    },
    alertText3: {
      "fontSize": 15,
      "color": "rgba(255, 178, 102, 255)",
      "marginStart": 5,
      
    },
    historyContainer: {
      flex: 1,
      width: '100%',
      "alignItems": "center",
      justifyContent: 'center',
      "marginTop": 30
    },
    history1: {
      "alignItems": "flex-start",
      "paddingStart": 19,
      "paddingTop": 17,
      "marginStart": 12,
      "opacity": 0.48,
      "width": 330,
      "height": 323,
      "borderRadius": 24,
      // "backgroundColor": "rgba(182, 176, 239, 255)"
    },
    history2: {
      "alignItems": "flex-start",
      "paddingStart": 19,
      "paddingTop": 17,
      "marginStart": 12,
      "marginTop": 10,
      "opacity": 0.48,
      "width": 330,
      "height": 323,
      "borderRadius": 24,
      "backgroundColor": "rgba(172, 165, 248, 255)"
    },
    text2:  {
      "fontWeight": "normal",
      "fontSize": 20,
      "letterSpacing": -0.02,
      "color": "black",
      opacity: 0.8,
      textAlign: 'center',
      marginBottom:12,
    },
    text3: {
      "fontWeight": "bold",
      "fontSize": 25,
      "letterSpacing": -0.02,
      "color": "rgba(255, 253, 253, 255)",
      "marginTop": 14
    },
    button: {
      alignItems: "center",
      backgroundColor: "#B6B0EF",
      "marginTop": 10,
      color: "#ffffff",
      padding: 10,
      "borderRadius": 8,
    },
    line:{
      width: '100%',
      height:1,
      backgroundColor: 'lightgrey',
      marginTop:20
    },
    logoutContainer:{
      marginTop:20,
      marginBottom:30,
      marginLeft:20,
      backgroundColor: '#FF597E',
      padding: 8,
      borderRadius: 8,
      width: 150
    },
    logoutText:{
      color: 'white',
      textAlign: 'center',
      fontSize: 18
    }
})

export default styles;