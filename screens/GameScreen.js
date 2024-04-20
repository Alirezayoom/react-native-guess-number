import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>

      <View>
        <Text>Higher or lower?</Text>
        {/* increase and decrease */}
      </View>

      <View>{/* Logs */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
