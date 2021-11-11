import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import styles from "./style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../components/context";

export function DrawerContent(props) {
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
            } else {
              Alert.alert(responseJson.message);
            }
          })
          .done();
    };
    fetchToken();
  });
  const paperTheme = useTheme();
  const { getToken } = React.useContext(AuthContext);
  const { signOut } = React.useContext(AuthContext);
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
    <View style={{ flex: 1 }}>
      {/* Top Section of Drawer */}
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={require("../assets/vegeta.jpg")}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>
                  {details.user.firstName} {details.user.lastName}
                </Title>
                <Caption style={styles.caption}>{details.user.email}</Caption>
              </View>
            </View>

            <View style={styles.row}></View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <IonIcon name="ios-home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Wallpapers");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <IonIcon
                  name="ios-settings-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="information-outline" color={color} size={size} />
              )}
              label="About"
              onPress={() => {
                props.navigation.navigate("About");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      {/* SignOut Button */}
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}
