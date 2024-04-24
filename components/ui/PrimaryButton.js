import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#222" }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#333",
    margin: 8,
    borderRadius: 32,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontFamily: "poppins",
    textAlignVertical: "center",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
