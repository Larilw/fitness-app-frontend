import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { StyleSheet, View, Pressable } from "react-native";

export default function ReturnButton({ route, navigation }) {
  const onPress = () => {
    navigation.navigate(route);
  };
  return (
    <View style={[styles.returnbuttonContainer, { borderRadius: 99 }]}>
      <Pressable style={styles.returnbutton} onPress={onPress}>
        <FontAwesome5
          name="less-than"
          solid
          style={{ color: "#000", fontSize: 12 }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  returnbuttonContainer: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  returnbutton: {
    backgroundColor: "#cccbc8",
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 2,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  returnbuttonLabel: {
    fontSize: 16,
    alignItems: "center",
  },
});
