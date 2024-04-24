import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width < 375) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View>
        <Image
          style={imageStyle}
          source={require("../assets/images/game-over.png")}
        />
      </View>
      <Text style={styles.textSummary}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textSummary: {
    fontFamily: "poppins",
    fontSize: deviceWidth < 375 ? 20 : 24,
    textAlign: "center",
    marginBottom: 24,
    marginHorizontal: 8,
  },
  highlight: {
    fontFamily: "poppins-bold",
  },
});

export default GameOverScreen;
