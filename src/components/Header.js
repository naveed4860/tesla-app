import { StyleSheet, View, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    zIndex: 100,
    width: "100%",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
});
