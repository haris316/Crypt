
import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen =({navigation})=> {
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Home Screen</Text>
        <Button title='Go to Popular'
        onPress = {()=> navigation.navigate("Popular")}
        />
       
      </View>
    );
  }
export default HomeScreen;
