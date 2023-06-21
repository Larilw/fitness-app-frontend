import { StyleSheet, View, Image } from "react-native";

import WelcomeButton from "../components/WelcomeButton";
import { NavigationContainer } from "@react-navigation/native";

import * as WebBrowser from "expo-web-browser";

export default function App({ navigation }) {
  const Logo = require("../assets/Logo.png");
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <WelcomeButton
        theme={"primary"}
        label={"Continuar"}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9DCEFF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    marginTop: 250,
    marginBottom: 200,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: "#000",
    borderWidth: 1,
    alignItems: "center",
  },
});
