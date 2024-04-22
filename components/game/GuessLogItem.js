import { StyleSheet, Text, View } from "react-native";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  itemText: {
    fontFamily: "poppins",
  },
});

export default GuessLogItem;
