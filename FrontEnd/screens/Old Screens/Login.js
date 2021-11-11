import React,{useState, useEffect} from 'react';
import {View, Text, ImageBackground,Pressable, Image,TextInput,Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../style'
import Icon from 'react-native-vector-icons/Ionicons'
import {AuthContext} from '../../components/context'
class Login extends React.Component {
    
    constructor(props) {
        super(props)
        this.state =
        {
            email:"",
            password:"",
        }
        // const { signIn } = React.useContext(AuthContext);
    }
    async sign(user){ 
        const { signIn } = React.useContext(AuthContext)
        signIn(user)
    }

    async validate(){
        
        if((this.state.email=="")||(this.state.password=="")){
            this.callAlert();
        }
        else{
            this.LoginAPI();
        }
        
    }
    async callAlert(){
            Alert.alert(  
                'Please enter an email and password',  
                '',  
                [  
                    {text: 'Dismiss'},  
                ]  
            );
    }
    async LoginAPI(){
        
            var url = 'http://192.168.18.8:3000/api/signin';
            let collection ={}
            collection.email = this.state.email,
            collection.password = this.state.password,
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
             console.log(responseJson);
             if(responseJson.success=="true"){
                 this.sign()
                // this.props.navigation.navigate('App',{responseJson});
             }
             else{
                Alert.alert(responseJson.message);
             } 
            })
    }

    render(){
        return (      
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
                        ref= {(el) => { this.email = el; }}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
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
                    ref= {(el) => { this.password = el; }}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <TouchableOpacity 
                style ={styles.loginBtn} 
                onPress = {() => {
                        // this.validate()
                        this.sign({'username':"bhand",'userToken':"hhh"})
                    }}
                >
                    <Text style={styles.texts}>Login</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        
        );
    }

}

export default Login;