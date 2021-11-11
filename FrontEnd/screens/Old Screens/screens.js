//Importing dependencies
import React,{useState, useEffect} from 'react';
import {View, Text, ImageBackground,Image,TextInput,Alert,Button, FlatList, SafeAreaView, Easing,StyleSheet, Dimensions} from 'react-native';
import styles from '../style'

//Setting up a screen container to display content
const ScreenContainer = ({ children }) => (
    <View 
        style={styles.container} 
    >
            {children}
    </View>
);
// //Auth Home Page
// export const Home =({navigation}) => (
//     <ScreenContainer>
//         <View style= {styles.backgroundImage}>
//         <ImageBackground source= {require('../assets/background-image.jpeg')} style = {styles.image}/>
//          <View style = {styles.titles}>
//          <Image style={styles.name} source ={require('../assets/crypt.png')}/>
//          </View>
//          <View style = {styles.buttonsContainerhome}>
//             <TouchableOpacity 
//                 style ={styles.loginBtn} 
//                 onPress = {() => {
//                     navigation.navigate('Login')
//                 }}
//             >
//                     <Text style={styles.texts}>Login</Text>
//             </TouchableOpacity>
//             <TouchableOpacity 
//                 style ={styles.loginBtn} 
//                 onPress = {() => {
//                     navigation.navigate('Register')
//                 }}
//             >
//                     <Text style={styles.texts}>Register</Text>
//             </TouchableOpacity>
//         </View>
//        </View>
//     </ScreenContainer>
// )
// //Login Page
// export const Login =({navigation}) => {
    
//     const [email, setEmail]=React.useState("");
//     const [password, setPassword]=React.useState("");
//     let token = null;
//     function validate(){
//         if((email=="")||(password=="")){
//             callAlert();
//         }
//         else{
//             LoginAPI();
//         }
//     }
//     function callAlert(){
//         Alert.alert(  
//             'Please enter an Email and Password',  
//             '',  
//             [  
//                 {text: 'Dismiss'},  
//             ]  
//         );
//     }
//     function LoginAPI(){    
//         var url = 'http://192.168.43.15:3000/api/signin';
//         let collection ={}
//         collection.email = email,
//         collection.password = password,
//         fetch(url, 
//         {
//             method : 'POST',
//             headers : {
//                 'Access-Control-Allow-Origin':'*',
//                 'Content-Type': 'application/json'
//             },
//             body : JSON.stringify(collection)
//         }).then (res => res.json())
//         .catch (error => console.error('Error : ',error))
//         .then (response => console.log('Message : ',response))
//         // .then ((res) => {
//         //     if (res.success === true){
//         //         token = res.message;
//         //         console.log(token)
//         //         navigation.navigate('App',{ T:token})
//         //     }
//         //     else{
//         //         Alert.alert(  
//         //             res.message,  
//         //             '',  
//         //             [  
//         //                 {text: 'Dismiss'},  
//         //             ]  
//         //         );     
//         //     }
//         // })
//         .then(navigation.navigate('App',{ T:"token"}))
//         .done() 
//     }
//     return(
//         <ScreenContainer>
//             <ImageBackground source={require("../assets/background-image.jpeg")} style={styles.bgContainer}>
//                 <View style={styles.logoContainer}>
//                     <Image source= {require("../assets/logo2.png")} style={styles.logo}/>
//                 </View>
//                 <View style={styles.inputContainer}>
//                     <Icon name={'ios-mail-outline'} size={28} color={'grey'} style= {styles.inputIcon}/>
//                     <TextInput 
//                         style = {styles.input}
//                         placeholder = {'Email'}
//                         placeholderTextColor = {'grey'}
//                         underLineColorAndroid = 'transparent'
//                         onChangeText={(text)=>setEmail(text)}
//                     />
//                 </View>
//                 <View style={styles.inputContainer}>
//                     <Icon name={'ios-key-outline'} size={28} color={'grey'} style= {styles.inputIcon}/>    
//                     <TextInput 
//                         style = {styles.input}
//                         placeholder = {'Password'}
//                         placeholderTextColor = {'grey'}
//                         secureTextEntry ={true}
//                         underLineColorAndroid = 'transparent'
//                         onChangeText={(text)=>setPassword(text)}
//                     />
//                     <TouchableOpacity 
//                     style ={styles.loginBtn} 
//                     onPress = {() =>{
//                         console.log(email)
//                         console.log(password)
//                         validate()
//                     }}
//                     >
//                         <Text style={styles.texts}>Login</Text>
//                     </TouchableOpacity>
//                 </View>
//             </ImageBackground>        
//         </ScreenContainer>
//     )
// }
// //SignUp Page
// export const Register =({navigation}) => {
    
//     const [email, setEmail]=React.useState("");
//     const [password, setPassword]=React.useState("");
//     const [firstName, setfirstName]=React.useState("");
//     const [lastName, setlastName]=React.useState("");

