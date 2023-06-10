import { StyleSheet, Text, View, Image, Switch } from "react-native";
import { useState } from "react";
import ReturnButton from "../components/ReturnButton";

export default function ChallengeInfo({ navigation }) {
  let goal = "5" + "KG";
  let begin_date = "20/05/2023";
  let end_date = "20/06/2023";
  let time_remaining = "30";
  let total_time = "60";

  const RecordsImage = require("../assets/challenge_records.png");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do Desafio</Text>
      <Image source={RecordsImage} style={styles.image} />
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
    top: 150,
    width: 300,
    height: 420,
    borderRadius: 40,
    alignItems: "center",
  },
  title: {
    top: -30,
    fontSize: 20,
    bottom: 200,
    fontWeight: "bold",
  },
});
