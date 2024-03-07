import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Logo } from "../Components";
import { globalStyles } from "../shared/GlobalStyles";

export default function Record() {
  return (
    <Container>
      <Logo />
      <View style={styles.container}>
        <Text style={styles.title}>Record Screen</Text>
        <Text style={styles.text}>This is the record screen content.</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
});