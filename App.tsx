import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { ViroARSceneNavigator } from "@reactvision/react-viro";
import SplashScreen from "./SplashScreen";
import StoryARScene from "./StoryPages";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <ViroARSceneNavigator
      initialScene={{ scene: StoryARScene }}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
