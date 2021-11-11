import React from 'react';
import {View, Text, ImageBackground,Image,TextInput,Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'
class Register extends React.Component {
    
    constructor(props) {
        super(props)
        this.state =
        {
            email:"",
            password:"",
            firstName:"",
            lastName:"",
            favs:[]
        }
    }
    async validate(){
        
        if((this.state.email=="")||(this.state.password=="")||(this.state.firstName=="")||(this.state.lastName=="")){
            this.callAlert();
        }
        else{
            this.registerAPI();
        }
        
    }
    async callAlert(){
            Alert.alert(  
                'Please enter all details required',  
                '',  
                [  
                    {text: 'Dismiss'},  
                ]  
            );
    }
    async callAlert2(){
        Alert.alert(  
            'The two passwords do not match',  
            '',  
            [  
                {text: 'Dismiss'},  
            ]  
        );
    }
    async registerAPI(){
        var url = 'http://192.168.18.8:3000/api/signup';
        let collection ={}
        collection.email = this.state.email,
        collection.password = this.state.password,
        collection.firstName = this.state.firstName,
        collection.lastName = this.state.lastName,
        collection.favorites = this.state.favs 
        fetch(url, 
        {
            method : 'POST',
            headers : {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(collection)
        }).then(resp => {
            return resp.json();
        })
        .then((responseJson) => {    
            if(responseJson.success=="true"){
                // console.log(responseJson)
                Alert.alert('Account Created', 
                'You have been redirected to home. Please login from there',
                [{text:'Dismiss'}]
                );
                
                this.props.navigation.navigate('Home');
            }else{
                Alert.alert(responseJson.message);
             } 
            })
            .done()
    }

render(){

    return (
      
        <ImageBackground source={require("../assets/background-image.jpeg")} style={styles.bgContainer}>
            <View style={styles.logoContainer}>
                <Image source= {require("../assets/logo2.png")} style={styles.logo}/>
            </View>
            <View style={styles.inputContainer}>
                <Icon name={'ios-person-outline'} size={28} color={'grey'} style= {styles.inputIcon}/>
                <TextInput 
                    style = {styles.input}
                    placeholder = {'First Name'}
                    placeholderTextColor = {'grey'}
                    underLineColorAndroid = 'transparent'
                    ref= {(el) => { this.firstName = el; }}
                    onChangeText={(firstName) => this.setState({firstName})}
                    value={this.state.firstName}
                />
               
            </View>
            <View style={styles.inputContainer}>
                <Icon name={'ios-person-outline'} size={28} color={'grey'} style= {styles.inputIcon}/>
                <TextInput 
                    style = {styles.input}
                    placeholder = {'Last Name'}
                    placeholderTextColor = {'grey'}
                    underLineColorAndroid = 'transparent'
                    ref= {(el) => { this.lastName = el; }}
                    onChangeText={(lastName) => this.setState({lastName})}
                    value={this.state.lastName}
                />
               
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
                        this.validate()
                    }}
                >
                    <Text style={styles.texts}>Register</Text>
                
                </TouchableOpacity>
            </View>
        </ImageBackground>
       
    );
}

}

export default Register;