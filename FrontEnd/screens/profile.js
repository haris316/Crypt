import React from "react";
import { AuthContext } from "../components/context";
import {
  StyleSheet,
  Button,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from "react-native";
const { width, height } = Dimensions.get("screen");
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function App({ navigation }) {
  let token = null;
  const [details, setDetails] = React.useState(null);
  React.useEffect(() => {
    const fetchToken = async () => {
      token = await getToken();
      token = token.substring(1, token.length - 1);
      var url = "http://192.168.18.8:3000/api/getProfile";
      let collection = {};
      (collection.email = token),
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
              setDetails(responseJson);
              // console.log(responseJson)
            } else {
              Alert.alert(responseJson.message);
            }
          })
          .done();
    };
    fetchToken();
  });
  const { getToken } = React.useContext(AuthContext);
  if (details == null) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}></View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={require("../assets/vegeta.jpg")}
              style={styles.image}
              resizeMode="center"
            ></Image>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            {details.user.firstName} {details.user.lastName}
          </Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 16 }]}>
            {details.user.email}
          </Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 16 }]}>
            Role :{" "}
            {details.user.role.charAt(0).toUpperCase() +
              details.user.role.slice(1)}
          </Text>
        </View>

        <View style={{ marginTop: 80}}>
            <FlatList
              data={details.user.favorites}
              keyExtractor={(item) => item.toString()}
              horizontal
              contentContainerStyle={{ paddingLeft: 20 }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <View>
                    <TouchableOpacity activeOpacity={0.8}>
                      <ImageBackground
                        style={styles.cardImage}
                        source={{ uri: item }}
                      >
                        <View
                          style={{
                            flex: 1,
                            justifyContent: "space-between",
                            flexDirection: "row",
                            alignItems: "flex-end",
                          }}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Icon
                              name="heart"
                              size={20}
                              color={"#FFF"}
                            />
                          </View>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                )
              }}
            />
          <View style={styles.mediaCount}>
            <Text
              style={[
                styles.text,
                { fontSize: 16, color: "#DFD8C8", textTransform: "uppercase" },
              ]}
            >
              Favorites
            </Text>
          </View>
        </View>
        <View style={{ padding: 40 }}>
          <Button
            color={"grey"}
            size={50}
            onPress={() => navigation.goBack()}
            title="Back"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    // fontFamily: "Times New Roman",
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -180,
    marginLeft: 20,
    width: 100,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});
