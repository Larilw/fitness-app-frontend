import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import ReturnButton from "../components/ReturnButton";
import useChallengeContext from "../hooks/useChallengeContext";

export default function ChallengeInfo({ navigation }) {
  const challengeContext = useChallengeContext();
  const challenge =
    challengeContext.challenges[challengeContext.selectedChallenge];
  console.log(challengeContext.selectedChallenge);
  let begin_date = new Date(Number(challenge.dataInicio));
  let formattedBeginDate = `${begin_date.getDate()}/${
    begin_date.getMonth() + 1
  }/${begin_date.getFullYear()}`;
  let end_date = new Date(Number(challenge.dataFinal));
  let formattedEndDate = `${end_date.getDate()}/${
    end_date.getMonth() + 1
  }/${end_date.getFullYear()}`;
  let today = new Date();
  let time_remaining = Number(
    (end_date.getTime() - today.getTime()) / (1000 * 3600 * 24) + 1
  ).toFixed(0);

  if (time_remaining < 0) time_remaining = 0;

  let total_time = Number(
    (end_date.getTime() - begin_date.getTime()) / (1000 * 3600 * 24) + 1
  ).toFixed(0);

  const InfoImage = require("../assets/challenge_info.png");

  const toggleChallengeButton = () => {
    navigation.navigate("ChallengeRecords");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ReturnButton route={"Home"} navigation={navigation} />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{challenge.titulo}</Text>
        </View>
      </View>
      <View>
        <Pressable onPress={toggleChallengeButton}>
          <Image source={InfoImage} style={styles.image} />
        </Pressable>
      </View>
      <View>
        <Text style={styles.mainText}>Descrição</Text>
        <Text style={styles.subtext}>{challenge.descricao}</Text>
      </View>
      <View style={styles.infoCardContainer}>
        <View style={styles.column}>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Objetivo</Text>
            <Text style={styles.infoData}>{challenge.meta} KG</Text>
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
            <Text style={styles.infoData}>{formattedBeginDate}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Data de Fim</Text>
            <Text style={styles.infoData}>{formattedEndDate}</Text>
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
