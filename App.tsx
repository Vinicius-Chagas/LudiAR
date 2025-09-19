import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GLView } from 'expo-gl';
import { CameraView, useCameraPermissions } from 'expo-camera';
import CubeScene from './src/scenes/CubeScene';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [cubeScene, setCubeScene] = useState<CubeScene | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return () => {
      if (cubeScene) {
        cubeScene.dispose();
      }
    };
  }, [cubeScene]);

  useEffect(() => {
    if (permission !== null) {
      setIsLoading(false);
    }
  }, [permission]);

  const onContextCreate = (gl: any) => {
    try {
      const scene = new CubeScene(gl);
      setCubeScene(scene);
    } catch (error) {
      console.error('Error creating cube scene:', error);
    }
  };

  if (isLoading || permission === null) {
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
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        onCameraReady={() => console.log('Camera is ready')}
      />
      <GLView
        style={styles.glView}
        onContextCreate={onContextCreate}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
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
});
