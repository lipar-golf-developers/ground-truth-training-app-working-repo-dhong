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
import { globalStyles, colors, sizes } from "../shared/GlobalStyles";
import RNPickerSelect from "react-native-picker-select";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//TODO: Add Global State

const clubOptions = [
  { label: "Driver", value: "driver" },
  { label: "3 Wood", value: "3_wood" },
  { label: "5 Hybrid", value: "5_hybrid" },
  { label: "3 Iron", value: "3_iron" },
  { label: "4 Iron", value: "4_iron" },
  { label: "5 Iron", value: "5_iron" },
  { label: "6 Iron", value: "6_iron" },
  { label: "7 Iron", value: "7_iron" },
  { label: "8 Iron", value: "8_iron" },
  { label: "9 Iron", value: "9_iron" },
  { label: "Pitching Wedge", value: "pitching_wedge" },
  { label: "Gap Wedge", value: "gap_wedge" },
  { label: "Sand Wedge", value: "sand_wedge" },
  { label: "Lob Wedge", value: "lob_wedge" },
  { label: "Other", value: "other" },
];

export default function SessionStart({ navigation }) {
  const [club, setClub] = useState("driver");

  const startSessionHandler = () => {};
  return (
    <Container>
      <Logo />
      <View>
        <Text style={globalStyles.inputLabel}>Select Club</Text>
        <RNPickerSelect
          onValueChange={(val) => setClub(val)}
          items={clubOptions}
          placeholder={{}}
          style={{ ...pickerSelectStyles }}
        />
      </View>
      <Pressable onPress={startSessionHandler} style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Start</Text>
      </Pressable>
    </Container>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: sizes.med,
    borderWidth: 1,
    borderRadius: 5,
    color: "black",
    backgroundColor: colors.white,
    height: hp("8%"),
    width: wp("80%"),
    textAlign: "center",
  },
});
