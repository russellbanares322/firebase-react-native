import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const DisplayList = ({ name }) => {
  return (
    <View style={styles.listCardContainer}>
      <View style={styles.listContent}>
        <Text>{name}</Text>
        <View style={styles.actionBtnWrapper}>
          <Text>Up</Text>
          <Text>Del</Text>
        </View>
      </View>
    </View>
  );
};

export default DisplayList;
