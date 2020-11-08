
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
        paddingTop:40
    },
    title:{
        fontSize: 22,
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
        borderBottomColor:'whitesmoke', // if you need 
        borderBottomWidth:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    chartTitle:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize:18,
        textAlign: 'center'
    },
    legend:{
    },
    colorChart:{
        backgroundColor: '#ACA5F8',
        width: 14,
        height: 14,
        borderRadius: 7,
        marginRight: 10,
    },
    whiteChart:{
        backgroundColor: '#E2E2E2',
        width: 14,
        height: 14,
        borderRadius: 7,
        marginRight: 10,
    },
    newsContainer:{
        paddingLeft:20,
        paddingRight:20,
        paddingBottom: 50
    },


    warning:{
        textAlign: 'center'
    },


    textBold: {fontWeight: 'bold'},
    link: {color: '#40A3FF'}
})

export default styles;
