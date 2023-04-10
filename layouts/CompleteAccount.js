import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import ContinueButton from "../components/ContinueButton";

export default function App({ navigation }) {
  const LoginImage = require("../assets/sittingWoman.png");

  return (
    <View style={styles.container}>
      <Image source={LoginImage} style={styles.image} />
      <Text style={styles.mainText}>Vamos completar seu cadastro</Text>
      <Text style={styles.subtext}>Isso nos ajuda a definir suas metas</Text>
      <ContinueButton label={"Continuar"} theme={"primary"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
    top: -130,
    width: 360,
    height: 400,
    alignItems: "center",
  },
  mainText: {
    top: -170,
    fontSize: 20,
    bottom: 200,
  },
  subtext: {
    top: -160,
    fontSize: 16,
    bottom: 180,
  },
});
