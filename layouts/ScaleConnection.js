import { StyleSheet, Text, View, Image, Switch } from "react-native";
import { useState } from "react";
import ConnectButton from "../components/ConnectButton";

export default function ScaleConnection({ navigation }) {
  let connection = "Conectado";
  const [isEnabled, setIsEnabled] = useState(false);
  const ConnectionImage = require("../assets/cardWomanBlue.png");

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Balança Inteligente</Text>
      <Text style={styles.mainText}>Conecte seu celular com a balança</Text>
      <Text style={styles.subtext}>
        Assim saberemos seu peso atual e será possível salvá-lo para acompanhar
        seu progresso.
      </Text>
      <View style={styles.connectionCard}>
        <Text style={styles.connectionTitle}>Status da Conexão</Text>
        <Text style={styles.connectionSubtext}>{connection}</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "#DDDADA", true: "#d8b3f5" }}
          thumbColor={isEnabled ? "#C58BF2" : "#DDDADA"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <ConnectButton
        theme={"primary"}
        navigation={navigation}
        label={"Conectar"}
      />
      <Image source={ConnectionImage} style={styles.image} />
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
  mainText: {
    top: 10,
    fontSize: 20,
    bottom: 200,
    fontWeight: "bold",
  },
  subtext: {
    top: 25,
    fontSize: 16,
    bottom: 180,
    color: "#000",
    fontWeight: "300",
  },
  connectionCard: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 4,
    width: 325,
    height: 80,
    top: 60,
  },
  connectionTitle: {
    left: 20,
    top: 20,
    fontSize: 16,
    bottom: 1,
  },
  connectionSubtext: {
    left: 20,
    top: 22,
    fontSize: 12,
    bottom: 1,
  },
  switch: {
    right: 20,
    top: -20,
  },
});
