import React, { Component, useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
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
  PermissionsAndroid,
  Platform,
  // CameraRoll, 
  Button
} from "react-native";
// import CameraRoll from "@react-native-community/cameraroll";
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import Modal from 'react-native-modal';
import { ScrollView } from "react-native-gesture-handler";
const { width,height } = Dimensions.get("screen");
import { AuthContext } from "../../components/context";


 

const home = (navigation) => {
  const { getToken } = React.useContext(AuthContext);
  let token = null;
  const [email, setEmail] = React.useState(null);
  React.useEffect(() => {
    const fetchToken = async () => {
      token = await getToken();
      token = token.substring(1, token.length - 1);
      setEmail(token);
    };
    fetchToken();
  });

  const categoryIcons = [
    <TouchableOpacity ><Icon name="favorite" size={25} color="teal" /></TouchableOpacity>,
    <TouchableOpacity><Icon name="check-circle" size={25} color="teal" /></TouchableOpacity>,
    <TouchableOpacity><Icon name="category" size={25} color="teal" /></TouchableOpacity>,
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
  const saveToCameraRoll = async (place) => {
 
    let cameraPermissions = await Permissions.getAsync(Permissions.MEDIA_LIBRARY);
    if (cameraPermissions.status !== 'granted') {
      cameraPermissions = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    }
  
    if (cameraPermissions.status === 'granted') {
      // console.log(place)
      const fileUri = `${FileSystem.documentDirectory}${place.id}${'.jpg'}`;
      const downloadedFile = await FileSystem.downloadAsync(place.uri, fileUri);
      const asset = await MediaLibrary.createAssetAsync(downloadedFile.uri);
      const album = await MediaLibrary.getAlbumAsync('Download');
      if (album == null) {
        await MediaLibrary.createAlbumAsync('Download', asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false).then(res=>res.json())
      }
    
    } else {
      alert('Requires camera roll permission');
    }
  };
  // const saveToCameraRoll = async (place) => {
 
  //   let cameraPermissions = await Permissions.getAsync(Permissions.MEDIA_LIBRARY);
  //   if (cameraPermissions.status !== 'granted') {
  //     cameraPermissions = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  //   }
  
  //   if (cameraPermissions.status === 'granted') {
  //     console.log(place)
  //     FileSystem.downloadAsync(place.uri, FileSystem.documentDirectory + place.id +'.jpg')
  //       .then(({ uri }) => {
  //         CameraRoll.save(uri,"photo");
  //         alert('Saved to photos');
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   } else {
  //     alert('Requires cameral roll permission');
  //   }
  
  // };
  function likedPhotoAPI(link){
    var url = "http://192.168.18.8:3000/api/addToFavs";
    let collection = {};
    collection.email=email,
    collection.newFav = link
    fetch(url, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collection),
    })
    .then((resp) => {
      return resp.json();
    })
    .then((responseJson) => {
      if (responseJson.success == "true") {
        console.log(responseJson);
      } else {
        Alert.alert(responseJson.message);
      }
    })
    .done();
  }
  const CatCard = ({ place }) => {
    return (
      <TouchableOpacity 
      onPress={()=>{
        RootNavigation.navigate(place.name)
      }} 
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
  const Card = ({place}) => {
    const [show, changeShow] = useState(false);
    const [liked, setLiked] = useState(false);
    // console.log(place.uri);
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
              <View style={{flexDirection: 'row'}}>
             <TouchableOpacity  activeOpacity={0.5} onPress={()=>saveToCameraRoll(place)}
              ><Icon name="save-alt" size={20} color="#fff" /></TouchableOpacity> 
            
            </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={()=>{
                  likedPhotoAPI(place.uri)
                  setLiked(true)
                }}>
                  <Icon name={liked ? "favorite" : "favorite-border"} size={20} color={"#FFF"} />
                </TouchableOpacity>
                <Text style={{ marginLeft: 5, color: "#FFF" }}>5.0</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <Modal
         swipeDirection="down"
         visible={show}
         onSwipeComplete={(e) => { changeShow(false); }}
         style={{ justifyContent: 'flex-end', margin: 0, }}
         
        >
          <View>
          {/* <TouchableOpacity  onPress={()=>{changeShow(false)}} ><Icon name="cancel" size={28}  /></TouchableOpacity> */}
            <Image
                source={place.image}
                style={{width:width,height:height}}
            />
          </View>

        </Modal>
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
             <View style={{flexDirection: 'row'}}>
             <TouchableOpacity  activeOpacity={0.5}
              onPress={() => saveToCameraRoll(place)}><Icon name="save-alt" size={20} color="#fff" /></TouchableOpacity> 
            
            </View>
            <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
           
              <View style={{ flexDirection: "row" }}>
                <Icon name="star" size={22} color={"#fff"} />
                <Text style={{ color: "#fff", marginLeft: 5 }}>5.0</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        </TouchableOpacity>
        <Modal
          swipeDirection="down"
          visible={show}
          onSwipeComplete={(e) => { changeShow(false); }}
          style={{ justifyContent: 'flex-end', margin: 0, }}
          
        >
          <View>
          {/* <TouchableOpacity  onPress={()=>{changeShow(false)}} ><Icon name="close" size={40} color={"red"} /></TouchableOpacity> */}
            <Image
                source={place.image}
                style={{width:width,height:height}}
            />
          </View>

        </Modal>
      </View>
    );
  };
  const [query,changeQuery] = useState("")
  let text="";
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <StatusBar translucent={false} backgroundColor="grey" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: "teal",
            height: 120,
            paddingHorizontal: 20,
          }}
        >
          <View>
            <View style={style.inputContainer}>
              
              <TextInput
                placeholder="Search images"
                style={{ color: "#dddedd" }}
                ref= {(el) => { text = el; }}
                onChangeText={(text) => {changeQuery(text)}}
                value={query}
              />
              <TouchableOpacity
                style={{position:"absolute",right:0,paddingHorizontal:10}}
                onPress={()=>{RootNavigation.navigate("Search",{"query":query})}}
              ><Icon name="search" size={28} /></TouchableOpacity>
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