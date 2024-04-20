import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
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
    borderRadius: 16,
    elevation: 0,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  numberInput: {
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "#333",
    borderBottomWidth: 2,
    marginBottom: 8,
  },
});

export default StartGameScreen;
