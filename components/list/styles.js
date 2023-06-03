import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContainer: {
    height: "100%",
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  listCardContainer: {
    flex: 1,
    marginTop: 20,
    borderBottomWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  listContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  actionBtnWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
});
