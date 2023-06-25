import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import { LineChart, StackedBarChart } from "react-native-chart-kit";
import { Dimensions, ScrollView } from "react-native";

import CardChallenge from "../components/CardChallenge";
import challengeClient, { getChallengesByUserId } from "../clients/challenge";

import * as WebBrowser from "expo-web-browser";
import useChallengeContext from "../hooks/useChallengeContext";
import useWeighingContext from "../hooks/useWeighingContext";
import { getWeighingsByUserId } from "../clients/weighing";

WebBrowser.maybeCompleteAuthSession();
export default function App({ navigation }) {
  const challengeContext = useChallengeContext();
  const weighingContext = useWeighingContext();
  const screenWidth = Dimensions.get("window").width;
  let username = "Larissa Wong";

  const [dataStackedBarChart, setDataStackedBarChart] = useState({
    labels: ["IMC - Referência", "IMC Atual"],
    legend: [
      "Baixo Peso",
      "Peso Normal",
      "Sobrepeso",
      "Obesidade 1",
      "Obesidade 2",
      "Obesidade 3",
    ],
    data: [
      [18.5, 6.5, 5, 5, 5, 20],
      [0, 0, 40, 0, 0],
    ],
    barColors: [
      "#a1dcf7",
      "#a2f7a1",
      "#eef7a1",
      "#f7d7a1",
      "#f7bea1",
      "#f7a1a1",
    ],
  });

  const [dataLineChart, setDataLineChart] = useState({
    labels: [],
    datasets: [
      {
        data: [0, 0],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ["Pesagens"],
  });

  useEffect(() => {
    getChallengesByUserId(2)
      .then((challenges) => {
        challengeContext.setChallenges(challenges);
      })
      .catch((error) => console.error(error));

    getWeighingsByUserId(2)
      .then((weighings) => {
        weighingContext.setWeighings(weighings);
        const newData = {
          labels: [],
          datasets: [
            {
              data: weighings.map((weighting) => weighting.peso),
              color: (opacity = 1) => `rgba(88, 134, 209, ${opacity})`,
              strokeWidth: 2,
            },
          ],
          legend: ["Pesagens"],
        };
        setDataLineChart(newData);
      })
      .catch((error) => console.error(error));
  }, []);

  const lineChartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0.2,
    backgroundGradientTo: "#7d47c9",
    backgroundGradientToOpacity: 0.8,
    color: (opacity = 1) => `rgba(7, 0, 8, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    fillShadowGradientFrom: "#fff",
    fillShadowGradientFromOpacity: 0.1,
    fillShadowGradientTo: "#fff",
    fillShadowGradientToOpacity: 0.1,
  };

  const stackedBarChartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0.2,
    backgroundGradientTo: "#5886d1",
    backgroundGradientToOpacity: 0.8,
    color: (opacity = 1) => `rgba(7, 0, 8, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    fillShadowGradientFrom: "#fff",
    fillShadowGradientFromOpacity: 0.1,
    fillShadowGradientTo: "#fff",
    fillShadowGradientToOpacity: 0.1,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.welcomeText}>
        <Text style={styles.title}>Olá,</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <LineChart
        style={styles.linechart}
        data={dataLineChart}
        width={screenWidth}
        height={256}
        verticalLabelRotation={30}
        chartConfig={lineChartConfig}
        bezier
        withInnerLines={false}
        withVerticalLabels={false}
      />
      <StackedBarChart
        style={styles.stackedBarChart}
        data={dataStackedBarChart}
        width={screenWidth - 20}
        height={400}
        chartConfig={stackedBarChartConfig}
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
  stackedBarChart: {
    borderRadius: 10,
  },
});
