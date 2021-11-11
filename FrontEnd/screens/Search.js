import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  Easing,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  StatusBar,
  ScrollView,
  Modal
} from "react-native";
import * as RootNavigation from '../components/RootNavigation';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const { width, height } = Dimensions.get("screen");
class Search extends React.Component {
  constructor(props,navigation) {
    super(props);
    this.state = {
      isLoding: "true",
      data: [],
      data1: [],
      data2: [],
      API_KEY: "563492ad6f917000010000016b579a6b57e746c1a598533ca7e7975e",
      URL: "",
      word : this.props.route.params.query,
    }
  }
  async fixURL(){
    const URL1 = "https://api.pexels.com/v1/search?query="
    let query = this.state.word
    // console.log("before : "+query)
    if(query==""){
        query="popular"
    }
    // console.log("after : "+query)
    const URL2 = "&orientation=portrait&size=small&per_page=60"
    this.state.URL = URL1+query+URL2
  }
  async componentDidMount() {
    this.fixURL()
    const temp = await fetch(this.state.URL, {
      headers: {
        Authorization: this.state.API_KEY,
      },
    });
    var { photos } = await temp.json();
    // console.log(photos);
    this.setState({
      isLoding: false,
      data1:photos.slice(0,20),
      data2:photos.slice(21,40),
      data:photos.slice(41,60),
    });
  }
  render() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "grey" }}>
      <StatusBar translucent={false} backgroundColor="grey" />
      <ScrollView 
      showsVerticalScrollIndicator={false}
      >
        <View>
        <Text style={style.sectionTitle}>Showing results for "{this.state.word}"</Text>
      <FlatList
        data={this.state.data1}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        contentContainerStyle={{ paddingLeft: 20 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (  
            
            <View>
                
                <TouchableOpacity activeOpacity={0.8}>
                <ImageBackground style={style.cardImage} source={{uri:item.src.portrait}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "space-between",
                      flexDirection: "row",
                      alignItems: "flex-end",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="heart-outline" size={20} color={"#FFF"} />
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            );
        }}
      />
      <FlatList
        data={this.state.data2}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        style ={{paddingVertical:10}}
        contentContainerStyle={{ paddingLeft: 20 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (  
            <View>
                <TouchableOpacity activeOpacity={0.8}>
                <ImageBackground style={style.cardImage} source={{uri:item.src.portrait}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "space-between",
                      flexDirection: "row",
                      alignItems: "flex-end",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="heart-outline" size={20} color={"#FFF"} />
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
        );
        }}
      />
      <FlatList
        data={this.state.data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        style ={{paddingVertical:10}}
        contentContainerStyle={{ paddingLeft: 20 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (  
            <View>        
                <TouchableOpacity activeOpacity={0.8}>
                <ImageBackground style={style.cardImage} source={{uri:item.src.portrait}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "space-between",
                      flexDirection: "row",
                      alignItems: "flex-end",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="heart-outline" size={20} color={"#FFF"} />
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              </View>
            );
        }}
      />
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "teal",
    },
    headerTitle: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: 23,
    },
    inputContainer: {
      height: 60,
      width: "100%",
      backgroundColor: "#FFF",
      borderRadius: 10,
      position: "absolute",
      top: 30,
      flexDirection: "row",
      paddingHorizontal: 20,
      alignItems: "center",
      elevation: 12,
    },
    categoryContainer: {
      marginTop: 30,
      marginHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    iconContainer: {
      height: 60,
      width: 60,
      backgroundColor: "#e1e8e9",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
  
    sectionTitle: {
      marginHorizontal: 20,
      marginVertical: 20,
      fontWeight: "bold",
      fontSize: 20,
    },
  
    cardImage: {
      height: 220,
      width: width / 2,
      marginRight: 20,
      padding: 10,
      overflow: "hidden",
      borderRadius: 10,
    },
    rmCardImage: {
      width: width - 40,
      height: 200,
      marginRight: 20,
      borderRadius: 10,
      overflow: "hidden",
      padding: 10,
    },
  });
export default Search;
