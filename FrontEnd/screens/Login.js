import React,{useState, useEffect} from 'react';
import {View, Text, ImageBackground,Pressable, Image,TextInput,Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import {AuthContext} from '../components/context'
class Login extends React.Component{
    constructor(props){
        super(props)
    }
}

export default Login =(props) => {

    const { signIn } = React.useContext(AuthContext)
    const [email, setEmail]=React.useState("");
    const [password, setPassword]=React.useState("");
    let token = null;
    function validate(){
        if((email=="")||(password=="")){
            callAlert();
        }
        else{
            LoginAPI();
        }
    }
    function callAlert(){
        Alert.alert(  
            'Please enter an Email and Password',  
            '',  
            [  
                {text: 'Dismiss'},  
            ]  
        );
    }
    function LoginAPI(){    
        var url = 'http://192.168.18.8:3000/api/signin';
        let collection ={}
        collection.email = email,
        collection.password = password,
        fetch(url, 
        {
            method : 'POST',
            headers : {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(collection)
        })
        .then(resp => {
            return resp.json();
        })
        .then((responseJson) => {
         if(responseJson.success=="true"){
             signIn(responseJson.user.email)
         }
         else{
            Alert.alert(responseJson.message);
         } 
        })
        .done() 
    }
    return(
        
            <ImageBackground source={require("../assets/background-image.jpeg")} style={styles.bgContainer}>
                <View style={styles.logoContainer}>
                    <Image source= {require("../assets/logo2.png")} style={styles.logo}/>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name={'ios-mail-outline'} size={28} color={'grey'} style= {styles.inputIcon}/>
                    <TextInput 
                        style = {styles.input}
                        placeholder = {'Email'}
                        placeholderTextColor = {'grey'}
                        underLineColorAndroid = 'transparent'
                        onChangeText={(text)=>setEmail(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name={'ios-key-outline'} size={28} color={'grey'} style= {styles.inputIcon}/>    
                    <TextInput 
                        style = {styles.input}
                        placeholder = {'Password'}
                        placeholderTextColor = {'grey'}
                        secureTextEntry ={true}
                        underLineColorAndroid = 'transparent'
                        onChangeText={(text)=>setPassword(text)}
                    />
                    <TouchableOpacity 
                    style ={styles.loginBtn} 
                    onPress = {() =>{
                        validate()
                    }}
                    >
                        <Text style={styles.texts}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
    )
}