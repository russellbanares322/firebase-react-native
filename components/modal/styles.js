import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  deleteModalWrapper: {
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  deleteModalContent: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
    padding: 10,
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 18,
  },
  buttonWrapper: {
    marginTop: 20,
  },
  confirmBtn: {
    marginBottom: 6,
  },
  selectedNameText: {
    fontWeight: "bold",
  },
});
