import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'black',
        margin:10,
        padding:5,
        borderRadius:5,
      },
      title:{
        fontSize:18,
        fontWeight:'bold',
      },
      company:{
        marginBottom:5,
    
      },
      location:{
        backgroundColor:'#ff6655',
        padding:3,
        paddingHorizontal:8,
        borderRadius:25,
        color:'white',
        alignSelf: 'flex-start',
        fontWeight:'bold',
    
      },
      level:{
        textAlign:'right',
        color:'#ff6655',
        fontWeight:'bold',
        margin:5,
      },
      button:{
        padding:10,
        margin:5,
        backgroundColor:'#ff6655',
        alignItems:'center',
        borderRadius:5
      },
      buttonText:{
        color:'white'
      }
})
export default styles;