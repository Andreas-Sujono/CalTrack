
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
        minWidth: 100,
        maxWidth: 100,
        height: 80,
    },
    content:{paddingLeft: 12, width: '70%'},
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        width: '100%'
    },
    desc:{
        width: '100%'
    }
    
})

export default styles;
