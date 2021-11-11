//Importing Dependencies
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./components/RootNavigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthContext } from "./components/context";

//Importing Files
import { DrawerContent } from "./screens/DrawerContent";
import About from "./screens/About";
import Profile from './screens/profile';
import Settings from './screens/Settings_Page/setting_screen';
import WallpapersHome from "./screens/Home_Page/home";
import Ringtones from "./screens/Ringtones_Page/home";
import Videos from "./screens/Videos_Page/home";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Search from './screens/Search'
import SubCategoryAnimals from "./screens/Categories/SubCategoryAnimals";
import SubCategoryCars from "./screens/Categories/SubCategoryCars";
import SubCategoryBeauty from "./screens/Categories/SubCategoryBeauty";
import SubCategoryNature from "./screens/Categories/SubCategoryNature";
import SubCategoryAbstract from "./screens/Categories/SubCategoryAbstract";
import SubCategoryAnime from "./screens/Categories/SubCategoryAnime";
import SubCategoryArchitecture from "./screens/Categories/SubCategoryArchitecture";
import SubCategoryBeach from "./screens/Categories/SubCategoryBeach";
import SubCategoryDark from "./screens/Categories/SubCategoryDark";
import SubCategoryEntertainment from "./screens/Categories/SubCategoryEntertainment";
import SubCategoryFood from "./screens/Categories/SubCategoryFood";
import SubCategoryGames from "./screens/Categories/SubCategoryGames";
import SubCategoryGraffiti from "./screens/Categories/SubCategoryGraffiti";
import SubCategoryPeople from "./screens/Categories/SubCategoryPeople";
import SubCategorySports from "./screens/Categories/SubCategorySports";
import SubCategoryQuotes from "./screens/Categories/SubCategoryQuotes";
import SubCategoryTechnology from "./screens/Categories/SubCategoryTechnology";

//Declaring all Navigators
const Tabs = createBottomTabNavigator();
const WallpapersHomeStack = createStackNavigator();
const RingtonesStack = createStackNavigator();
const AuthStack = createStackNavigator();
const VideosStack = createStackNavigator();
const Drawer = createDrawerNavigator();

//Auth Navigation using Stack
const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Home" component={Home} />
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Register" component={Register} />
  </AuthStack.Navigator>
);

//Home Screen Navigation using Stack
const WallpapersHomeStackScreen = ({ navigation }) => (
  <NavigationContainer independent={true} ref={navigationRef}>
    <WallpapersHomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "teal",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <WallpapersHomeStack.Screen
        name="Wallpapers"
        component={WallpapersHome}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="teal"
              onPress={() => navigation.toggleDrawer()}
            ></Icon.Button>
          ),
        }}
      />
      <WallpapersHomeStack.Screen
        name="Search"
        component={Search}
      />
      <WallpapersHomeStack.Screen
        name="Animals"
        component={SubCategoryAnimals}
      />
      <WallpapersHomeStack.Screen
        name="Beauty"
        component={SubCategoryBeauty}
      />
      <WallpapersHomeStack.Screen
        name="Nature"
        component={SubCategoryNature}
      />
      <WallpapersHomeStack.Screen
        name="Cars"
        component={SubCategoryCars}
      />
      <WallpapersHomeStack.Screen
        name="Abstract"
        component={SubCategoryAbstract}
      />
      <WallpapersHomeStack.Screen
        name="Anime"
        component={SubCategoryAnime}
      />
      <WallpapersHomeStack.Screen
        name="Architecture"
        component={SubCategoryArchitecture}
      />
      <WallpapersHomeStack.Screen
        name="Beach"
        component={SubCategoryBeach}
      />
      <WallpapersHomeStack.Screen
        name="Dark"
        component={SubCategoryDark}
      />
      <WallpapersHomeStack.Screen
        name="Entertainment"
        component={SubCategoryEntertainment}
      />
      <WallpapersHomeStack.Screen
        name="Food"
        component={SubCategoryFood}
      />
      <WallpapersHomeStack.Screen
        name="Games"
        component={SubCategoryGames}
      />
      <WallpapersHomeStack.Screen
        name="Graffiti"
        component={SubCategoryGraffiti}
      />
      <WallpapersHomeStack.Screen
        name="People"
        component={SubCategoryPeople}
      />
      <WallpapersHomeStack.Screen
        name="Sports"
        component={SubCategorySports}
      />
      <WallpapersHomeStack.Screen
        name="Quotes"
        component={SubCategoryQuotes}
      />
      <WallpapersHomeStack.Screen
        name="Technology"
        component={SubCategoryTechnology}
      />
    </WallpapersHomeStack.Navigator>
  </NavigationContainer>
);

//Ringtones Screen Navigation using Stack
const RingtonesStackScreen = ({ navigation }) => (
  <RingtonesStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "maroon",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <RingtonesStack.Screen
      name="Ringtones"
      component={Ringtones}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="maroon"
            onPress={() => navigation.toggleDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </RingtonesStack.Navigator>
);

//Videos Screen Navigation using Stack
const VideosStackScreen = ({ navigation }) => (
  <VideosStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "purple",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <VideosStack.Screen
      name="Videos"
      component={Videos}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="purple"
            onPress={() => navigation.toggleDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </VideosStack.Navigator>
);

//App Navigation from Bottom Tabs
const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        let colorName;
        if (route.name === "Wallpapers") {
          iconName = focused ? "insert-photo" : "insert-photo";
          colorName = focused ? "teal" : "grey";
        } else if (route.name === "Ringtones") {
          iconName = focused ? "music-note" : "music-note";
          colorName = focused ? "maroon" : "grey";
        } else if (route.name === "Videos") {
          iconName = focused ? "video-library" : "video-library";
          colorName = focused ? "purple" : "grey";
        }
        return <MaterialIcon name={iconName} size={26} color={colorName} />;
      },
    })}
  >
    <Tabs.Screen name="Wallpapers" component={WallpapersHomeStackScreen} />
    <Tabs.Screen name="Ringtones" component={RingtonesStackScreen} />
    <Tabs.Screen name="Videos" component={VideosStackScreen} />
  </Tabs.Navigator>
);

//App Navigation from Side Drawers
const DrawerScreen = () => (
  <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen name="Wallpapers" component={TabsScreen} />
    <Drawer.Screen name="Ringtones" component={RingtonesStackScreen} />
    <Drawer.Screen name="Videos" component={VideosStackScreen} />
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="Settings" component={Settings} />
    <Drawer.Screen name="About" component={About} />
    <Drawer.Screen name="Sign Out" component={AuthStackScreen} />
  </Drawer.Navigator>
);
//EXPORT
export default () => {
  const initialLoginState = {
    userName: null,
  };
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userName: action.name,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.name,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );
  let token = null;
  const authContext = React.useMemo(
    () => ({
      signIn: async (name) => {
        token = name;
        try {
            userName = name;
            await AsyncStorage.setItem("userName", userName);
          } catch (e) {
            console.log(e);
          }
          dispatch({ type: "LOGIN", name: userName }); 
          
      },
      getToken: async () => {
        return JSON.stringify(token);  
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("name");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
    }),
    []
  );

  React.useEffect(() => {
    setTimeout(async () => {
      let userName;
      userName = null;
      try {
        userName = await AsyncStorage.getItem("name");
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RETRIEVE_TOKEN", name: userName });
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userName === null ? <AuthStackScreen /> : <DrawerScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
