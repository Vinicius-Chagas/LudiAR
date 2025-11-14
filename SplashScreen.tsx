import React from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/sua_logo_aqui_11.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6", // Light blue background
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "80%",
    height: "80%",
    maxWidth: 400,
    maxHeight: 400,
  },
});

export default SplashScreen;

