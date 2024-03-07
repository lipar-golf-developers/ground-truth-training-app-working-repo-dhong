import { Image, StyleSheet } from "react-native";
import LiPARLogo from "../assets/images/logo.png";

export default function Logo() {
  return <Image style={styles.logo} source={LiPARLogo} />;
}

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
  },
});
