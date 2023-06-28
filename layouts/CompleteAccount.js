import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import { TextInput } from "@react-native-material/core";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import ContinueButton from "../components/ContinueButton";

export default function App({ navigation }) {
  const LoginImage = require("../assets/sittingWoman.png");
  const kgImage = require("../assets/kgImage.png");
  const cmImage = require("../assets/cmImage.png");

  const [userWeight, setUserWeight] = useState();
  const [userHeight, setUserHeight] = useState();
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

  return (
    <View style={styles.container}>
      <Image source={LoginImage} style={styles.image} />
      <Text style={styles.mainText}>Vamos completar seu cadastro</Text>
      <Text style={styles.subtext}>Isso nos ajuda a calcular seu IMC</Text>
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
      <ContinueButton
        label={"Avançar"}
        theme={"primary"}
        navigation={navigation}
        gender={value}
        userDate={userDate.getTime()}
        userWeight={userWeight}
        userHeight={userHeight}
      />
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
    top: -30,
    width: 360,
    height: 400,
    alignItems: "center",
  },
  smallImage: {
    resizeMode: "contain",
    top: 60,
    borderRadius: 10,
    width: 60,
    height: 60,
    alignItems: "center",
  },
  mainText: {
    top: -75,
    fontSize: 20,
    bottom: 200,
  },
  subtext: {
    top: -70,
    fontSize: 16,
    bottom: 180,
    color: "#7B6F72",
  },
  inputDate: {
    backgroundColor: "#f4f5f5",
    borderRadius: 10,
    width: 305,
    height: 60,
    top: -40,
    padding: 10,
  },
  inputSmall: {
    backgroundColor: "#f4f5f5",
    borderRadius: 10,
    width: 245,
    height: 60,
    top: 60,
    padding: 10,
  },
  viewInput1: {
    flexDirection: "row",
    top: -90,
  },
  viewInput2: {
    flexDirection: "row",
    top: -80,
  },
});
