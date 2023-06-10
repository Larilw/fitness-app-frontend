import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import LoginButton from "../components/LoginButton";

export default function App({ navigation }) {
  const LoginImage = require("../assets/group.png");
  const Logo = require("../assets/logo_white.png");

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.imageLogo} />
      <Image source={LoginImage} style={styles.image} />
      <LoginButton
        label={"Faça login com Google"}
        theme={"primary"}
        navigation={navigation}
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
