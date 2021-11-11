import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text, Button } from 'react-native';

const Settings= ({navigation}) => {
    return (
      
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
export default Settings;