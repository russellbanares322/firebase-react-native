import React from "react";
import { View, Text, SafeAreaView, TextInput, Modal } from "react-native";
import { styles } from "./styles";

const Form = ({ openFormModal, handleCloseFormModal }) => {
  return (
    <View>
      <Modal animationType="slide" visible={openFormModal}>
        <Text style={styles.formTitle}>Add something</Text>
        <SafeAreaView style={styles.formWrapper}>
          <TextInput style={styles.formInput} />
          <TextInput style={styles.formInput} />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default Form;
