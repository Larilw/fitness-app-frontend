import { StyleSheet, Text, View, Image } from "react-native";

import SaveButton from "../components/SaveButton";
import ReturnButton from "../components/ReturnButton";

export default function App({ navigation }) {
  const WeightImage = require("../assets/jumpingManBlue2.png");
  let x = 50;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ReturnButton route={"ScaleConnection"} navigation={navigation} />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Seu peso atual</Text>
        </View>
      </View>
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
    justifyContent: "flex-start",
  },
  image: {
    resizeMode: "contain",
    width: 300,
    height: 480,
    borderRadius: 40,
    alignItems: "center",
  },
  title: {
    paddingRight: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  mainText: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: "bold",
  },
  subtext: {
    fontSize: 120,
    color: "#c091e6",
    fontWeight: "700",
  },
  subtextAdd: {
    marginTop: 95,
    fontSize: 30,
    color: "#caaae3",
    fontWeight: "500",
  },
  weightDisplay: {
    flexDirection: "row",
  },
  titleContainer: {
    width: "90%",
    marginTop: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },
});
