import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";
import ReturnButton from "../components/ReturnButton";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { getWeighingsByChallengeId } from "../clients/weighing";
import useChallengeContext from "../hooks/useChallengeContext";

export default function ChallengeRecords({ navigation }) {
  const RecordsImage = require("../assets/challenge_records.png");
  const screenWidth = Dimensions.get("window").width;
  const [progresso, setProgresso] = useState(100);
  const challengeContext = useChallengeContext();

  const toggleChallengeButton = () => {
    navigation.navigate("ChallengeInfo");
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const [dataLineChart, setDataLineChart] = useState({
    labels: [],
    datasets: [
      {
        data: [0],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ["Pesagens"],
  });

  useEffect(() => {
    console.log("contexto", challengeContext.getSelectedChallenge().id);
    getWeighingsByChallengeId(challengeContext.getSelectedChallenge().id)
      .then((weighings) => {
        const newData = {
          labels: [],
          datasets: [
            {
              data:
                weighings.length >= 1
                  ? weighings.map((weighting) => Number(weighting.peso))
                  : [0],
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
      <Text style={{ fontSize: 20 }}>Progresso</Text>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground}>
          <View
            style={{
              height: "100%",
              backgroundColor: "#c091e6",
              width: `${progresso}%`,
              borderRadius: 20,
            }}
          />
        </View>
        <Text style={{ marginTop: 5, marginLeft: 5, fontSize: 16 }}>
          {progresso}%
        </Text>
      </View>
      <LineChart
        style={styles.linechart}
        data={dataLineChart}
        width={screenWidth}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
      />
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
  progressBarContainer: {
    height: "10%",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    padding: "7%",
    paddingBottom: "14%",
    paddingTop: "0%",
    flexDirection: "row",
  },
  progressBarBackground: {
    backgroundColor: "#f4f5f5",
    borderRadius: 20,
    width: "90%",
  },
});
