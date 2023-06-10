import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import ReturnButton from "../components/ReturnButton";

export default function ChallengeInfo({ navigation }) {
  let goal = "5" + "KG";
  let begin_date = "20/05/2023";
  let end_date = "20/06/2023";
  let time_remaining = "30";
  let total_time = "60";

  const RecordsImage = require("../assets/challenge_records.png");

  const toggleChallengeButton = () => {
    navigation.navigate("ChallengeInfo");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ReturnButton route={"Home"} navigation={navigation} />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Nome do Desafio</Text>
        </View>
      </View>
      <View>
        <Pressable onPress={toggleChallengeButton}>
          <Image source={RecordsImage} style={styles.image} />
        </Pressable>
      </View>
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
    marginTop: 30,
    marginBottom: 20,
    resizeMode: "contain",
    width: 300,
    height: 40,
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
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  subtext: {
    marginBottom: 40,
    fontSize: 16,
    color: "#000",
    fontWeight: "300",
  },
  infoCardContainer: {},
  infoCard: {
    elevation: 1,
    height: 100,
    width: 150,
    backgroundColor: "rgba(240, 248, 255, 1)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "baseline",
    padding: 20,
    marginRight: 10,
  },
  infoTitle: {
    fontWeight: "bold",
  },
  infoData: {
    color: "#92A3FD",
    fontWeight: "bold",
    fontSize: 20,
  },
  column: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoSubtext: {
    color: "#b3b3b3",
  },
  titleContainer: {
    width: "90%",
    marginTop: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },
});
