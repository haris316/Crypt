import { StyleSheet, Dimensions } from "react-native";
//import { white } from 'react-native-paper/lib/typescript/styles/colors';

const { width: WIDTH } = Dimensions.get("window");
const styles = StyleSheet.create({
  tinyLogo: {
    padding: 5,
    borderRadius: 12,
    height: 100,
    width: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  wallpapers: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "90%",
    backgroundColor: "white",
    marginHorizontal: "5%",
    marginVertical: "12%",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginBottom: "40%",
    width: "100%",
    alignItems: "center",
  },
  name: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    width: "100%",
    padding: 10,
  },
  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  buttonsContainerhome: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    paddingLeft: 70,
    justifyContent: "center",
    fontSize: 10,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  bgContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    marginTop: 150,
    marginBottom: 10,
    alignItems: "center",
    transform: [{ translateY: -140 }],
  },
  input: {
    fontSize: 16,
    color: "grey",
    margin: 10,
  },
  inputContainer: {
    margin: 10,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    paddingLeft: 40,
    backgroundColor: "#FFDEAD",
    marginHorizontal: 25,
    transform: [{ translateY: -120 }],
  },
  categoryButtons: {
    alignItems: "center",
    justifyContent: "center",
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    backgroundColor: "#DEB887",
    marginTop: 25,
  },
  inputIcon: {
    top: 7,
    left: 10,
    position: "absolute",
  },
  eye: {
    bottom: 30,
    left: WIDTH - 130,
    position: "absolute",
  },
  texts: {
    fontSize: 20,
    color: "#eee",
    margin: 10,
    textAlign: "center",
  },
  loginBtn: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    backgroundColor: "#DEB887",
    marginTop: 25,
    transform: [{ translateY: -5 }],
    transform: [{ translateX: -40 }],
  },
  passwordContainer: {
    margin: 10,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    paddingLeft: 40,
    // backgroundColor : '#FFDEAD',
    marginHorizontal: 25,
    transform: [{ translateY: -120 }],
  },
  item1 : {
    marginLeft : 10,
    padding : 5,
    borderBottomWidth : 1,
    borderBottomColor : '#eee',
    flexDirection : 'row'
  },
  time : {
    color : '#d3d3d3',
    marginLeft : 10,
    marginTop : 5

  },
  heading : {
    fontSize : 20,
    fontWeight : 'bold',
    marginLeft : 10
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  container1: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default styles;
