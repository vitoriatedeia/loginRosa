import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { useState } from "react";

export default function App() {
  const [login, setLogin] = useState("");
  const [home, setHome] = useState("");
  return (
    <ImageBackground
      style={styles.container}
      source={require("./scr/assets/images/fundo.jpg")}
      resizeMode="cover"
    >
      <View style={styles.view}>
        <Text style={styles.login}>LOGIN</Text>
        <Text style={styles.subLogin}>TO CONTINUE</Text>

        <TextInput
          style={styles.username}
          placeholder="Username"
          placeholderTextColor="white"
        />

        <TextInput
          style={styles.password}
          placeholder="Password"
          placeholderTextColor="white"
        />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtbtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
  },
  login: {
    fontSize: 45,
    color: "white",
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subLogin: {
    fontSize: 17,
    color: "white",
    fontWeight: 20,
    marginBottom: 40,
  },
  username: {
    margin: 30,
    borderBottomWidth: 1,
    width: 300,
    borderBottomColor: "white",
    padding: 5,
  },
  password: {
    margin: 30,
    borderBottomWidth: 1,
    width: 300,
    borderBottomColor: "white",
    padding: 5,
  },
  txtbtn: {
    color: "pink",
  },
  btn: {
    width: 250,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 40,
    borderRadius: 5,
    shadowColor: "#000",
    shadowRadius: 10,
    shadowOpacity: 0.25,
    elevation: 5,
    shadowOffset: { width: 5, height: 5 },
  },
});
