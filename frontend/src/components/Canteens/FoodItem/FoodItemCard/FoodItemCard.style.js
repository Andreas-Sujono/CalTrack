
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    boxContainer:{
        maxWidth: 280,
        minHeight: '90%',
        maxHeight: '98%',
        borderRadius: 24,
        backgroundColor: "#5C4DB1",
        marginRight:20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },
    imageContainer:{
        width: '100%',
        minWidth: 200,
        height: '100%',
        maxHeight: 180,
        borderRadius: 15,
        marginTop: 20, marginBottom:20,
    },

    title:{
        fontWeight: "bold",
        fontSize: 26,
        color: "white",
        marginBottom:10,
        textAlign: 'center'
    },
    desc:{
        fontSize: 18,
        color: "rgba(255, 255, 255, 0.8)",
        marginTop: 0,
    },
    button:{
        padding: 10,
        width: '100%',
        backgroundColor: '#ACA5F8',
        borderRadius: 22
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }

})

export default styles;