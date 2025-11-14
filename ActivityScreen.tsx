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
import { questions } from "./questions";

type Question = {
  question: string;
  r_1: string;
  r_2: string;
  r_3: string;
  r_4: string;
  c_r: string;
};

type ScreenState = "home" | "question" | "correct" | "wrong" | "gameOver";

const ActivityScreen: React.FC = () => {
  const [screenState, setScreenState] = useState<ScreenState>("home");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hearts, setHearts] = useState(3);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Refs to hold loaded Audio.Sound instances
  const correctSoundRef = useRef<Audio.Sound | null>(null);
  const wrongSoundRef = useRef<Audio.Sound | null>(null);

  // Load sounds once on mount
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
  }, []); // Load once on mount

  // Handle fade animation when question screen appears
  useEffect(() => {
    if (screenState === "question") {
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [screenState, fadeAnim]);

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

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setHearts(3);
    setScreenState("question");
  };

  const loseHeart = () => {
    const newHearts = hearts - 1;
    setHearts(newHearts);
    return newHearts;
  };

  const handleAnswer = async (answer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const correct = answer === currentQuestion.c_r;

    // Play sound
    await playSound(correct);

    if (correct) {
      // Correct answer
      Vibration.vibrate(400);
      setScreenState("correct");

      // Check if it's the last question
      if (currentQuestionIndex === questions.length - 1) {
        // Last question - return to home after green screen
        setTimeout(() => {
          setScreenState("home");
          setCurrentQuestionIndex(0);
          setHearts(3);
        }, 1500);
      } else {
        // Move to next question
        setTimeout(() => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setScreenState("question");
          fadeAnim.setValue(0);
        }, 1500);
      }
    } else {
      // Wrong answer
      Vibration.vibrate([0, 200, 100, 200]);
      setScreenState("wrong");
      const newHearts = loseHeart();

      // Return to same question after brief red screen (if still have hearts)
      setTimeout(() => {
        if (newHearts > 0) {
          setScreenState("question");
        } else {
          // Game over - show red screen, then automatically return to home
          setScreenState("gameOver");
          setTimeout(() => {
            handleGameOverScreen();
          }, 500);
        }
      }, 1500);
    }
  };

  const handleGameOverScreen = () => {
    setScreenState("home");
    setCurrentQuestionIndex(0);
    setHearts(3);
  };

  // Home screen
  if (screenState === "home") {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={startQuiz}
        >
          <Text style={styles.startButtonText}>Iniciar Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Game over screen
  if (screenState === "gameOver") {
    return (
      <View style={[styles.container, styles.gameOverScreen]} />
    );
  }

  // Correct answer screen
  if (screenState === "correct") {
    return (
      <View style={[styles.container, styles.correctScreen]}>
        <Text style={styles.checkIcon}>✓</Text>
      </View>
    );
  }

  // Wrong answer screen
  if (screenState === "wrong") {
    return (
      <View style={[styles.container, styles.incorrectScreen]}>
        <Text style={styles.brokenHeart}>💔</Text>
      </View>
    );
  }

  // Question screen
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {/* Hearts indicator */}
      <View style={styles.heartsContainer}>
        {[0, 1, 2].map((index) => (
          index < hearts ? (
            <Text key={index} style={styles.heart}>
              ❤️
            </Text>
          ) : null
        ))}
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </View>
      <View style={styles.answersContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.answerButton, styles.red]}
            onPress={() => handleAnswer(currentQuestion.r_1)}
          >
            <Text style={styles.answerText}>{currentQuestion.r_1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.answerButton, styles.blue]}
            onPress={() => handleAnswer(currentQuestion.r_2)}
          >
            <Text style={styles.answerText}>{currentQuestion.r_2}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.answerButton, styles.yellow]}
            onPress={() => handleAnswer(currentQuestion.r_3)}
          >
            <Text style={styles.answerText}>{currentQuestion.r_3}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.answerButton, styles.green]}
            onPress={() => handleAnswer(currentQuestion.r_4)}
          >
            <Text style={styles.answerText}>{currentQuestion.r_4}</Text>
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
  startButton: {
    backgroundColor: "#1368CE",
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: "50%",
  },
  startButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  heartsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 20,
    paddingTop: 40,
  },
  heart: {
    fontSize: 30,
    marginLeft: 5,
  },
  correctScreen: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  incorrectScreen: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverScreen: {
    backgroundColor: "red",
  },
  checkIcon: {
    fontSize: 150,
    color: "white",
    fontWeight: "bold",
  },
  brokenHeart: {
    fontSize: 150,
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
