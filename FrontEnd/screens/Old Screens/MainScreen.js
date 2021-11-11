
import 'react-native-gesture-handler';
import React from 'react';

import  {createStackNavigator}  from '@react-navigation/stack';
import  {createMaterialBottomTabNavigator}  from '@react-navigation/material-bottom-tabs';


import Icon from 'react-native-vector-icons/Ionicons';

import  HomeScreen from './HomeScreen';

import Popular from './Popular';
import Category from './Category';
const HomeStack = createStackNavigator();

const PopularStack= createStackNavigator();
const CategoryStack= createStackNavigator();

const Tab= createMaterialBottomTabNavigator();

function HomeStackScreen({navigation}) {
    return (
      
     
        <HomeStack.Navigator  screenOptions={{
        
          headerStyle: {
            backgroundColor:'teal',
          },
          title:"crypt",
          
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
            
          }
        }} >
        <HomeStack.Screen name="Home" component={HomeScreen} options ={ { 
            headerLeft: () => (
              <Icon.Button name = "menu-outline" size={25} backgroundColor="teal"  onPress = {() => {navigation.openDrawer()}} ></Icon.Button>
            )
          }}  />
        
      </HomeStack.Navigator> 
       
    
    );
  }
  
function CategoryStackScreen({navigation}) {
  return (
    
   
      <CategoryStack.Navigator  screenOptions={{
      
        headerStyle: {
          backgroundColor:'teal',
        },
        title:"crypt",
        
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold',
          
        }
      }} >
      <CategoryStack.Screen name="Category" component={Category} options ={ { 
          headerLeft: () => (
            <Icon.Button name = "menu-outline" size={25} backgroundColor="teal"  onPress = {() => {navigation.openDrawer()}} ></Icon.Button>
          )
        }}  />
      
    </CategoryStack.Navigator> 
     
  
  );
}
function PopularStackScreen({navigation}) {
  return (
    
   
      <PopularStack.Navigator  screenOptions={{
      
        headerStyle: {
          backgroundColor:'teal',
        },
        title:"crypt",
        
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold',
          
        }
      }} >
      <PopularStack.Screen name="Popular" component={Popular} options ={ { 
          headerLeft: () => (
            <Icon.Button name = "menu-outline" size={25} backgroundColor="teal"  onPress = {() => {navigation.openDrawer()}} ></Icon.Button>
          )
        }}  />
      
    </PopularStack.Navigator> 
     
  
  );
}
  

function MainScreen()  {
    return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      barStyle={{ backgroundColor: 'teal' }}
    >
       
       <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
        
      />
      
      <Tab.Screen
        name="Popular"
        component={PopularStackScreen}
        options={{
          tabBarLabel: 'Popular',
          tabBarIcon :({color}) => (
            <Icon name ="star-outline" color={color} size = {26}/>
          )
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryStackScreen}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon :({color}) => (
            <Icon name ="apps-outline" color={color} size = {26}/>
            
          )
          
        }}
      />
     
     
    </Tab.Navigator>

    )
    }

export default MainScreen;


