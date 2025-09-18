import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GLView } from 'expo-gl';
import { CameraView, useCameraPermissions } from 'expo-camera';
import CubeScene from './src/scenes/CubeScene';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [cubeScene, setCubeScene] = useState<CubeScene | null>(null);

  useEffect(() => {
    return () => {
      if (cubeScene) {
        cubeScene.dispose();
      }
    };
  }, [cubeScene]);

  const onContextCreate = (gl: any) => {
    const scene = new CubeScene(gl);
    setCubeScene(scene);
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Precisamos de permissão para usar a câmera</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={styles.buttonText}>Permitir Câmera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing="back">
        <GLView
          style={styles.glView}
          onContextCreate={onContextCreate}
        />
      </CameraView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 16,
  },
  camera: {
    flex: 1,
  },
  glView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: '#007AFF',
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
});
