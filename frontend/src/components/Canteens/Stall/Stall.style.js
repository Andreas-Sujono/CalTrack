
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        paddingTop:20
    },
    
    topImage:{
        position: 'absolute',
        top: 35,
        right:0,
    },

    arrowLeft:{
        color: '#7C73E0',
        fontSize:30,
        marginTop:40,
        marginLeft:30
    },

    contentContainer:{
        flex:1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop:30,
    },
    formContainer:{
        width: '80%'
    },
    textContainer:{
        alignItems: 'flex-start',
    },
    text:{
        fontWeight: 'bold',
        fontSize: 30,
        color: "rgba(92, 77, 177, 255)",
        marginTop: -10,
        marginLeft:0,
    },
    boxContainer:{
        width: 335,
        height: 111,
        borderRadius: 21,
        borderWidth: 2,
        borderColor: "rgba(199, 199, 199, 52)",
        backgroundColor: "rgba(255, 255, 255, 255)"
      },

    canteenText:{
        fontWeight: "bold",
        fontSize: 18,
        letterSpacing: 0.42,
        color: "rgba(59, 59, 59, 255)"
    },
    addressText:{
        fontSize: 11,
        letterSpacing: 0.42,
        color: "rgba(219, 219, 219, 255)",
        marginTop: 5
    },
    recommendedContainer: {
        width: 335,
        height: 107,
        borderWidth: 1,
        borderColor: "rgba(112, 112, 112, 255)",
        backgroundColor: "rgba(255, 255, 255, 255)"
    },
    recommendedText:{
        fontWeight: "bold",
        fontSize: 20,
        color: "rgba(51, 51, 51, 255)"
    }
})

export default styles;