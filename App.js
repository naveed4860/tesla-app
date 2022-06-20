import { StyleSheet, View, StatusBar } from "react-native";
import CarsList from "./src/components/CarsList";
import Header from "./src/components/Header";

import colors from "./src/styles/mainStyle";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <CarsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
