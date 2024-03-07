import { StyleSheet, View } from "react-native";
import { colors } from "../shared/GlobalStyles";
export default function Container({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.liparGrey,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
