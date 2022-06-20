import { FlatList, StyleSheet, Dimensions, View } from "react-native";

import data from "../data/DemoData";

import CarItem from "./CarItem";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
