import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { StyleSheet, View, Pressable } from "react-native";

export default function ReturnButton({ label, theme, navigation }) {
  const onPress = () => {
    navigation.navigate("Home");
  };
  if (theme === "primary") {
    return (
      <View style={[styles.returnbuttonContainer, { borderRadius: 99 }]}>
        <Pressable
          style={[styles.returnbutton, { backgroundColor: "#c2a1ed" }]}
          onPress={onPress}
        >
          <FontAwesome5
            name="less-than"
            solid
            style={{ color: "#fff", fontSize: 16 }}
          />
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.returnbuttonContainer}>
      <Pressable style={styles.returnbutton} onPress={onPress}>
        <Text style={styles.returnbuttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  returnbuttonContainer: {
    width: 85,
    height: 85,
    marginHorizontal: 50,
    bottom: -120,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  returnbutton: {
    borderRadius: 99,
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
    elevation: 1,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  returnbuttonLabel: {
    fontSize: 16,
    alignItems: "center",
  },
});
