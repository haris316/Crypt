import React,{Component} from 'react'
import styles from '../style'
import {
    Text,
    View, 
    Button
} from 'react-native'

export default class WallpapersHome extends Component {
    constructor(props,navigation){
        super(props)
        this.state ={
        }
    }
    render(){
        return( 
        <View styles={styles.container}>
            <Text>Home</Text>
            <Button onPress={() => console.log(this.props.route.param)} title="get" />
            <Button onPress={() => navigation.navigate('PopularWallpapers')} title="Popular" />
            <Button onPress={() => navigation.navigate('Category')} title="Categories" />
            <Button onPress={() => navigation.navigate('Ringtones')} title="Ringtones" />
        </View>
        )
    }
}   