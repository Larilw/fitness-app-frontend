import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, ScrollView } from "react-native";

import CardChallenge from "../components/CardChallenge";
import challengeClient, { getChallengesByUserId } from "../clients/challenge";

import * as WebBrowser from "expo-web-browser";
import useChallengeContext from "../hooks/useChallengeContext";

WebBrowser.maybeCompleteAuthSession();
export default function App({ navigation }) {
  const challengeContext = useChallengeContext();
  const screenWidth = Dimensions.get("window").width;
  let username = "Larissa Wong";
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Rainy Days"], // optional
  };

  useEffect(() => {
    getChallengesByUserId(2)
      .then((challenges) => {
        challengeContext.setChallenges(challenges);
      })
      .catch((error) => console.error(error));
  }, []);

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.welcomeText}>
        <Text style={styles.title}>Olá,</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <LineChart
        style={styles.linechart}
        data={data}
        width={screenWidth}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        Desafios
      </Text>
      <View>
        {challengeContext.challenges.map((challenge, index) => (
          <CardChallenge
            key={challenge.id}
            theme={"primary"}
            navigation={navigation}
            label={challenge.titulo}
            onClick={() => {
              challengeContext.setSelectedChallenge(index);
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    color: "#7B6F72",
  },
  welcomeText: {
    alignContent: "flex-start",
    marginTop: 30,
    textAlign: "left",
    marginRight: 180,
  },
  linechart: {
    borderRadius: 10,
    margin: 10,
  },
});
