import { StyleSheet, Text, View, Image } from "react-native";
import { SocialIcon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";

import * as WebBrowser from "expo-web-browser";
import { useAuthRequest } from "expo-auth-session/providers/google";

import LoginButton from "../components/LoginButton";
import { useEffect } from "react";

//        promptAsync={promptAsync}

export default function App({ navigation }) {
  /*
  const [request, response, promptAsync] = useAuthRequest({
    expoClientId:
      "751146957624-s1r8bprihc982tn5c8bej0vsectn4264.apps.googleusercontent.com",
  });
  */

  const [request, response, promptAsync] = useAuthRequest({
    androidClientId:
      "751146957624-m27bff5n7kk5m4mmikjvapp2phsa3tn6.apps.googleusercontent.com",
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
              navigation.navigate("Home");
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
