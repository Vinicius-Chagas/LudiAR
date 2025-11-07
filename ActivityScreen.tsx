import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Vibration,
} from "react-native";
import { Audio } from "expo-av";

const mockData = {
  question: "What is a whale?",
  r_1: "Animal",
  r_2: "Bug",
  r_3: "Car",
  r_4: "Fish",
  c_r: "Animal",
};

const ActivityScreen: React.FC = () => {
  const [data] = useState(mockData);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Refs to hold loaded Audio.Sound instances
  const correctSoundRef = useRef<Audio.Sound | null>(null);
  const wrongSoundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    let mounted = true;

    async function setupAudioAndLoadSounds() {
      try {
        console.log("🔊 Starting audio setup...");

        // Configure audio mode (important on iOS for silent-mode playback)
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: false,
        });
        console.log("✅ Audio mode configured");

        console.log("📂 Loading correct-answer.mp3...");
        const correctResult = await Audio.Sound.createAsync(
          require("./assets/correct-answer.mp3"),
        );
        console.log("✅ Correct answer sound loaded:", correctResult);

        console.log("📂 Loading wrong-answer.mp3...");
        const wrongResult = await Audio.Sound.createAsync(
          require("./assets/wrong-answer.mp3"),
        );
        console.log("✅ Wrong answer sound loaded:", wrongResult);

        if (!mounted) {
          // If component unmounted while loading, unload immediately
          console.log("⚠️ Component unmounted, unloading sounds");
          try {
            if (correctResult.sound) await correctResult.sound.unloadAsync();
            if (wrongResult.sound) await wrongResult.sound.unloadAsync();
          } catch (e) {
            // ignore
          }
          return;
        }

        correctSoundRef.current = correctResult.sound;
        wrongSoundRef.current = wrongResult.sound;
        console.log("✅ All sounds loaded and ready!");
      } catch (e) {
        // If loading fails, keep refs null and log
        console.error("❌ Error loading sounds:", e);
      }
    }

    setupAudioAndLoadSounds();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    return () => {
      mounted = false;
      // Unload sounds on cleanup
      (async () => {
        try {
          if (correctSoundRef.current) {
            await correctSoundRef.current.unloadAsync();
            correctSoundRef.current = null;
          }
          if (wrongSoundRef.current) {
            await wrongSoundRef.current.unloadAsync();
            wrongSoundRef.current = null;
          }
        } catch (e) {
          console.warn("Error unloading sounds", e);
        }
      })();
    };
  }, [fadeAnim]);

  async function playSound(correct: boolean) {
    try {
      console.log(
        `🎵 Attempting to play ${correct ? "CORRECT" : "WRONG"} sound`,
      );
      const sound = correct ? correctSoundRef.current : wrongSoundRef.current;

      if (!sound) {
        console.warn("⚠️ Sound not loaded yet!");
        return;
      }

      console.log("✅ Sound object exists, attempting playback...");

      // Get status before playing
      const statusBefore = await sound.getStatusAsync();
      console.log("📊 Sound status before play:", statusBefore);

      // Stop if playing, reset position, and play
      await sound.stopAsync();
      await sound.setPositionAsync(0);
      await sound.playAsync();

      const statusAfter = await sound.getStatusAsync();
      console.log("📊 Sound status after play:", statusAfter);
      console.log("✅ Sound playback command executed!");
    } catch (e) {
      console.error("❌ Error playing sound:", e);
    }
  }

  const handleAnswer = async (answer: string) => {
    console.log("🎯 handleAnswer called with:", answer);
    setSelectedAnswer(answer);
    const correct = answer === data.c_r;
    console.log("✓ Is correct?", correct);
    setIsCorrect(correct);

    // Play sound
    console.log("🔊 About to call playSound...");
    await playSound(correct);

    // Vibrate
    if (correct) {
      Vibration.vibrate(400);
    } else {
      Vibration.vibrate([0, 200, 100, 200]);
    }
  };

  if (isCorrect === true) {
    return (
      <View
        style={[styles.container, styles.correctScreen]}
        onTouchEnd={() => setIsCorrect(null)}
      />
    );
  }

  if (isCorrect === false) {
    return (
      <View
        style={[styles.container, styles.incorrectScreen]}
        onTouchEnd={() => setIsCorrect(null)}
      />
    );
  }

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{data.question}</Text>
      </View>
      <View style={styles.answersContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.answerButton, styles.red]}
            onPress={() => handleAnswer(data.r_1)}
          >
            <Text style={styles.answerText}>{data.r_1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.answerButton, styles.blue]}
            onPress={() => handleAnswer(data.r_2)}
          >
            <Text style={styles.answerText}>{data.r_2}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.answerButton, styles.yellow]}
            onPress={() => handleAnswer(data.r_3)}
          >
            <Text style={styles.answerText}>{data.r_3}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.answerButton, styles.green]}
            onPress={() => handleAnswer(data.r_4)}
          >
            <Text style={styles.answerText}>{data.r_4}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  correctScreen: {
    backgroundColor: "green",
  },
  incorrectScreen: {
    backgroundColor: "red",
  },
  questionContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  questionText: {
    fontSize: 24,
    textAlign: "center",
  },
  answersContainer: {
    flex: 3,
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  answerButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  answerText: {
    fontSize: 20,
    color: "white",
  },
  red: {
    backgroundColor: "#E21B3C",
  },
  blue: {
    backgroundColor: "#1368CE",
  },
  yellow: {
    backgroundColor: "#D89E00",
  },
  green: {
    backgroundColor: "#26890C",
  },
});

export default ActivityScreen;
