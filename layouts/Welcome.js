import { StyleSheet, View, Image } from "react-native";

import WelcomeButton from "../components/WelcomeButton";
import { NavigationContainer } from "@react-navigation/native";

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
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 80,
    alignItems: "center",
  },
});
