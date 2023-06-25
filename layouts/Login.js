import { StyleSheet, Text, View, Image } from "react-native";
import { SocialIcon } from "react-native-elements";
import "expo-dev-client";

import { NavigationContainer } from "@react-navigation/native";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as Linking from "expo-linking";

import LoginButton from "../components/LoginButton";
import { useEffect } from "react";

import clienteLogin from "../clients/login";

//        promptAsync={promptAsync}

export default function App({ navigation }) {
  /*
  const [request, response, promptAsync] = useAuthRequest({
    expoClientId:
    "751146957624-s1r8bprihc982tn5c8bej0vsectn4264.apps.googleusercontent.com",
  });
  */

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "751146957624-b0m659l5gpf9m257v0qg2234slj90ovk.apps.googleusercontent.com",
    expoClientId:
      "751146957624-s1r8bprihc982tn5c8bej0vsectn4264.apps.googleusercontent.com",
  });

  const LoginImage = require("../assets/group.png");
  const Logo = require("../assets/logo_white.png");

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.imageLogo} />
      <Image source={LoginImage} style={styles.image} />

      <SocialIcon
        title={"Login com Google"}
        button
        light
        type="google"
        fontStyle={{ color: "black" }}
        iconStyle={{ color: "black" }}
        style={{ width: "85%", marginTop: 120, height: 60 }}
        disabled={!request}
        onPress={() => {
          promptAsync()
            .then((resposta) => {
              if (resposta.type === "success") {
                navigation.navigate("Home");
                console.log(resposta);
              }
            })
            .catch((error) => error);
        }}
      />
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
});
