import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { TextInput, Snackbar, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";

import AddButton from "../components/AddButton";

export default function App({ navigation }) {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [showPicker1, setShowPicker1] = useState(false);
  const [showPicker2, setShowPicker2] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [weightLoss, setWeightLoss] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

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
      {snackBarOpen ? (
        <Snackbar
          message="Novo desafio criado com sucesso!"
          action={
            <Button
              variant="text"
              title="Fechar"
              color="#BB86FC"
              compact
              onPress={() => setSnackBarOpen(false)}
            />
          }
          style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
        />
      ) : null}
      <Text style={styles.title}>Criar Desafio</Text>

      <View style={styles.inputContainer}>
        <TextInput
          variant="standard"
          style={styles.input}
          inputContainerStyle={{ borderRadius: 15 }}
          inputStyle={{ borderRadius: 15 }}
          label="Título"
          value={title}
          onChangeText={setTitle}
          leading={(props) => <Icon name="pencil" {...props} />}
        />
        <TextInput
          variant="standard"
          style={styles.input}
          inputContainerStyle={{ borderRadius: 15 }}
          inputStyle={{ borderRadius: 15 }}
          label="Descrição"
          value={description}
          onChangeText={setDescription}
          leading={(props) => (
            <Icon name="file-document-edit-outline" {...props} />
          )}
        />

        <TextInput
          variant="standard"
          keyboardType="number-pad"
          style={styles.input}
          inputContainerStyle={{ borderRadius: 15 }}
          inputStyle={{ borderRadius: 15 }}
          label="Peso desejado"
          value={weightLoss}
          onChangeText={setWeightLoss}
          leading={(props) => <Icon name="weight-kilogram" {...props} />}
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
          <Pressable onPress={toggleDatepicker1}>
            <TextInput
              variant="standard"
              style={styles.input}
              inputContainerStyle={{ borderRadius: 15 }}
              inputStyle={{ borderRadius: 15 }}
              label="Data Inicial"
              value={`${date1.getDate().toString()}/${
                date1.getMonth() + 1
              }/${date1.getFullYear().toString()}`}
              onChangeText={setDate1}
              leading={(props) => (
                <Icon name="calendar-month-outline" {...props} />
              )}
              editable={false}
            />
          </Pressable>
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
          <Pressable onPress={toggleDatepicker2}>
            <TextInput
              variant="standard"
              style={styles.input}
              inputContainerStyle={{ borderRadius: 15 }}
              inputStyle={{ borderRadius: 15 }}
              label="Data Final"
              value={`${date2.getDate().toString()}/${
                date2.getMonth() + 1
              }/${date2.getFullYear().toString()}`}
              onChangeText={setDate2}
              leading={(props) => (
                <Icon name="calendar-month-outline" {...props} />
              )}
              editable={false}
            />
          </Pressable>
        )}
      </View>
      <AddButton
        theme={"primary"}
        navigation={navigation}
        setSnackBarOpen={setSnackBarOpen}
        title={title}
        description={description}
        dateBegin={date1.getTime()}
        dateEnd={date2.getTime()}
        //Arrumar o id depois
        weightLoss={weightLoss}
        userId={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputDate: {
    backgroundColor: "#f4f5f5",
    borderRadius: 10,
    width: 305,
    height: 60,
    padding: 10,
  },
  input: {
    marginTop: 15,
    backgroundColor: "#f4f5f5",
    height: 60,
    borderRadius: 20,
    paddingLeft: 5,
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
  },
  titleInput: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
