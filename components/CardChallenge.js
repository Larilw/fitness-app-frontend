import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function CardChallenge({ label, theme, navigation }) {
  const onPress = () => {
    navigation.navigate("CreateChallenge");
  };
  if (theme === "primary") {
    return (
      <View style={[styles.cardChallengeContainer, { borderRadius: 99 }]}>
        <Pressable style={styles.cardChallenge} onPress={onPress}>
          <Text style={[styles.challengeLabel, { color: "#FFF" }]}>
            {label}
          </Text>
          <View style={styles.iconContainer}>
            <FontAwesome5
              name="greater-than"
              solid
              style={{ color: "#92A3FD", fontSize: 10 }}
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
    width: 315,
    height: 70,
    marginHorizontal: 50,
    bottom: -60,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  cardChallenge: {
    borderRadius: 99,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
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
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#92A3FD",
    borderWidth: 1,
  },
});
