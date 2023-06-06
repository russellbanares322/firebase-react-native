import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Modal,
  Button,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import { styles } from "./styles";
import { globalStyles } from "../../global/globalStyles";
import { colors } from "../../constants/colors";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const EditForm = ({ openEditModal, dataToEdit, handleCloseEditModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    contact: "",
    details: "",
  });

  const isFormDirty =
    !formData.name ||
    !formData.location ||
    !formData.contact ||
    !formData.details;

  useEffect(() => {
    if (openEditModal) {
      setFormData({
        name: dataToEdit.name,
        location: dataToEdit.location,
        contact: dataToEdit.contact,
        details: dataToEdit.details,
      });
    }
  }, [dataToEdit]);
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleAddData = async () => {
    setIsLoading(true);
    const dataRef = collection(db, "users");
    try {
      await addDoc(dataRef, {
        ...formData,
        timestamp: serverTimestamp(),
      });
      handleCloseEditModal();
      ToastAndroid.show(
        `Successfully added ${formData.name}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      setIsLoading(false);
      setFormData({
        name: "",
        location: "",
        contact: "",
        details: "",
      });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  return (
    <Modal
      style={styles.formModalWrapper}
      animationType="slide"
      visible={openEditModal}
    >
      <ActivityIndicator
        color={colors.blue}
        animating={isLoading}
        size={50}
        style={globalStyles.spinner}
      />
      <View
        style={[globalStyles.centeredView, isLoading && globalStyles.opacity]}
      >
        <Text style={styles.formTitle}>Add something</Text>
        <SafeAreaView style={styles.formWrapper}>
          <Text style={styles.formLabel}>
            Full name <Text style={globalStyles.required}>*</Text>
          </Text>
          <TextInput
            value={formData.name}
            onChangeText={(text) => handleChange("name", text)}
            placeholder="Please enter your name..."
            style={styles.formInput}
          />
          <Text style={styles.formLabel}>
            Location <Text style={globalStyles.required}>*</Text>
          </Text>
          <TextInput
            value={formData.location}
            onChangeText={(text) => handleChange("location", text)}
            placeholder="Please enter your location..."
            style={styles.formInput}
          />
          <Text style={styles.formLabel}>
            Contact <Text style={globalStyles.required}>*</Text>
          </Text>
          <TextInput
            value={formData.contact}
            onChangeText={(text) => handleChange("contact", text)}
            placeholder="Please enter your contact number..."
            keyboardType="numeric"
            style={styles.formInput}
          />
          <Text style={styles.formLabel}>
            Details <Text style={globalStyles.required}>*</Text>
          </Text>
          <TextInput
            value={formData.details}
            onChangeText={(text) => handleChange("details", text)}
            placeholder="Please enter the details..."
            style={styles.formInput}
          />
        </SafeAreaView>
        <View style={styles.buttonWrapper}>
          <View style={styles.submitBtn}>
            <Button
              onPress={handleAddData}
              disabled={isFormDirty || isLoading}
              color={colors.blue}
              title="Submit"
            />
          </View>
          <Button
            disabled={isLoading}
            onPress={handleCloseEditModal}
            color={colors.black}
            title="Cancel"
          />
        </View>
      </View>
    </Modal>
  );
};

export default EditForm;
