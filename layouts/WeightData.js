import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";

import SaveButton from "../components/SaveButton";
import ReturnButton from "../components/ReturnButton";

import BluetoothSerial, {
  BluetoothEventEmitter,
  BluetoothDevice,
} from "react-native-bluetooth-classic";

export default function App({ navigation }) {
  const [receivedData, setReceivedData] = useState("");

  const WeightImage = require("../assets/jumpingManBlue2.png");

  useEffect(() => {
    BluetoothSerial.connectToDevice("CC:50:E3:9A:08:8A")
      .then((balanca) => {
        balanca
          .connect()
          .then(() => {
            balanca
              .read()
              .then((leitura) => {
                setReceivedData(leitura);
              })
              .catch((error) => {
                alert("Erro na leitura, verifique a conexão do bluetooth");
                return error;
              });
          })
          .catch((error) => error);
      })
      .catch((error) => {
        alert("Erro na leitura, verifique a conexão do bluetooth");
        return error;
      });
  }, [receivedData, BluetoothSerial]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ReturnButton route={"Home"} navigation={navigation} />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Seu peso atual</Text>
        </View>
      </View>
      <Text style={styles.mainText}>Seu peso atual é</Text>
      <View style={styles.weightDisplay}>
        <Text style={styles.subtext}>{receivedData}</Text>
        <Text style={styles.subtextAdd}>KG</Text>
      </View>
      <SaveButton label={"Salvar"} theme={"primary"} navigation={navigation} />
      <Image source={WeightImage} style={styles.image} />
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
    resizeMode: "contain",
    width: 300,
    height: 480,
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
    marginTop: 10,
    fontSize: 26,
    fontWeight: "bold",
  },
  subtext: {
    fontSize: 100,
    color: "#c091e6",
    fontWeight: "700",
  },
  subtextAdd: {
    marginTop: 75,
    fontSize: 30,
    color: "#caaae3",
    fontWeight: "500",
  },
  weightDisplay: {
    flexDirection: "row",
  },
  titleContainer: {
    width: "90%",
    marginTop: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },
});
