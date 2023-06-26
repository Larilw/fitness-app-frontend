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
import useUserContext from "../hooks/useUserContext";

WebBrowser.maybeCompleteAuthSession();

function ColorLegend({ data }) {
  const texto = [
    "Obesidade Grau 3",
    "Obesidade Grau 2",
    "Obesidade Grau 1",
    "Sobrepeso",
    "Peso Normal",
    "Baixo peso",
  ];
  return (
    <View style={styles.colorLegendContainer}>
      {data.map((color, index) => (
        <View key={index} style={styles.colorLegendItem}>
          <View style={[styles.colorLegendDot, { backgroundColor: color }]} />
          <Text style={styles.colorLegendText}>{texto[index]}</Text>
        </View>
      ))}
    </View>
  );
}

export default function App({ navigation }) {
  const challengeContext = useChallengeContext();
  const weighingContext = useWeighingContext();
  const userContext = useUserContext();
  const userId = 2;
  const screenWidth = Dimensions.get("window").width;
  let username = "Larissa Wong";
  const [imc, setImc] = useState(0);

  const getImcLevel = (valor) => {
    const range = [18.5, 25, 30, 35, 40, 45];
    let res = 5;
    range.forEach((imc, index) => {
      if (valor <= imc) res = index;
    });
    return res;
  };

  const createImcArray = (imc) => {
    const index = getImcLevel(imc);
    const array = [0, 0, 0, 0, 0, 0];
    array[index] = imc;
    return array;
  };

  const [dataStackedBarChart, setDataStackedBarChart] = useState({
    labels: ["IMC - Referência", "IMC Atual"],
    data: [
      [18.5, 6.5, 5, 5, 5, 5],
      [0, 0, 0, 0, 0, 0],
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
    //console.log("Carregou");
    if (challengeContext.newChallenge) {
      challengeContext.setNewChallenge(false);
    }
    getChallengesByUserId(userId)
      .then((challenges) => {
        challengeContext.setChallenges(challenges);
      })
      .catch((error) => console.error(error));

    getWeighingsByUserId(userId)
      .then((weighings) => {
        weighingContext.setWeighings(weighings);
        const pesagensOrdenadas = weighings.sort((a, b) => {
          return a.dataPesagem - b.dataPesagem;
        });
        const ultimaPesagem = pesagensOrdenadas[pesagensOrdenadas.length - 1];
        const altura = userContext.user.altura / 100;
        setImc(ultimaPesagem.peso / (altura * altura));
        getImcLevel(imc);

        const dataImc = {
          labels: ["IMC - Referência", "IMC Atual"],
          data: [[18.5, 6.5, 5, 5, 5, 5], createImcArray(imc)],
          barColors: [
            "#a1dcf7",
            "#a2f7a1",
            "#eef7a1",
            "#f7d7a1",
            "#f7bea1",
            "#f7a1a1",
          ],
        };
        setDataStackedBarChart(dataImc);

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
  }, [challengeContext.newChallenge]);

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
    propsForLabels: { fill: "transparent" },
  };

  const reversedBarColors = [...dataStackedBarChart.barColors].reverse();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.welcomeText}>
        <Text style={styles.title}>Olá,</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <LineChart
        style={styles.linechart}
        data={dataLineChart}
        width={screenWidth - 10}
        height={180}
        verticalLabelRotation={30}
        chartConfig={lineChartConfig}
        bezier
        withInnerLines={false}
        withVerticalLabels={false}
      />
      <View style={{ flexDirection: "row" }}>
        <StackedBarChart
          style={styles.stackedBarChart}
          data={dataStackedBarChart}
          width={screenWidth - 170}
          height={200}
          chartConfig={stackedBarChartConfig}
        />
        <ColorLegend data={reversedBarColors} />
      </View>
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
  legendTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  colorLegendContainer: {
    alignItems: "baseline",
    justifyContent: "center",
    marginVertical: 10,
  },
  colorLegendItem: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10,
  },
  colorLegendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  colorLegendText: {
    fontSize: 13,
  },
  challengeTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
});
