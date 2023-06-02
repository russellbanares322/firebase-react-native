import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const DisplayList = ({ name }) => {
  return (
    <View style={styles.listCard}>
      <Text>{name}</Text>
    </View>
  );
};

export default DisplayList;
