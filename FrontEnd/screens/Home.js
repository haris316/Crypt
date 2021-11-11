import React from "react";
import { View, Text, ImageBackground, Pressable, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.backgroundImage}>
        <ImageBackground
          source={require("../assets/background-image.jpeg")}
          style={styles.image}
        />

        <View style={styles.titles}>
          <Image style={styles.name} source={require("../assets/crypt.png")} />
        </View>
        <View style={styles.buttonsContainerhome}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          >
            <Text style={styles.texts}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              this.props.navigation.navigate("Register");
            }}
          >
            <Text style={styles.texts}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
