import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import CartItem from "./component/CartItem";
import CarsList from "./component/CarsList";
import Header from "./component/Header";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CartItem
        name={"Model 3"}
        tagLine={"Starting from $99,500"}
        image={require("./assets/images/Model3.jpeg")}
        tagLinecta={"Touchless Delivery"}
      /> */}
      <Header />
      <CarsList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
