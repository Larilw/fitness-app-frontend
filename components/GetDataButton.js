import { StyleSheet, View, Pressable, Text } from "react-native";

export default function ContinueButton({ label, theme, navigation }) {
  const onPress = () => {
    navigation.navigate("WeightData");
  };
  if (theme === "primary") {
    return (
      <View style={[styles.getDataButtonContainer, { borderRadius: 99 }]}>
        <Pressable
          style={[styles.getDataButton, { backgroundColor: "#92A3FD" }]}
          onPress={onPress}
        >
          <Text style={[styles.getDataButtonLabel, { color: "#FFF" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.getDataButtonContainer}>
      <Pressable style={styles.getDataButton} onPress={onPress}>
        <Text style={styles.getDataButtonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  getDataButtonContainer: {
    width: 315,
    height: 70,
    marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  getDataButton: {
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
  getDataButtonLabel: {
    fontSize: 16,
    alignItems: "center",
  },
});
