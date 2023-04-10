import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function WelcomeButton({ label, theme, onPress }) {
    if (theme === "primary") {
      return (
        <View style={[styles.welcomebuttonContainer, { borderRadius: 99 }]}>
            <Pressable
                style={[styles.welcomebutton, { backgroundColor: "#FFF" }]}
                onPress={onPress}
            >
            <FontAwesome
                name="google"
                size={18}
                color="#25292e"
                style={styles.buttonIcon}
            />
            <Text style={[styles.welcomebuttonLabel, { color: "#000" }]}>{label}</Text>
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
    bottom: -120,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  welcomebutton: {
    borderRadius: 99,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 1,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  welcomebuttonLabel: {
    color: '#000',
    fontSize: 16,
    alignItems: 'center',
  },
});
