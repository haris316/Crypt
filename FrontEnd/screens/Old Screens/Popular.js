import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text, Button } from 'react-native';


function Popular({navigation}) {
    return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Popular</Text>
          <Button title='Go to Home'
          onPress = {()=> navigation.navigate("Home")}
          />
        </View>
    );
}

export default Popular;