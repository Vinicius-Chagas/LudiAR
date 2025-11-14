// import React, { useState } from "react";
// import { StyleSheet } from "react-native";
// import {
//   ViroARScene,
//   ViroARSceneNavigator,
//   ViroBox,
//   ViroMaterials,
//   ViroARImageMarker,
//   ViroARTrackingTargets,
//   ViroAmbientLight,
//   ViroNode,
//   Viro3DObject,
// } from "@reactvision/react-viro";
// import { Asset } from "expo-asset";

// // Import the 3D model
// import sun from "./assets/hot_sun.glb";

// // Create tracking targets first, before any components use them
// ViroARTrackingTargets.createTargets({
//   qrcode: {
//     source: require("./assets/9uroMi.png"),
//     orientation: "Up",
//     physicalWidth: 0.1, // in meters
//   },
// });

// // Create materials
// const cubeAsset = Asset.fromModule(sun);

// ViroMaterials.createMaterials({
//   cube: {
//     diffuseTexture: { uri: cubeAsset.uri },
//   },
// });

// const ARScene = () => {
//   const [visible, setVisible] = useState(false);

//   const onAnchorFound = () => {
//     setVisible(true);
//   };

//   return (
//     <ViroARScene>
//       <ViroAmbientLight color="#FFFFFF" />
//       <ViroARImageMarker target="qrcode" onAnchorFound={onAnchorFound}>
//         <ViroNode visible={visible}>
//           <Viro3DObject
//             source={sun}
//             position={[0, 0, 0]}
//             scale={[0.1, 0.1, 0.1]}
//             type="GLB"
//           />
//         </ViroNode>
//       </ViroARImageMarker>
//     </ViroARScene>
//   );
// };

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <ActivityScreen />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import ActivityScreen from "./ActivityScreen";
import SplashScreen from "./SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show splash for at least 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      <ActivityScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
