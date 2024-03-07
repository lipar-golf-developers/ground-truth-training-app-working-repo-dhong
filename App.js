import { useCallback } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
import Navigation from "./Navigation";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
  });
  if (fontsLoaded) {
    return <Navigation />;
  }
}
