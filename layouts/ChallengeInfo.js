import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import ReturnButton from "../components/ReturnButton";

export default function ChallengeInfo({ navigation }) {
  let goal = "5" + "KG";
  let begin_date = "20/05/2023";
  let end_date = "20/06/2023";
  let time_remaining = "30";
  let total_time = "60";

  const InfoImage = require("../assets/challenge_info.png");

  const toggleChallengeButton = () => {
    alert("Clicou");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do Desafio</Text>
      <View>
        <Pressable onPress={toggleChallengeButton}>
          <Image source={InfoImage} style={styles.image} />
        </Pressable>
      </View>
      <View>
        <Text style={styles.mainText}>Descrição</Text>
        <Text style={styles.subtext}>
          Preciso emagrecer para ganhar um pastel.
        </Text>
      </View>
      <View style={styles.infoCardContainer}>
        <View style={styles.column}>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Objetivo</Text>
            <Text style={styles.infoData}>{goal}</Text>
            <Text style={styles.infoSubtext}>de emagrecimento</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Dias Restantes</Text>
            <Text style={styles.infoData}>{time_remaining}</Text>
            <Text style={styles.infoSubtext}>de {total_time} dias</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Data de Início</Text>
            <Text style={styles.infoData}>{begin_date}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Data de Fim</Text>
            <Text style={styles.infoData}>{end_date}</Text>
          </View>
        </View>
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
    marginTop: 20,
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
});
