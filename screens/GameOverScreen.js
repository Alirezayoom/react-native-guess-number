import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View>
        <Image source={require("../assets/images/game-over.png")} />
      </View>
      <Text style={styles.textSummary}>
        Your phone needed <Text style={styles.highlight}>X</Text> rounds to
        guess the number <Text style={styles.highlight}>Y</Text>.
      </Text>
      <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textSummary: {
    fontFamily: "poppins",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "poppins-bold",
  },
});

export default GameOverScreen;
