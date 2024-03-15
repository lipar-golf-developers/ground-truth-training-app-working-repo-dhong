import { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { Container, Logo } from "../Components";
import { globalStyles } from "../shared/GlobalStyles";
import { Camera } from "expo-camera";
import { Video } from "expo-av";
import { safeAreaView } from "react-native-safe-area-context";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

export default function Record({ navigation }) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMicrophonePermission(microphonePermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (
    hasCameraPermission === undefined ||
    hasMicrophonePermission === undefined
  ) {
    return <Text>Requesting Permissions...</Text>;
  } else if (!hasCameraPermission) {
    return <Text>Camera permissions not granted!</Text>;
  }

  let recordVideo = () => {
    setIsRecording(true);
    let options = {
      quality: "1080p",
      mute: false,
    };
    cameraRef.current.recordAsync(options).then((recordedVideo) => {
      setVideo(recordedVideo);
      setIsRecording(false);
    });
  };

  let stopRecording = () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();
  };

  if (video) {
    let shareVideo = () => {
      shareAsync(video.uri).then(() => {
        setVideo(undifined);
      });
    };

    let saveVideo = () => {
      MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
        setVideo;
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Video
          style={styles.video}
          source={{ uri: video.uri }}
          useNativeControls
          resizeMode="contain"
          isLooping
        />
        <Button title="Share" onPress={shareVideo} />
        {hasMediaLibraryPermission ? (
          <Button title="Save" onPress={saveVideo} />
        ) : undefined}
        <Button title="Delete" onPress={() => setVideo(undefined)} />
      </SafeAreaView>
    );
  }
  const returnButtonHandler = () => {
    navigation.navigate("SessionStart");
  };
  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button
          title={isRecording ? "Stop Recording" : "Record Video"}
          onPress={isRecording ? stopRecording : recordVideo}
        />
      </View>
      <View style={styles.returnButtonContainer}>
        <Button title="return" onPress={returnButtonHandler} />
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#151720",
    position: "absolute",
    alignSelf: "center",
    bottom: 50,
    borderRadius: 10,
  },
  returnButtonContainer: {
    backgroundColor: "#151720",
    position: "absolute",
    alignSelf: "center",
    top: 50,
    left: 20,
    borderRadius: 10,
  },
  video: {
    flex: 1,
    alignSelf: "stretch",
  },
});
