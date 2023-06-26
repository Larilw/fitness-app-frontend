import { StyleSheet, View, Pressable, Text } from "react-native";
import { postUser } from "../clients/user";

export default function ContinueButton({
  label,
  theme,
  navigation,
  gender,
  userDate,
  userWeight,
  userHeight,
}) {
  const onPress = () => {
    postUser(gender, userDate, userWeight, userHeight);
    navigation.navigate("Home");
  };
  if (theme === "primary") {
    return (
      <View style={[styles.continuebuttonContainer, { borderRadius: 99 }]}>
        <Pressable
          style={[styles.continuebutton, { backgroundColor: "#9DCEFF" }]}
          onPress={onPress}
        >
          <Text style={[styles.continuebuttonLabel, { color: "#FFF" }]}>
            {label}
          </Text>
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
    width: 315,
    height: 70,
    marginHorizontal: 50,
    bottom: -0,
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
    color: "#FFF",
    fontSize: 16,
    alignItems: "center",
  },
});
