import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroBox,
  ViroMaterials,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroAmbientLight,
  ViroNode,
} from "@reactvision/react-viro";
import { Asset } from "expo-asset";

// Import the image
import cubeTexture from "./assets/cube.jpg";

const ARScene = () => {
  const [visible, setVisible] = useState(false);

  const onAnchorFound = () => {
    setVisible(true);
  };

  return (
    <ViroARScene>
      <ViroAmbientLight color="#FFFFFF" />
      <ViroARImageMarker target="qrcode" onAnchorFound={onAnchorFound}>
        <ViroNode visible={visible}>
          <ViroBox
            position={[0, 0, 0]}
            scale={[0.1, 0.1, 0.1]}
            materials={["cube"]}
          />
        </ViroNode>
      </ViroARImageMarker>
    </ViroARScene>
  );
};

const cubeAsset = Asset.fromModule(cubeTexture);

ViroMaterials.createMaterials({
  cube: {
    diffuseTexture: { uri: cubeAsset.uri },
  },
});

ViroARTrackingTargets.createTargets({
  qrcode: {
    source: require("./assets/9uroMi.png"),
    orientation: "Up",
    physicalWidth: 0.1, // in meters
  },
});

export default function App() {
  return (
    <ViroARSceneNavigator
      initialScene={{
        scene: ARScene,
      }}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
