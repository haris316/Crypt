import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';


const SettingsComponent = ({
 
  settingsOptions,
 
}) => {
  return (
    <>
     
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        {settingsOptions.map(({title, onPress}, index) => (
          <TouchableOpacity key={title} onPress={onPress}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingBottom: 20,
                paddingTop: 20,
              }}>
              <Text style={{fontSize: 17}}>{title}</Text>
             
            </View>

            <View style={{height: 0.5, backgroundColor: '#adb5bd'}} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default SettingsComponent;