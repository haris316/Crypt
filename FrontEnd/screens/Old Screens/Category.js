import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text, Button } from 'react-native';


const Category=({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Category</Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
}

export default Category;