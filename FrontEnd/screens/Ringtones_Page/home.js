import React, { Component, useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import data from "./data";
import popular from "./popular";
import recommend from "./reccomend";
import * as RootNavigation from '../../components/RootNavigation';
import {
  StatusBar,
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
  TextInput,
  Modal,
  Button
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const { width,height } = Dimensions.get("screen");

const home = (navigation) => {
  const categoryIcons = [
    <TouchableOpacity><Icon name="favorite" size={25} color="maroon" /></TouchableOpacity>,
    <TouchableOpacity><Icon name="check-circle" size={25} color="maroon" /></TouchableOpacity>,
    <TouchableOpacity><Icon name="category" size={25} color="maroon" /></TouchableOpacity>,
  ];
  const ListCategories = () => {
    return (
      <View style={style.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={style.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };
  const CatCard = ({ place }) => {
    return (
      <TouchableOpacity 
      // onPress={()=>{
      //   const text = "SubCategory"+place.name;
      //   RootNavigation.navigate(text)
      // }} 
      activeOpacity={0.8}>
        <ImageBackground style={style.cardImage} source={place.image}>
          <Text
            style={{
              color: "#FFF",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {place.name}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon name="star" size={20} color={"#FFF"} />
              <Text style={{ marginLeft: 5, color: "#FFF" }}>5.0</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  const Card = ({ place }) => {
    const [show, changeShow] = useState(false);
    return (
      <View>
        <TouchableOpacity 
          onPress={()=>{
            changeShow(true)
          }} 
          activeOpacity={0.8}>
          <ImageBackground style={style.cardImage} source={place.image}>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Icon name="star" size={20} color={"#FFF"} />
                <Text style={{ marginLeft: 5, color: "#FFF" }}>5.0</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        {/* <Modal
          transparent={true}
          visible={show}
        >
          <View>
          <TouchableOpacity  onPress={()=>{changeShow(false)}} ><Icon name="close" size={40} color={"red"} /></TouchableOpacity>
            <Image
                source={place.image}
                style={{width:width,height:height}}
            />
          </View>

        </Modal> */}
      </View>
    );
  };
  const RecommendedCard = ({ place }) => {
    const [show, changeShow] = useState(false);
    return (
      <View>
        <TouchableOpacity 
          onPress={()=>{
            changeShow(true)
          }} 
          activeOpacity={0.8}>
        <ImageBackground style={style.rmCardImage} source={place.image}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <Icon name="star" size={22} color={"#fff"} />
                <Text style={{ color: "#fff", marginLeft: 5 }}>5.0</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        </TouchableOpacity>
        {/* <Modal
          transparent={true}
          visible={show}
        >
          <View>
          <TouchableOpacity  onPress={()=>{changeShow(false)}} ><Icon name="close" size={40} color={"red"} /></TouchableOpacity>
            <Image
                source={place.image}
                style={{width:width,height:height}}
            />
          </View>

        </Modal> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <StatusBar translucent={false} backgroundColor="grey" />
      {/* <View style={style.header}>
        <TouchableOpacity >
          <Icon name="sort" size={28} color="#FFF" /></TouchableOpacity>
        <Icon name="notifications-none" size={28} color="#FFF" />
      </View> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: "maroon",
            height: 120,
            paddingHorizontal: 20,
          }}
        >
          <View>
            {/* <Text style={style.headerTitle}>Ringtones</Text> */}
            <View style={style.inputContainer}>
              <Icon name="search" size={28} />
              <TextInput
                placeholder="Search ringtones"
                style={{ color: "#dddedd" }}
              />
            </View>
          </View>
        </View>
        <ListCategories />
        <Text style={style.sectionTitle}>Popular</Text>
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={popular}
            renderItem={({ item }) => <Card place={item} />}
          />
          <Text style={style.sectionTitle}>Recommended</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={recommend}
            renderItem={({ item }) => <RecommendedCard place={item} />}
          />
          <Text style={style.sectionTitle}>Categories</Text>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20, marginBottom:35 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => <CatCard place={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
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
export default home;
