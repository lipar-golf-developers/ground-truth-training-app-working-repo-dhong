import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { Container, Logo } from "../Components";
import { colors, globalStyles } from "../shared/GlobalStyles";

//TODO: Store User Session

export default function Auth({ navigation }) {
  const [screenMode, setScreenMode] = useState("login"); //Enum: "login" or "createAccount"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const loginOnSubmit = async () => {
    //TODO: login functionality
    navigation.navigate("SessionStart");
  };

  const createAccountOnSubmit = async () => {
    //TODO: create account functionality
  };

  const toggleScreenMode = () => {
    setScreenMode(screenMode === "login" ? "createAccount" : "login");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Container>
      <View style={authStyles.authContainer}>
        <View>
          <Logo />
          {screenMode === "login" && (
            <>
              <Text style={globalStyles.inputLabel}>Email</Text>
              <TextInput
                style={globalStyles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <Text style={globalStyles.inputLabel}>Password</Text>
              <TextInput
                secureTextEntry
                style={globalStyles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <Pressable onPress={loginOnSubmit} style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>Log In</Text>
              </Pressable>
              <Text style={globalStyles.secondaryText}>Forgot Password?</Text>
            </>
          )}
          {screenMode === "createAccount" && (
            <>
              <Text style={globalStyles.inputLabel}>Email</Text>
              <TextInput
                style={globalStyles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <Text style={globalStyles.inputLabel}>Password</Text>
              <TextInput
                secureTextEntry
                style={globalStyles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <Text style={globalStyles.inputLabel}>Confirm Password</Text>
              <TextInput
                secureTextEntry
                style={globalStyles.input}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
              <Pressable
                onPress={createAccountOnSubmit}
                style={globalStyles.button}
              >
                <Text style={globalStyles.buttonText}>Create Account</Text>
              </Pressable>
            </>
          )}
        </View>
        <Pressable onPress={toggleScreenMode}>
          <Text style={globalStyles.secondaryText}>
            {screenMode === "login"
              ? "Create an Account"
              : "Already have an Account? Log In"}
          </Text>
        </Pressable>
      </View>
      {/* {screenMode === "login" && (
        <View style={authStyles.authContainer}>
          <View>
            <Logo />
            <Text style={globalStyles.inputLabel}>Email</Text>
            <TextInput
              style={globalStyles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Text style={globalStyles.inputLabel}>Password</Text>
            <TextInput
              secureTextEntry
              style={globalStyles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Pressable onPress={loginOnSubmit} style={globalStyles.button}>
              <Text style={globalStyles.buttonText}>Log In</Text>
            </Pressable>
            <Text style={globalStyles.secondaryText}>Forgot Password?</Text>
          </View>
          <View>
            <Text style={globalStyles.secondaryText}>Create an Account</Text>
          </View>
        </View>
      )} */}
      {/* <Pressable onPress={} title="" style={globalStyles.button}/> */}
      {/* <View>
        <Text style={globalStyles.secondaryText}>Create an Account</Text>
      </View> */}
    </Container>
  );
}

const authStyles = StyleSheet.create({
  authContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
