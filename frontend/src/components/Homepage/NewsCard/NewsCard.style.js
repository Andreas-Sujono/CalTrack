
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'lightgrey',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden'
    },
    image:{
        width: '100%',
        minWidth: 140,
        maxWidth: 320,
        height: 80,
    },
    content:{paddingLeft: 12},
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        width: '48%'
    },
    desc:{
        width: '48%'
    }
    
})

export default styles;
