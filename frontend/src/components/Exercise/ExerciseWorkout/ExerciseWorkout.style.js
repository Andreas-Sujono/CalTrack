
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    topImage:{
        position: 'absolute',
        top: 70,
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
    },
    formContainer:{
        width: '80%'
    },
    textContainer:{
        alignItems: 'flex-start'
    },
    text1:{
        fontWeight: 'bold',
        fontSize: 40,
        color: "rgba(51, 51, 51, 255)",
        marginTop: 30,
        marginLeft:-20,
    },
    text2:{
        fontWeight: "bold",
        fontSize: 20,
        color: "rgba(51, 51, 51, 255)",
        marginTop:80,
    },
    text3:{
        fontSize: 14,
        color: "rgba(75, 75, 75, 255)",
        marginTop:30,
    },

    text4:{
        fontWeight: "bold",
        fontSize: 20,
        color: "rgba(51, 51, 51, 255)",
        marginTop:20,
    },

    inputContainer:{
        width: '100%',
        marginTop:10,
    },
    textInput:{
        alignItems: "flex-start",
        paddingStart: 15,
        width: 190,
        height: 35,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "rgba(235, 235, 242, 255)",
        backgroundColor: "rgba(252, 252, 255, 255)"
    },
    button:{
        
        backgroundColor: "rgba(172, 165, 248, 255)",
        borderRadius: 8,
        width: 264,
        height: 40,
        paddingTop: 5,
        marginTop: 10,
    },
    buttonText:{
        fontSize: 14,
        letterSpacing:1.2,
        color: 'rgba(255, 255, 255, 255)',
        textAlign:'center',
        marginTop:5
    },

    
})

export default styles;