import { StyleSheet, Text, View, Image } from 'react-native';

import LoginButton from '../components/LoginButton';

export default function App({imageSource}) {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.mainText}>Nome do App</Text>
      <Text style={styles.subtext}>Slogan</Text>
      <LoginButton label={"Faça login com Google"} theme={'primary'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    top: 50,
    width: 360,
    height: 400,
    alignItems: 'center'
  },
  mainText: {
    top: -480,
    fontSize: 20,
    bottom: 200,
  },
  subtext: {
    top: -460,
    fontSize: 16,
    bottom: 180,
  }
});
