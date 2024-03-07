import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const colors = {
  liparGrey: "#151720",
  liparBlue: "#236DFD",
  white: "#fff",
  black: "#000",
};

// export const fonts = {
//     arial: "",

// }
export const sizes = {
  xs: 10,
  sm: 14,
  med: 18,
  lg: 22,
  xl: 26,
  subHeader: 36,
  header: 72,
};

export const globalStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    width: wp("80%"),
    height: hp("6%"),
    padding: 10,
    fontFamily: "Arial",
    fontSize: sizes.sm,
  },
  inputLabel: {
    marginVertical: sizes.xs,
    color: colors.white,
    fontSize: sizes.sm,
    fontFamily: "Arial",
  },
  button: {
    marginTop: sizes.med,
    marginBottom: sizes.xs,
    backgroundColor: colors.liparBlue,
    width: wp("80%"),
    maxHeight: hp("6%"),
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: sizes.sm,
    fontFamily: "Arial",
  },
  secondaryText: {
    color: colors.white,
    fontSize: sizes.sm,
    fontFamily: "OpenSans",
    
  },
});
