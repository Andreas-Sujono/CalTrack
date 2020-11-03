
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    
    topImage:{
        position: 'absolute',
        top: 50,
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
        marginTop:50,
    },
    formContainer:{
        width: '80%'
    },
    textContainer:{
        alignItems: 'flex-start'
    },
    text1:{
        fontWeight: 'bold',
        fontSize: 30,
        color: "rgba(51, 51, 51, 255)",
        marginTop: 30,
        marginLeft:-20,
    },
    text2:{
        fontWeight: 'bold',
        fontSize: 30,
        color: "rgba(51, 51, 51, 255)",
        marginTop: 0,
        marginLeft:-20,
    },
    imageContainer1:{
        position: 'absolute',
        top: 120,
        left: -30,
    },
    imageContainer2:{
        top: 200,
        left: -30,
    },
    imageContainer3:{
        top: -170,
        right: -160,
    },
    imageContainer4:{
        top: -167,
        right: -150,
    },

    
})

export default styles;