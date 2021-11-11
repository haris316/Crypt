import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style';

function StyledButton(props) {

    const type =props.type ;
    const backgroundColor= type == 'primary' ? '#FFDEAD' : '#DEB887';
    const textColor = type == 'primary' ? 'black' : 'black' ;
    const content = props.content ;
    const onPress = props.onPress ;
    return (
        <View style={styles.buttonContainer}>
        <Pressable
        style = {[styles.button ,{backgroundColor:backgroundColor}]}
        //onPress ={ () => super.onPress()}
        >
          <Text style ={[styles.buttonText,{color:textColor}]}> {content}</Text>
        </Pressable>
        </View>
        
    );
}

export default StyledButton;