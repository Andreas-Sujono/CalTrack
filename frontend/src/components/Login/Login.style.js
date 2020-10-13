
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex:1,
        alignItems: 'center',
    },
    backgroundImage:{
        position: 'absolute',
        top: 0,
        left:0,
        width: '100%',
        height:270
    },
    topImage:{
        marginTop:70
    },

    contentContainer:{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    formContainer:{
        alignItems: 'center',
        padding: 22,
        width: 318,
        minHeight: 336,
        borderRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 255)',
        marginTop:230
    },
    textContainer:{
        alignItems: 'center'
    },
    text1:{
        fontWeight: 'bold',
        fontSize: 28,
        color: 'rgba(43, 43, 43, 255)',
    },
    text2:{
        fontSize: 14,
        color: 'rgba(43, 43, 43, 255)',
    },

    inputContainer:{
        width: '100%',
        marginTop:20,
    },
    textInput:{
        width: '100%',
        height: 35,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(235, 235, 242, 255)',
        backgroundColor: 'rgba(252, 252, 255, 255)',
        padding:6,
        paddingLeft:14,
    },
    button:{
        backgroundColor: 'rgba(64, 163, 255, 255)',
        borderRadius: 8,
        width: '100%',
        height: 35,
        marginTop:14
    },
    buttonText:{
        fontSize: 16,
        color: 'rgba(255, 255, 255, 255)',
        textAlign:'center',
        marginTop:5
    },

    signUpContainer:{
        marginTop: 14,
        flex:1,
        flexDirection: 'row'
    },
    signUpText:{
        fontSize: 12,
        color: 'rgba(33, 33, 33, 255)'
    },
    linkText:{
        fontSize:12,
        color: 'rgba(64, 163, 255, 255)',
    }
})

export default styles;
