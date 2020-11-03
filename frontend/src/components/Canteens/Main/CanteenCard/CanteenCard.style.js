
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    boxContainer:{
        marginTop:20,
        marginLeft:-13,
        width: 350,
        height: 111,
        borderRadius: 21,
        borderWidth: 0.8,
        borderColor: "rgba(199, 199, 199, 52)",
        backgroundColor: "rgba(255, 255, 255, 255)"
    },
    imageContainer:{
        marginTop:13,
        marginLeft:10,
        width: 109,
        height: 82,
        borderRadius: 15
    },

    nameText:{
        fontWeight: "bold",
        fontSize: 22,
        letterSpacing: 0.42,
        color: "rgba(59, 59, 59, 255)",
        marginTop: -80,
        marginLeft: 140
    },
    descText:{
        marginLeft:150,
        fontSize: 11,
        letterSpacing: 0.42,
        color: "rgba(177, 175, 175, 255)",
        marginTop: 0

    },
    arrowLeft:{
        color: '#7C73E0',
        fontSize:30,
        marginTop:40,
        marginLeft:30
    }

})

export default styles;