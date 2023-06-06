import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors";
import { styles } from "./styles";
import Form from "../form/Form";
import List from "../list/List";
import Icon from "react-native-vector-icons/FontAwesome";

const Home = () => {
  const [openFormModal, setOpenFormModal] = useState(false);

  const handleOpenFormModal = () => {
    setOpenFormModal(true);
  };
  const handleCloseFormModal = () => {
    setOpenFormModal(false);
  };
  return (
    <View style={styles.container}>
      <Form
        handleCloseFormModal={handleCloseFormModal}
        openFormModal={openFormModal}
      />
      <View style={styles.homeWrapper}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Icon name="home" size={30} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleOpenFormModal}
          style={styles.iconWrapper}
        >
          <Icon name="plus" size={30} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Icon name="bell" size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <List />
      </View>
    </View>
  );
};

export default Home;
