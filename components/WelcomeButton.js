import { StyleSheet, View, Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function WelcomeButton({ label, theme, navigation }) {
  const onPress = () => {
    navigation.navigate("Login");
  };
  if (theme === "primary") {
    return (
      <View style={[styles.welcomebuttonContainer, { borderRadius: 99 }]}>
        <Pressable
          style={[styles.welcomebutton, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
          <Text style={[styles.welcomebuttonLabel, { color: "#9DCEFF" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.welcomebuttonContainer}>
      <Pressable style={styles.welcomebutton} onPress={onPress}>
        <Text style={styles.welcomebuttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomebuttonContainer: {
    width: 315,
    height: 70,
    marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  welcomebutton: {
    borderRadius: 99,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  welcomebuttonLabel: {
    color: "#9DCEFF",
    fontSize: 16,
    alignItems: "center",
  },
});
