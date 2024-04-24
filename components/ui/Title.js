import { StyleSheet, Text, Dimensions } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    fontSize: deviceWidth < 375 ? 20 : 24,
    fontFamily: "poppins-bold",
    borderColor: "black",
    borderWidth: 2,
    padding: 8,
    paddingHorizontal: 16,
    textAlignVertical: "center",
    textAlign: "center",
  },
});

export default Title;
