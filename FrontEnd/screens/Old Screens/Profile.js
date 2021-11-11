

import 'react-native-gesture-handler';
import  {createStackNavigator}  from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


import * as React from 'react';
import { View, Text, Button } from 'react-native';
const ProfileStack = createStackNavigator();
function ProfileStackScreen({navigation}) {
  return (
      <ProfileStack.Navigator  screenOptions={{
      headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor:'teal',
        },
        title:"crypt",
        
        headerTintColor:'#fff',
        headerTitleStyle:{
       
          fontWeight:'bold',
          fontFamily:'Didot'
        }
      }}>
      <ProfileStack.Screen name="Profile" component={Profile} options ={ { 
          headerLeft: () => (
            <Icon.Button name = "menu-outline" size={25} backgroundColor="teal"  onPress = {() => {navigation.openDrawer()}} ></Icon.Button>
          )
        }} />
      
    </ProfileStack.Navigator> 
     
  
  );
}
const Profile= ({navigation}) => {
    return (
      
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
export default ProfileStackScreen;