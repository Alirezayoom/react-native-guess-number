import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children }) {
  const pressHandler = () => {
    console.log("pressed");
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#222" }}
        onPress={pressHandler}
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
    padding: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
