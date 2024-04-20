import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="enter number" />
      <View>
        <PrimaryButton>Rest</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 32,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "#ddd",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
});

export default StartGameScreen;
