import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        "alignItems": "flex-start",
        "paddingTop": 21,
        "flex": 1,
        backgroundColor: 'white'
    },
    topImage:{
        position: 'absolute',
        top: 55,
        right:-100,
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
        alignItems: 'flex-start',
        marginTop:30,
    },
    textContainer:{
        alignItems: 'flex-start',
    },
    text:{
        fontWeight: 'bold',
        fontSize: 30,
        color: "rgba(92, 77, 177, 255)",
        marginTop: -10,
        marginLeft:20,
    },

})
export default styles;