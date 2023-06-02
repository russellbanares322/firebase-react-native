import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Modal,
  Button,
} from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants/colors";

const Form = ({ openFormModal, handleCloseFormModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    contact: "",
    details: "",
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  return (
    <Modal
      style={styles.formModalWrapper}
      animationType="slide"
      visible={openFormModal}
    >
      <Text>{JSON.stringify(formData)}</Text>
      <View style={styles.centeredView}>
        <Text style={styles.formTitle}>Add something</Text>
        <SafeAreaView style={styles.formWrapper}>
          <Text style={styles.formLabel}>Full name</Text>
          <TextInput
            onChangeText={(text) => handleChange("name", text)}
            placeholder="Please enter your name..."
            style={styles.formInput}
          />
          <Text style={styles.formLabel}>Location</Text>
          <TextInput
            onChangeText={(text) => handleChange("location", text)}
            placeholder="Please enter your location..."
            style={styles.formInput}
          />
          <Text style={styles.formLabel}>Contact</Text>
          <TextInput
            onChangeText={(text) => handleChange("contact", text)}
            placeholder="Please enter your contact..."
            style={styles.formInput}
          />
          <Text style={styles.formLabel}>Details</Text>
          <TextInput
            onChangeText={(text) => handleChange("details", text)}
            placeholder="Please enter the details..."
            style={styles.formInput}
          />
        </SafeAreaView>
        <View style={styles.buttonWrapper}>
          <View style={styles.submitBtn}>
            <Button color={colors.blue} title="Submit" />
          </View>
          <Button
            onPress={handleCloseFormModal}
            color={colors.black}
            title="Cancel"
          />
        </View>
      </View>
    </Modal>
  );
};

export default Form;
