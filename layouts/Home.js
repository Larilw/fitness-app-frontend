import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useState } from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

import AddButton from "../components/AddButton";
import CardChallenge from "../components/CardChallenge";

export default function App({ navigation }) {
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
    <View style={styles.container}>
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
      <CardChallenge
        theme={"primary"}
        navigation={navigation}
        label={"Desafio x"}
      />
      <CardChallenge
        theme={"primary"}
        navigation={navigation}
        label={"Desafio x"}
      />
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
