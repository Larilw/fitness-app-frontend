import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";
import { useState } from "react";
import { TextInput } from "@react-native-material/core";
import { Button } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import * as Crypto from "expo-crypto";

import { getUserByEmail, postUser } from "../clients/user";
import useUserContext from "../hooks/useUserContext";

export default function App({ navigation }) {
  const LoginImage = require("../assets/sittingWoman.png");
  const kgImage = require("../assets/kgImage.png");
  const cmImage = require("../assets/cmImage.png");

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [userWeight, setUserWeight] = useState("");
  const [userHeight, setUserHeight] = useState("");
  const [userDate, setUserDate] = useState(new Date());

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Feminino", value: "feminino" },
    { label: "Masculino", value: "masculino" },
    { label: "Prefiro não informar", value: "naoInformado" },
  ]);
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setUserDate(currentDate);
      toggleDatepicker();
    } else {
      toggleDatepicker();
    }
  };

  const userContext = useUserContext();

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Cadastre-se</Text>
      <Text style={styles.subtext}>
        Isso nos ajuda a calcular seu IMC e manter seu histórico
      </Text>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Image source={LoginImage} style={styles.image} />
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <TextInput
              variant="standard"
              style={styles.input}
              inputContainerStyle={{ borderRadius: 15 }}
              inputStyle={{ borderRadius: 15 }}
              label="Nome"
              value={userName}
              onChangeText={setUserName}
              leading={(props) => (
                <Icon name="file-document-edit-outline" {...props} />
              )}
            />
            <TextInput
              variant="standard"
              style={styles.input}
              inputContainerStyle={{ borderRadius: 15 }}
              inputStyle={{ borderRadius: 15 }}
              label="Email"
              value={userEmail}
              onChangeText={setUserEmail}
              leading={(props) => (
                <Icon name="file-document-edit-outline" {...props} />
              )}
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
              leading={(props) => <Icon name="eye-off" {...props} />}
            />
            <TextInput
              variant="standard"
              style={styles.input}
              inputContainerStyle={{ borderRadius: 15 }}
              inputStyle={{ borderRadius: 15 }}
              label="Confirme sua senha"
              value={passwordConfirmation}
              onChangeText={setPasswordConfirmation}
              secureTextEntry
              leading={(props) => <Icon name="eye-off" {...props} />}
            />
            {showPicker && (
              <DateTimePicker
                mode="date"
                display="default"
                value={userDate}
                onChange={onChange}
              ></DateTimePicker>
            )}
            {!showPicker && (
              <Pressable onPress={toggleDatepicker}>
                <TextInput
                  variant="standard"
                  style={styles.inputDate}
                  inputContainerStyle={{ borderRadius: 15 }}
                  inputStyle={{ borderRadius: 15 }}
                  label="Data de Nascimento"
                  value={`${userDate.getDate().toString()}/${
                    userDate.getMonth() + 1
                  }/${userDate.getFullYear().toString()}`}
                  onChangeText={setUserDate}
                  leading={(props) => (
                    <Icon name="calendar-month-outline" {...props} />
                  )}
                  editable={false}
                />
              </Pressable>
            )}
            <View style={styles.viewInput1}>
              <TextInput
                variant="standard"
                style={styles.inputSmall}
                inputContainerStyle={{ borderRadius: 15 }}
                inputStyle={{ borderRadius: 15 }}
                label="Peso"
                value={userWeight}
                keyboardType="number-pad"
                onChangeText={setUserWeight}
                leading={(props) => <Icon name="pencil" {...props} />}
              />
              <Image source={kgImage} style={styles.smallImage} />
            </View>
            <View style={styles.viewInput2}>
              <TextInput
                variant="standard"
                style={styles.inputSmall}
                inputContainerStyle={{ borderRadius: 15 }}
                inputStyle={{ borderRadius: 15 }}
                label="Altura"
                value={userHeight}
                keyboardType="number-pad"
                onChangeText={setUserHeight}
                leading={(props) => <Icon name="pencil" {...props} />}
              />
              <Image source={cmImage} style={styles.smallImage} />
            </View>
            <Button
              title="Cadastrar"
              containerStyle={{
                backgroundColor: "#c2a1ed",
                borderRadius: 50,
                width: "85%",
                height: "8%",
                justifyContent: "center",
                margin: 20,
                marginBottom: 80,
              }}
              buttonStyle={{ backgroundColor: "#c2a1ed" }}
              onPress={() => {
                if (
                  userName == "" ||
                  userEmail == "" ||
                  userDate == "" ||
                  userWeight == "" ||
                  userHeight == ""
                )
                  alert(
                    "Verifique se há campos não preenchidos, todas as informações são obrigatórias"
                  );
                else {
                  if (userPassword != "" || passwordConfirmation != "") {
                    if (userPassword == passwordConfirmation) {
                      Crypto.digestStringAsync(
                        Crypto.CryptoDigestAlgorithm.SHA256,
                        userPassword
                      ).then((senhaCriptografada) => {
                        console.log("Clicou");
                        getUserByEmail(userEmail)
                          .then((response) => {
                            if (response == "") {
                              postUser(
                                "",
                                userDate,
                                userWeight,
                                userHeight,
                                userName,
                                userEmail,
                                senhaCriptografada
                              ).then((newUser) => {
                                userContext.setUser(newUser);
                                navigation.navigate("Home");
                              });
                            } else {
                              alert("Email já cadastrado");
                            }
                          })
                          .catch((error) => console.log(error));
                        /*
                        
                        */
                      });
                      //navigation.navigate("Home");
                    } else
                      alert(
                        "Verifique a senha, a senha inserida é diferente da confirmação"
                      );
                  } else {
                    alert("O campo de senha é obrigatório");
                  }
                }
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    width: 360,
    height: 280,
    alignItems: "center",
  },
  smallImage: {
    resizeMode: "contain",
    borderRadius: 10,
    marginTop: 15,
    width: 60,
    height: 60,
    alignItems: "center",
  },
  mainText: {
    marginTop: 20,
    fontSize: 20,
  },
  subtext: {
    fontSize: 16,
    textAlign: "center",
    color: "#7B6F72",
  },
  inputDate: {
    backgroundColor: "#f4f5f5",
    borderRadius: 20,
    width: 320,
    marginRight: 15,
    height: 60,
    marginTop: 15,
  },
  inputSmall: {
    marginTop: 15,
    backgroundColor: "#f4f5f5",
    height: 60,
    width: 260,
    marginRight: 10,
    borderRadius: 20,
    justifyContent: "center",
  },
  viewInput1: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewInput2: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 15,
    backgroundColor: "#f4f5f5",
    height: 60,
    width: 320,
    marginRight: 15,
    borderRadius: 20,
    justifyContent: "center",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100%", // Altura mínima para permitir a rolagem
  },
});
