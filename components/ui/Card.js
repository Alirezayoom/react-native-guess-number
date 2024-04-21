import { View, StyleSheet } from "react-native";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
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
});

export default Card;
