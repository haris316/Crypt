
import React, {useEffect} from 'react';
import SettingsComponent from './setting_component';

const Settings = ({navigation}) => {
  
  const settingsOptions = [
    {title: 'Rate the App',  onPress: () => {}},
    {title: 'Send Feedback',  onPress: () => {}},
    {
      title: 'Report a problem',
      
      onPress: () => {},
    },
    {title: 'Terms of usage', onPress: () => {}},
    {
      title: 'Privacy Policy',
      
      onPress: () => {},
    },
    {
      title: 'Back',
      
      onPress: () => {navigation.goBack()},
    },
    
  ];

  

  return (
    <SettingsComponent
      settingsOptions={settingsOptions}
    />
  );
};

export default Settings;