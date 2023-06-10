import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { StyleSheet, View, Pressable } from "react-native";

export default function AddButton({ label, theme, navigation }) {
  const onPress = () => {
    navigation.navigate("Home");
  };
  if (theme === "primary") {
    return (
      <View style={[styles.continuebuttonContainer, { borderRadius: 99 }]}>
        <Pressable
          style={[styles.continuebutton, { backgroundColor: "#c2a1ed" }]}
          onPress={onPress}
        >
          <FontAwesome5
            name="plus"
            solid
            style={{ color: "#fff", fontSize: 16 }}
          />
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.continuebuttonContainer}>
      <Pressable style={styles.continuebutton} onPress={onPress}>
        <Text style={styles.continuebuttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  continuebuttonContainer: {
    margin: 20,
    width: 85,
    height: 85,
    marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  continuebutton: {
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
  continuebuttonLabel: {
    fontSize: 16,
    alignItems: "center",
  },
});
