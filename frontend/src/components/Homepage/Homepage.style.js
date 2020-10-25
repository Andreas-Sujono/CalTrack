
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topContainer:{
        backgroundColor: '#F7F7F7',
        height: 160,
        justifyContent: 'center',
        paddingLeft:20,
        paddingTop:20
    },
    title:{
        fontSize: 20,
    },
    topImage:{
        position: 'absolute',
        top:0,
        right: -80,
        width: 280,
        height: 150,
        resizeMode: 'stretch'
    },
    chartContainer:{
        width: '100%'
    },
    eachChart:{
        borderColor:'whitesmoke', // if you need 
        borderWidth:1,
        // paddingLeft:30
    },
    chartTitle:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize:18,
        textAlign: 'center'
    },
    newsContainer:{
        paddingLeft:20,
        paddingRight:20,
        paddingBottom: 50
    },


    textBold: {fontWeight: 'bold'}
})

export default styles;
