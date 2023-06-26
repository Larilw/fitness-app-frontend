import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function CardChallenge({ label, theme, navigation, onClick }) {
  const onPress = () => {
    onClick();
    navigation.navigate("ChallengeInfo");
  };
  if (theme === "primary") {
    return (
      <View style={styles.cardChallengeContainer}>
        <Pressable style={styles.cardChallenge} onPress={onPress}>
          <Text style={[styles.challengeLabel, { color: "#000" }]}>
            {label}
          </Text>
          <View style={styles.iconContainer}>
            <FontAwesome5
              name="greater-than"
              solid
              style={{ color: "#C58BF2", fontSize: 10 }}
            />
          </View>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.cardChallengeContainer}>
      <Pressable style={styles.cardChallenge} onPress={onPress}>
        <Text style={styles.challengeLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardChallengeContainer: {
    width: 360,
    height: 90,
    marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  cardChallenge: {
    borderRadius: 20,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    backgroundColor: "#FFF",
    elevation: 1.5,
  },
  buttonIcon: {
    paddingRight: 10,
  },
  iconContainer: {
    width: 35,
    height: 35,
    backgroundColor: "#fff",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#C58BF2",
    borderWidth: 1,
  },
  challengeLabel: {
    fontWeight: "bold",
  },
});
