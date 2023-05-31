import React, { useState } from "react";
import { View, Button } from "react-native";
import { colors } from "../../constants/colors";
import { styles } from "./styles";
import Form from "../form/Form";

const Home = () => {
  const [openFormModal, setOpenFormModal] = useState(false);

  const handleOpenFormModal = () => {
    setOpenFormModal(true);
  };
  const handleCloseFormModal = () => {
    setOpenFormModal(false);
  };
  return (
    <View>
      <Form
        handleCloseFormModal={handleCloseFormModal}
        openFormModal={openFormModal}
      />
      <View style={styles.homeWrapper}>
        <Button
          onPress={handleOpenFormModal}
          color={colors.blue}
          title="Add new data"
        />
      </View>
    </View>
  );
};

export default Home;
