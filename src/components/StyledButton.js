import { Pressable, StyleSheet, Text, View } from "react-native";

import colors from "../styles/mainStyle";

const StyledButton = ({ type, text, onPress }) => {
  const ButtonColor = type === "primary" ? colors.buttonBlue : colors.buttonRed;
  const textColor = type === "primary" ? colors.white : colors.black;

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: ButtonColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});
