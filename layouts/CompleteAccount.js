import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

import ContinueButton from "../components/ContinueButton";

export default function App({ navigation }) {
  const LoginImage = require("../assets/sittingWoman.png");
  const kgImage = require("../assets/kgImage.png");
  const cmImage = require("../assets/cmImage.png");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Feminino", value: "feminino" },
    { label: "Masculino", value: "masculino" },
    { label: "Prefiro não informar", value: "naoInformado" },
  ]);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      toggleDatepicker();
    } else {
      toggleDatepicker();
    }
  };

  return (
    <View style={styles.container}>
      <Image source={LoginImage} style={styles.image} />
      <Text style={styles.mainText}>Vamos completar seu cadastro</Text>
      <Text style={styles.subtext}>Isso nos ajuda a definir suas metas</Text>
      <DropDownPicker
        style={{
          left: 45,
          top: -50,
          backgroundColor: "#f4f5f5",
          borderColor: "#f4f5f5",
          borderRadius: 10,
          width: 305,
          height: 60,
        }}
        dropDownContainerStyle={{
          top: 10,
          left: 45,
          width: 305,
          backgroundColor: "#f4f5f5",
          borderColor: "#f4f5f5",
        }}
        placeholder="Gênero"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      {showPicker && (
        <DateTimePicker
          mode="date"
          display="default"
          value={date}
          onChange={onChange}
        ></DateTimePicker>
      )}
      {!showPicker && (
        <Pressable onPress={toggleDatepicker}>
          <TextInput
            style={styles.inputDate}
            value={`${date.getDate().toString()}/${
              date.getMonth().toString() + 1
            }/${date.getFullYear().toString()}`}
            placeholderTextColor="#000"
            editable={false}
          ></TextInput>
        </Pressable>
      )}
      <View style={styles.viewInput1}>
        <TextInput style={styles.inputSmall} placeholder="Peso"></TextInput>
        <Image source={kgImage} style={styles.smallImage} />
      </View>
      <View style={styles.viewInput2}>
        <TextInput style={styles.inputSmall} placeholder="Altura"></TextInput>
        <Image source={cmImage} style={styles.smallImage} />
      </View>
      <ContinueButton
        label={"Avançar"}
        theme={"primary"}
        navigation={navigation}
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
