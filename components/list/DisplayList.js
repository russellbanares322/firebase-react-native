import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/colors";

const DisplayList = ({ name }) => {
  return (
    <View style={styles.listCardContainer}>
      <View style={styles.listContent}>
        <Text style={styles.listName}>{name}</Text>
        <View style={styles.actionBtnWrapper}>
          <Icon name="edit" size={25} color={colors.blue} />
          <Icon name="trash-o" size={25} color={colors.red} />
        </View>
      </View>
    </View>
  );
};

export default DisplayList;
