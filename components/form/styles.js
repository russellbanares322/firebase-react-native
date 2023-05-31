import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  formModalWrapper: {
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  formTitle: {
    fontSize: 20,
    textAlign: "center",
  },
  formInput: {
    height: 40,
    margin: 7,
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 3,
    paddingVertical: 8,
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
