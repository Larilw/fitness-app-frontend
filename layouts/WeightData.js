import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect, useRef } from "react";

import SaveButton from "../components/SaveButton";
import ReturnButton from "../components/ReturnButton";

import BluetoothSerial, {
  BluetoothEventEmitter,
  BluetoothDevice,
} from "react-native-bluetooth-classic";
import { FAB } from "@react-native-material/core";

export default function App({ navigation }) {
  const [receivedData, setReceivedData] = useState("");
  const [wasRead, setWasRead] = useState(false);
  const wasReadRef = useRef(wasRead);

  const WeightImage = require("../assets/jumpingManBlue2.png");

  useEffect(() => {
    BluetoothSerial.connectToDevice("CC:50:E3:9A:08:8A")
      .then((balanca) => {
        balanca.onDataReceived((teste) => {
          const currentWasRead = wasReadRef.current;
          if (!currentWasRead) {
            setWasRead(true);
            setReceivedData(teste.data);
          }
        });
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    wasReadRef.current = wasRead;
  }, [wasRead]);

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
      <FAB
        variant="extended"
        label="Coletar novamente"
        onPress={() => {
          setWasRead(false);
        }}
        color="#92A3FD"
        tintColor="white"
        style={{ marginBottom: 10 }}
      />
      <SaveButton
        label={"Salvar"}
        theme={"primary"}
        navigation={navigation}
        peso={receivedData}
      />
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
