import { StyleSheet, View, Pressable, Text } from "react-native";

import RNBluetoothClassic, {
  BluetoothDevice,
} from "react-native-bluetooth-classic";

export default function ContinueButton({ label, theme, navigation }) {
  const onPress = () => {
    RNBluetoothClassic.openBluetoothSettings();
  };
  if (theme === "primary") {
    return (
      <View style={[styles.continuebuttonContainer, { borderRadius: 99 }]}>
        <Pressable
          style={[styles.continuebutton, { backgroundColor: "#92A3FD" }]}
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
    marginTop: 10,
    width: 315,
    height: "7%",
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
