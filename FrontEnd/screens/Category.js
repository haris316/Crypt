import React,{Component} from 'react';
import {
    View, 
    Text, 
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import styles from './style'

export default class Category extends Component {
    
    
    constructor(props,navigation) {
        super(props);
    }

    render(){
        return( 
            <ImageBackground source={require("../assets/background-image.jpeg")} style={styles.bgContainer}>
                <View>
                    <TouchableOpacity 
                        style ={styles.categoryButtons} 
                        onPress = {() => {
                            // select = "black"
                            this.props.navigation.navigate('SubCategoryBlack',{"select":"cars"})
                            }}
                    >
                        <Text style={styles.texts}>Black</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style ={styles.categoryButtons} 
                        onPress = {() => {
                            // select = "cars"
                            this.props.navigation.navigate('SubCategoryCars',)
                            }}
                    >
                        <Text style={styles.texts}>Cars</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style ={styles.categoryButtons} 
                        onPress = {() => {
                            // select = "Nature"
                            this.props.navigation.navigate('SubCategoryBlack',{select})
                            }}
                    >
                        <Text style={styles.texts}>Nature</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style ={styles.categoryButtons} 
                        onPress = {() => {
                            // select = "Beauty"
                            this.props.navigation.navigate('SubCategoryBlack',{select})
                            }}
                    >
                        <Text style={styles.texts}>Beauty</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>        
        )
    }
}