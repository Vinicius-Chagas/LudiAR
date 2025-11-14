import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroAmbientLight,
  ViroNode,
  Viro3DObject,
  ViroMaterials,
} from "@reactvision/react-viro";
import { Asset } from "expo-asset";
import ActivityScreen from "./ActivityScreen";
import SplashScreen from "./SplashScreen";

// Import the 3D models
import sun from "./assets/hot_sun.glb";
import clouds from "./assets/clouds.glb";

// Create tracking targets first, before any components use them
ViroARTrackingTargets.createTargets({
  qrcode: {
    source: require("./assets/chopper.jpeg"),
    orientation: "Up",
    physicalWidth: 0.1, // in meters
    type: "Image",
  },
  activityScreen: {
    source: require("./assets/ActivityScreen.jpeg"),
    orientation: "Up",
    physicalWidth: 0.1, // in meters - adjust based on actual image size
    type: "Image",
  },
});

// Create materials
const cubeAsset = Asset.fromModule(sun);

ViroMaterials.createMaterials({
  cube: {
    diffuseTexture: { uri: cubeAsset.uri },
  },
});

// Global state to track if image is detected
let imageDetected = false;
let onImageDetectedCallback: ((detected: boolean) => void) | null = null;

export const setImageDetected = (detected: boolean) => {
  imageDetected = detected;
  if (onImageDetectedCallback) {
    onImageDetectedCallback(detected);
  }
};

const ARScene = () => {
  const [sunVisible, setSunVisible] = useState(false);
  const [activityScreenVisible, setActivityScreenVisible] = useState(false);

  const onSunAnchorFound = () => {
    setSunVisible(true);
  };

  const onActivityScreenAnchorFound = () => {
    setActivityScreenVisible(true);
    setImageDetected(true);
  };

  const onActivityScreenAnchorRemoved = () => {
    setActivityScreenVisible(false);
    setImageDetected(false);
  };

  return (
    <ViroARScene>
      <ViroAmbientLight color="#FFFFFF" />
      {/* Original sun asset tracker */}
      <ViroARImageMarker target="qrcode" onAnchorFound={onSunAnchorFound}>
        <ViroNode visible={sunVisible}>
          <Viro3DObject
            source={sun}
            position={[0, 0, 0]}
            scale={[0.05, 0.05, 0.05]}
            type="GLB"
          />
          <Viro3DObject
            source={clouds}
            position={[0, 0.15, 0]}
            rotation={[0, 90, 0]}
            scale={[0.02, 0.02, 0.02]}
            type="GLB"
          />
        </ViroNode>
      </ViroARImageMarker>
      {/* ActivityScreen tracker */}
      <ViroARImageMarker
        target="activityScreen"
        onAnchorFound={onActivityScreenAnchorFound}
        onAnchorRemoved={onActivityScreenAnchorRemoved}
      >
        <ViroNode visible={false}>
          {/* Empty node - ActivityScreen is shown at App level */}
        </ViroNode>
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showActivityScreen, setShowActivityScreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show splash for at least 3 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Set up callback to update state when image is detected
    onImageDetectedCallback = (detected: boolean) => {
      setShowActivityScreen(detected);
    };

    return () => {
      onImageDetectedCallback = null;
    };
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  // Show ActivityScreen if image is detected, otherwise show AR scene
  if (showActivityScreen) {
    return (
      <View style={styles.container}>
        <ActivityScreen
          onClose={() => {
            setShowActivityScreen(false);
            setImageDetected(false);
          }}
        />
      </View>
    );
  }

  return (
    <ViroARSceneNavigator
      initialScene={{ scene: ARScene }}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
