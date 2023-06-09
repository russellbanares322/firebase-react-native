import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  formModalWrapper: {
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  formTitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  formInput: {
    height: 45,
    margin: 7,
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 3,
    paddingVertical: 8,
  },
  formInputFocused: {
    borderColor: colors.blue,
  },
  buttonWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  submitBtn: {
    marginBottom: 6,
  },
  formLabel: {
    paddingLeft: 10,
    fontWeight: "bold",
  },
});
