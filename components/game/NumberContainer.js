import { StyleSheet, Text, View } from "react-native";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "black",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
  },
  numberText: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default NumberContainer;
