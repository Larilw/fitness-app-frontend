import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-elements";
import { TextInput } from "@react-native-material/core";
import { useState } from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import "expo-dev-client";
import * as Crypto from "expo-crypto";
import useUserContext from "../hooks/useUserContext";

import { getUserByEmailAndPassword } from "../clients/user";

export default function App({ navigation }) {
  const LoginImage = require("../assets/group.png");
  const Logo = require("../assets/logo_white.png");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userContext = useUserContext();

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.imageLogo} />
      <Text style={{ fontSize: 20, color: "black" }}>Login</Text>
      <TextInput
        variant="standard"
        style={styles.input}
        inputContainerStyle={{ borderRadius: 15 }}
        inputStyle={{ borderRadius: 15 }}
        label="Email"
        value={userEmail}
        onChangeText={setUserEmail}
        leading={(props) => <Icon name="email-variant" {...props} />}
      />
      <TextInput
        variant="standard"
        style={styles.input}
        inputContainerStyle={{ borderRadius: 15 }}
        inputStyle={{ borderRadius: 15 }}
        label="Senha"
        value={userPassword}
        onChangeText={setUserPassword}
        secureTextEntry
        leading={(props) => <Icon name="lock" {...props} />}
      />
      <Button
        title="Login"
        containerStyle={{
          backgroundColor: "#c2a1ed",
          borderRadius: 50,
          width: "85%",
          marginTop: 10,
          height: "7%",
          justifyContent: "center",
        }}
        buttonStyle={{ backgroundColor: "#c2a1ed" }}
        onPress={() => {
          Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256,
            userPassword
          ).then((senhaCriptografada) => {
            //Chamar o back com o email + senha
            if (userEmail != "" && userPassword != "") {
              console.log(senhaCriptografada);
              getUserByEmailAndPassword(userEmail, senhaCriptografada).then(
                (response) => {
                  if (response == "") {
                    alert("Email ou senha incorretos");
                  } else {
                    userContext.setUser(response);
                    navigation.navigate("Home");
                  }
                }
              );
            } else alert("Verifique se os campos estão preenchidos");
          });
        }}
      />
      <Button
        title="Cadastre-se"
        containerStyle={{
          backgroundColor: "#fff",
          borderRadius: 50,
          width: "85%",
          marginTop: 0,
          height: 40,
        }}
        onPress={() => {
          navigation.navigate("CreateAccount");
        }}
        buttonStyle={{ backgroundColor: "#fff" }}
        titleStyle={{ color: "#c2a1ed" }}
      />
      <Image source={LoginImage} style={styles.image} />
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
    width: 360,
    height: 400,
  },
  mainText: {
    fontSize: 20,
  },
  subtext: {
    fontSize: 16,
  },
  imageLogo: {
    width: 150,
    height: 150,
  },
  input: {
    marginTop: 15,
    backgroundColor: "#f4f5f5",
    height: "6%",
    width: "85%",
    borderRadius: 20,
    paddingLeft: 5,
    justifyContent: "center",
  },
});
