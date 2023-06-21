import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  Platform,
  PermissionsAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
//import * as Permissions from "expo-permissions";

import ConnectButton from "../components/ConnectButton";
import DataButton from "../components/GetDataButton";

import BluetoothSerial, {
  BluetoothEventEmitter,
  BluetoothDevice,
} from "react-native-bluetooth-classic";

const askPermission = async () => {
  await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
    {
      title: "Bluetoth Permission",
      message: "This app needs access to your bluetooth.",
      buttonPositive: "OK",
      buttonNegative: "Cancel",
    }
  );
  await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT
  );
};
export default function ScaleConnection({ navigation }) {
  let connection = "Conectado";
  const [isEnabled, setIsEnabled] = useState(false);
  const ConnectionImage = require("../assets/cardWomanBlue.png");
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    askPermission();
    BluetoothSerial.connectToDevice("CC:50:E3:9A:08:8A")
      .then((balanca) => {
        balanca
          .connect()
          .then(() => {
            balanca
              .read()
              .then((leitura) => {
                console.log(leitura);
              })
              .catch((error) => error);
          })
          .catch((error) => error);
      })
      .catch((error) => error);
    BluetoothSerial.getConnectedDevices().then((devices) => {
      if (devices && devices.length > 0) {
        const connectedDevice = devices[0];
        const { address } = connectedDevice;
        console.log("Connected device address:", address);
      }
    });
  }, []);

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
      <DataButton
        theme={"primary"}
        navigation={navigation}
        label={"Obter peso atual"}
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
    marginTop: 10,
    resizeMode: "contain",
    width: 300,
    height: 360,
    borderRadius: 40,
    alignItems: "center",
  },
  title: {
    marginTop: 60,
    fontSize: 20,
    fontWeight: "bold",
  },
  mainText: {
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  subtext: {
    margin: 10,
    fontSize: 16,
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
  },
  connectionTitle: {
    paddingTop: 20,
    marginLeft: 10,
    fontSize: 16,
  },
  connectionSubtext: {
    fontSize: 12,
    marginLeft: 10,
  },
  switch: {
    top: -30,
    marginRight: 10,
  },
});
