import {StyleSheet,Dimensions} from 'react-native';

 const {width:WIDTH} = Dimensions.get('window')
const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems : 'center',
      justifyContent : 'center'
    
    },
    wallpapers : {
      alignItems : 'center',
      justifyContent : 'center',
      width : '90%',
      height : '90%',
      backgroundColor : 'white',
      marginHorizontal : '5%',
      marginVertical : '12%'
    },  
    backgroundImage: {
        width : '100%',
        height : '100%'
      },
      titles:{
        marginBottom : '40%',
        width : '100%',
        alignItems : 'center'
      },
      name :
      {
        width :'100%',
        height :'100%'
        
      }, 
      image : {
        width : '100%',
        height : '100%',
        resizeMode : 'cover',
        position : 'absolute'
      },
      buttonContainer : {
          width : '100%',
          padding : 10

      },
      button : {
          height : 40,
          borderRadius : 20,
          justifyContent : 'center',
          alignItems : 'center'
      },
      buttonText :
      {
          fontSize: 15,
          fontWeight : '900',
          textTransform : 'uppercase'
      },
      buttonsContainer : {
          position : "absolute",
          bottom : 50,
          width : '100%'
      },
      bgContainer :
      {
        flex : 1,
        width : '100%',
        height :'100%',
        alignItems : 'center',
        justifyContent : 'center'




      },
      logo :
      {
        width :200,
        height :200
      },
      logoContainerS :{
        
        marginTop :3,
        marginBottom : 10,
        alignItems : 'center',
        transform : [{translateY : -140}]
      },
      logoContainerR :{
        
        marginTop :100,
        marginBottom : 10,
        alignItems : 'center',
        transform : [{translateY : -140}]
      },
      input: {
        fontSize : 16,
        color : 'grey',
        margin : 10
      },
      inputContainer: {
        margin : 10,
        width : WIDTH -55,
        height : 45,
        borderRadius : 25,
        paddingLeft :40,
        backgroundColor : '#FFDEAD',
        marginHorizontal :25,
        transform : [{translateY : -120}]
      },
     
      inputIcon :
      {
         top : 7,
         left : 10,
        position : 'absolute'
      },
      eye :
       {
        top : 7,
        right : 10,
        position : 'absolute'
      },
      texts :
      {
        fontSize : 16,
        color : 'grey',
        margin : 10,
        textAlign :'center'
      },
      loginBtn :
      {
        
        width : WIDTH -55,
        height : 45,
        borderRadius : 25,
        justifyContent : 'center',
        backgroundColor : '#DEB887',
        marginTop :25,
        transform : [{translateY : -5}],
        transform : [{translateX : -40}],


      }
     
    
});

export default styles;