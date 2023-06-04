import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listParentWrapper: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
  },
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
  listName: {
    fontSize: 18,
  },
  actionBtnWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  listSpinner: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    marginTop: 20,
  },
});
