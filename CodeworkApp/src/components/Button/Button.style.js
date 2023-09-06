import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    btn:{
        flexDirection: 'row', 
        // alignItems: 'center', 
        // marginBottom: 16 ,
        backgroundColor:'#ff6655',
        margin:10,
        padding:10,
        width:Dimensions.get('window').width/2.2,
        borderRadius:5,
        justifyContent:'center',
    },
    txt:{
        marginLeft:5,
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    }
})
export default styles;