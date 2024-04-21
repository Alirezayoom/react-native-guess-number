import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "poppins-bold",
    borderColor: "black",
    borderWidth: 2,
    padding: 8,
    textAlign: "center",
  },
});

export default Title;
