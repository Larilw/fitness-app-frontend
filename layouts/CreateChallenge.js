import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";

import AddButton from "../components/AddButton";

export default function App({ navigation }) {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [showPicker1, setShowPicker1] = useState(false);
  const [showPicker2, setShowPicker2] = useState(false);

  const toggleDatepicker1 = () => {
    setShowPicker1(!showPicker1);
  };

  const toggleDatepicker2 = () => {
    setShowPicker2(!showPicker2);
  };

  const onChange1 = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate1(currentDate);
      toggleDatepicker1();
    } else {
      toggleDatepicker1();
    }
  };

  const onChange2 = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate2(currentDate);
      toggleDatepicker2();
    } else {
      toggleDatepicker2();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Desafio</Text>

      <Stack spacing={2} style={{ margin: 16 }}>
        <TextInput
          label="Título"
          leading={(props) => <Icon name="account" {...props} />}
        />
        <TextInput
          label="Descrição"
          leading={(props) => <Icon name="account" {...props} />}
        />

        <TextInput
          label="Quilos a Perder"
          leading={(props) => <Icon name="account" {...props} />}
          keyboardType="numeric"
        />
        {showPicker1 && (
          <DateTimePicker
            mode="date"
            display="default"
            value={date1}
            onChange={onChange1}
          ></DateTimePicker>
        )}
        {!showPicker1 && (
          <View>
            <Pressable onPress={toggleDatepicker1}>
              <TextInput
                style={styles.inputDate}
                value={`${date1.getDate().toString()}/${date1
                  .getMonth()
                  .toString()}/${date1.getFullYear().toString()}`}
                placeholderTextColor="#000"
                editable={false}
              ></TextInput>
            </Pressable>
          </View>
        )}

        {showPicker2 && (
          <DateTimePicker
            mode="date"
            display="default"
            value={date2}
            onChange={onChange2}
          ></DateTimePicker>
        )}
        {!showPicker2 && (
          <View>
            <Pressable onPress={toggleDatepicker2}>
              <TextInput
                style={styles.inputDate}
                value={`${date2.getDate().toString()}/${date2
                  .getMonth()
                  .toString()}/${date2.getFullYear().toString()}`}
                placeholderTextColor="#000"
                editable={false}
              ></TextInput>
            </Pressable>
          </View>
        )}
      </Stack>

      <AddButton theme={"primary"} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    top: -160,
    fontSize: 20,
    bottom: 200,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputDate: {
    backgroundColor: "#f4f5f5",
    borderRadius: 10,
    width: 305,
    height: 60,
    padding: 10,
  },
  input: {
    backgroundColor: "#f4f5f5",
    borderRadius: 10,
    width: 305,
    height: 60,
    padding: 10,
  },
  inputContainer: {
    gap: 10,
    backgroundColor: "#000",
  },
  titleInput: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
