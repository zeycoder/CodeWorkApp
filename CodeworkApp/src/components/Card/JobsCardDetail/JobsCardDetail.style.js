import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:0
    },
    inner_container: {
        flex: 1,
    },
    title_container:{
        margin:5,
    },
    btn: { 
        flexDirection: 'row', 
        justifyContent:'center',
        borderTopWidth:1,
        borderColor:'gray',
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:5
    },
    txt:{
        fontSize:15,
        fontWeight:'bold',
    },
    inner_title:{
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:10,
    },
    color:{
        color:'#ff6655',
    },
    html:{
        backgroundColor:'white',
        borderWidth:1,
        borderBottomWidth:0,
        borderColor:'gray',
        padding:3,
    }
})
export default styles;