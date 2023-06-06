import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  homeWrapper: {
    position: "absolute",
    top: 670,
    backgroundColor: colors.blue,
    height: "40%",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
  },
  iconWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
