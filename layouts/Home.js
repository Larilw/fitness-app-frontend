import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useState } from "react";

import AddButton from "../components/AddButton";
import CardChallenge from "../components/CardChallenge";

export default function App({ navigation }) {
  let username = "Larissa Wong";
  return (
    <View style={styles.container}>
      <View style={styles.welcomeText}>
        <Text style={styles.title}>Olá,</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
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
});
