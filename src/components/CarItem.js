import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";

import StyledButton from "./StyledButton";

const CarItem = (props) => {
  const { name, tagline, image } = props.car;
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>
      <View style={styles.button}>
        <StyledButton
          type={"primary"}
          text={"Buy Now"}
          onPress={() => {
            console.log(`${name} Clicked`);
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titleContainer: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  button: {
    position: "absolute",
    width: "100%",
    bottom: 50,
  },
});
