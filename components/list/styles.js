import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContainer: {
    height: "100%",
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  listCard: {
    flex: 1,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    paddingVertical: 8,
    paddingHorizontal: 5,
    elevation: 1,
  },
});