//     function validate(){
//         if((email=="")||(password=="")||(firstName=="")||(lastName=="")){
//             callAlert();
//         }
//         else{
//             registerAPI();
//         }
//     }
//     function callAlert(){
//         Alert.alert(  
//             'Please fill all fields to Register',  
//             '',  
//             [  
//                 {text: 'Dismiss'},  
//             ]  
//         );
//     }
//     function successReg(){
//         Alert.alert(  
//             'Account created successfully',  
//             'You will be redirected to Home page. Please Login from there',  
//             [  
//                 {text: 'Dismiss'},  
//             ]  
//         );
//     }
//     function registerAPI(){
//         var url = 'http://192.168.43.15:3000/api/signup';
//         let collection ={}
//         collection.email = email,
//         collection.password = password,
//         collection.firstName = firstName,
//         collection.lastName = lastName
//         fetch(url, 
//         {
//             method : 'POST',
//             headers : {
//                 'Access-Control-Allow-Origin':'*',
//                 'Content-Type': 'application/json'
//             },
//             body : JSON.stringify(collection)
//         }).then (res => res.json())
//         .catch (error => console.error('Error : ',error))
//         .then (response => console.log('Success : ',response)) 
//         .then(successReg())
//         .then (navigation.navigate('Home')) 
//     }
//     return(
//         <ScreenContainer>
//             <ImageBackground source={require("../assets/background-image.jpeg")} style={styles.bgContainer}>
//                 <View style={styles.logoContainer}>
//                     <Image source= {require("../assets/logo2.png")} style={styles.logo}/>
//                 </View>
//                 <View style={styles.inputContainer}>
//                     <Icon name={'ios-person-outline'} size={28} color={'grey'} style= {styles.inputIcon}/>
//                     <TextInput 
//                         style = {styles.input}
//                         placeholder = {'First Name'}
//                         placeholderTextColor = {'grey'}
//                         underLineColorAndroid = 'transparent'
//                         onChangeText = {(text)=> setfirstName(text)}
//                     />
                
//                 </View>
//                 <View style={styles.inputContainer}>
//                     <Icon name={'ios-person-outline'} size={28} color={'grey'} style= {styles.inputIcon}/>
//                     <TextInput 
//                         style = {styles.input}
//                         placeholder = {'Last Name'}
//                         placeholderTextColor = {'grey'}
//                         underLineColorAndroid = 'transparent'
//                         onChangeText = {(text)=> setlastName(text)}
//                     />
                
//                 </View>
//                 <View style={styles.inputContainer}>
//                     <Icon name={'ios-mail-outline'} size={28} color={'grey'} style= {styles.inputIcon}/>
//                     <TextInput 
//                         style = {styles.input}
//                         placeholder = {'Email'}
//                         placeholderTextColor = {'grey'}
//                         underLineColorAndroid = 'transparent'
//                         onChangeText = {(text)=> setEmail(text)}
//                     />
                
//                 </View>
//                 <View style={styles.inputContainer}>
//                     <Icon name={'ios-key-outline'} size={28} color={'grey'} style= {styles.inputIcon}/>    
//                     <TextInput 
//                         style = {styles.input}
//                         placeholder = {'Password'}
//                         placeholderTextColor = {'grey'}
//                         secureTextEntry ={true}
//                         underLineColorAndroid = 'transparent'
//                         onChangeText = {(text)=> setPassword(text)}
//                     />
//                     <TouchableOpacity 
//                         style ={styles.loginBtn} 
//                         onPress = {() => {
//                             console.log(firstName)
//                             console.log(lastName)
//                             console.log(password)
//                             console.log(email)
//                             validate()
//                         }}
//                     >
//                         <Text style={styles.texts}>Register</Text>
                    
//                     </TouchableOpacity>
//                 </View>
//             </ImageBackground>    
//         </ScreenContainer>
//     )
// }
// //App Home Page
// export const WallpapersHome =({navigation}) => (
//     // return(
//         <ScreenContainer>
//             <Text>Home</Text>
//             <Button onPress={() => navigation.navigate('PopularWallpapers')} title="Popular" />
//             <Button onPress={() => navigation.navigate('Category')} title="Categories" />
//             <Button onPress={() => navigation.navigate('Ringtones')} title="Ringtones" />
//         </ScreenContainer>
// )
// //Ringtones Page
// export const Ringtones =({navigation}) => (
//     <ScreenContainer>
//         <Text>Ringtones</Text>
//         <Button onPress={() => navigation.navigate('WallpapersHome')} title="Wallpapers" />
//         <Button onPress={() => navigation.navigate('Videos')} title="Videos" />
//     </ScreenContainer>
// )
// //Videos Page
// export const Videos =({navigation}) => (
//     <ScreenContainer>
//         <Text>Videos</Text>
//         <Button onPress={() => navigation.navigate('WallpapersHome')} title="Wallpapers" />
//         <Button onPress={() => navigation.navigate('Ringtones')} title="Ringtones" />
//     </ScreenContainer>
// )
// //Settings Page
// export const Settings =({navigation}) => (
//     <ScreenContainer>
//         <Text>Settings</Text>
//         <Button onPress={() => navigation.goBack()} title="Go back to Home" />
//     </ScreenContainer>
// )
// //Profile Page
// export const Profile =({navigation}) => (
//     <ScreenContainer>
//         <Text>Profile</Text>
//         <Button onPress={() => navigation.goBack()} title="Go back to Home" />
//     </ScreenContainer>
// )
//About Page
export const About =({navigation}) => (
    <ScreenContainer>
        <Text style={[styles.text, { fontWeight: "200", fontSize: 25}]}>Thank you for using our app</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={[styles.text, { fontWeight: "200", fontSize: 25}]}>Made and Designed by : </Text>
        <Text></Text>
        <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Daniyal Yousuf</Text>
        <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Aisha Atique</Text>
        <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Haris Zafar</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Button color={'grey'} size={50} onPress={() => navigation.goBack()} title="Back" />
    </ScreenContainer>
)