import { StyleSheet, Text, View, Image } from "react-native";
import { SocialIcon, Button } from "react-native-elements";
import { TextInput } from "@react-native-material/core";
import { useState } from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import "expo-dev-client";

import { NavigationContainer } from "@react-navigation/native";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as Linking from "expo-linking";
import * as AuthSession from "expo-auth-session";

import LoginButton from "../components/LoginButton";
import { useEffect } from "react";

import clienteLogin from "../clients/login";

//        promptAsync={promptAsync}

export default function App({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "751146957624-b0m659l5gpf9m257v0qg2234slj90ovk.apps.googleusercontent.com",
    expoClientId:
      "751146957624-s1r8bprihc982tn5c8bej0vsectn4264.apps.googleusercontent.com",
  });

  const LoginImage = require("../assets/group.png");
  const Logo = require("../assets/logo_white.png");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.imageLogo} />
      <Text style={{ fontSize: 20, color: "black" }}>Login</Text>
      <TextInput
        variant="standard"
        style={styles.input}
        inputContainerStyle={{ borderRadius: 15 }}
        inputStyle={{ borderRadius: 15 }}
        label="Nome"
        value={userName}
        onChangeText={setUserName}
        leading={(props) => (
          <Icon name="file-document-edit-outline" {...props} />
        )}
      />
      <TextInput
        variant="standard"
        style={styles.input}
        inputContainerStyle={{ borderRadius: 15 }}
        inputStyle={{ borderRadius: 15 }}
        label="Senha"
        value={userPassword}
        onChangeText={setUserPassword}
        secureTextEntry
        leading={(props) => <Icon name="eye-off" {...props} />}
      />
      <Button
        title="Login"
        containerStyle={{
          backgroundColor: "#c2a1ed",
          borderRadius: 50,
          width: "85%",
          marginTop: 10,
          height: "7%",
          justifyContent: "center",
        }}
        buttonStyle={{ backgroundColor: "#c2a1ed" }}
        onPress={() => {
          //Checar login com o back
          navigation.navigate("Home");
        }}
      />
      <Button
        title="Cadastre-se"
        containerStyle={{
          backgroundColor: "#fff",
          borderRadius: 50,
          width: "85%",
          marginTop: 0,
          height: 40,
        }}
        onPress={() => {
          navigation.navigate("CreateAccount");
        }}
        buttonStyle={{ backgroundColor: "#fff" }}
        titleStyle={{ color: "#c2a1ed" }}
      />
      <SocialIcon
        title={"Login com Google"}
        button
        light
        type="google"
        fontStyle={{ color: "black" }}
        iconStyle={{ color: "black" }}
        style={{ width: "85%", marginTop: 10, height: 60 }}
        disabled={!request}
        onPress={() => {
          promptAsync()
            .then((resposta) => {
              if (resposta.type === "success") {
                console.log(resposta.params.code);
                alert("Erro no login, tente novamente mais tarde");
              }
            })
            .catch((error) => error);
        }}
      />
      <Image source={LoginImage} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 360,
    height: 400,
  },
  mainText: {
    fontSize: 20,
  },
  subtext: {
    fontSize: 16,
  },
  imageLogo: {
    width: 150,
    height: 150,
  },
  input: {
    marginTop: 15,
    backgroundColor: "#f4f5f5",
    height: "6%",
    width: "85%",
    borderRadius: 20,
    paddingLeft: 5,
    justifyContent: "center",
  },
});
