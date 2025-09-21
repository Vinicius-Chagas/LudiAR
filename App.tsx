import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GLView } from 'expo-gl';
import { CameraView, useCameraPermissions } from 'expo-camera';
import ARScene from './src/scenes/ARScene';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [arScene, setArScene] = useState<ARScene | null>(null);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    return () => {
      if (arScene) {
        arScene.dispose();
      }
    };
  }, [arScene]);

  const onContextCreate = (gl: any) => {
    const scene = new ARScene(gl);
    setArScene(scene);
  };

  const onBarcodeScanned = (result: any) => {
    if (arScene && result.data) {
      arScene.updateViewportSize(width, height);
      arScene.placeObjectAtQR(result.data, result.bounds);
    }
  };

  const clearObjects = () => {
    if (arScene) {
      arScene.clearObjects();
    }
  };

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LudiAR</Text>
        <Text style={styles.message}>Carregando...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LudiAR</Text>
        <Text style={styles.message}>Precisamos de permissão para usar a câmera</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={styles.buttonText}>Permitir Câmera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container} onLayout={() => arScene?.updateViewportSize(width, height)}>
      <CameraView
        style={styles.camera}
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={onBarcodeScanned}
      />
      <GLView
        style={styles.glView}
        onContextCreate={onContextCreate}
      />

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton} onPress={clearObjects}>
          <Text style={styles.controlButtonText}>🗑️ Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.instructions}>
        <Text style={styles.instructionText}>
          Aponte para um QR Code
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 16,
    maxWidth: '80%',
  },
  camera: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  glView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: '#18d100',
    padding: 15,
    borderRadius: 10,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  controls: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
  controlButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  controlButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  instructions: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 15,
    borderRadius: 10,
  },
  instructionText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});