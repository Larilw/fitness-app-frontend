import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useState } from "react";

import AddButton from "../components/AddButton";
import CardChallenge from "../components/CardChallenge";

export default function App({ navigation }) {
  let username = "Larissa Wong";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá,</Text>
      <Text style={styles.title}>{username}</Text>
      <CardChallenge
        theme={"primary"}
        navigation={navigation}
        label={"Desafio x"}
      />
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
    top: -30,
    width: 360,
    height: 400,
    alignItems: "center",
  },
  smallImage: {
    resizeMode: "contain",
    top: 60,
    borderRadius: 10,
    width: 60,
    height: 60,
    alignItems: "center",
  },
  mainText: {
    top: -75,
    fontSize: 20,
    bottom: 200,
  },
  subtext: {
    top: -70,
    fontSize: 16,
    bottom: 180,
    color: "#7B6F72",
  },
  inputDate: {
    backgroundColor: "#f4f5f5",
    borderRadius: 10,
    width: 305,
    height: 60,
    top: -40,
    padding: 10,
  },
  inputSmall: {
    backgroundColor: "#f4f5f5",
    borderRadius: 10,
    width: 245,
    height: 60,
    top: 60,
    padding: 10,
  },
  viewInput1: {
    flexDirection: "row",
    top: -90,
  },
  viewInput2: {
    flexDirection: "row",
    top: -80,
  },
});
