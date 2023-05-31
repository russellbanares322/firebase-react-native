import { StyleSheet, View } from "react-native";
import { colors } from "./constants/colors";
import Home from "./components/home/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 40,
    paddingBottom: 16,
    paddingLeft: 12,
    paddingRight: 12,
  },
});
