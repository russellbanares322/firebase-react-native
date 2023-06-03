import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const globalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  opacity: {
    opacity: 0.1,
  },
  spinner: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
  },
  required: {
    color: colors.red,
  },
});
