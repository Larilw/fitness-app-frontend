import { StyleSheet, Text, View, Image } from "react-native";

import SaveButton from "../components/SaveButton";

export default function App({ navigation }) {
  const WeightImage = require("../assets/jumpingManBlue.png");
  let x = 50;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu peso atual</Text>
      <Text style={styles.mainText}>Seu peso atual é</Text>
      <View style={styles.weightDisplay}>
        <Text style={styles.subtext}>{x}</Text>
        <Text style={styles.subtextAdd}>KG</Text>
      </View>
      <SaveButton label={"Salvar"} theme={"primary"} navigation={navigation} />
      <Image source={WeightImage} style={styles.image} />
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
    top: 90,
    width: 300,
    height: 420,
    borderRadius: 40,
    alignItems: "center",
  },
  title: {
    top: -10,
    fontSize: 20,
    bottom: 200,
    fontWeight: "bold",
  },
  mainText: {
    top: 40,
    fontSize: 26,
    bottom: 200,
    fontWeight: "bold",
  },
  subtext: {
    top: 30,
    fontSize: 120,
    bottom: 180,
    color: "#c091e6",
    fontWeight: "700",
  },
  subtextAdd: {
    top: 120,
    fontSize: 30,
    bottom: 180,
    color: "#caaae3",
    fontWeight: "500",
  },
  weightDisplay: {
    flexDirection: "row",
  },
});
