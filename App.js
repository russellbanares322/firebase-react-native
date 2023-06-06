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
    backgroundColor: colors.white,
    paddingTop: 40,
  },
});
