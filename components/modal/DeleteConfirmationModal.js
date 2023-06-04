import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { Button, Modal, Text, ToastAndroid, View } from "react-native";
import { colors } from "../../constants/colors";
import { db } from "../../firebase/firebaseConfig";
import { styles } from "./styles";

const DeleteConfirmationModal = ({
  selectedName,
  setSelectedName,
  setSelectedId,
  selectedId,
  showDeleteModal,
  setShowDeleteModal,
  data,
  setData,
}) => {
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedName(null);
    setSelectedId(null);
  };

  const handleDeleteData = async () => {
    try {
      await deleteDoc(doc(db, "users", selectedId));
      const filteredData = data.filter((item) => item.id !== selectedId);
      setData(filteredData);
      ToastAndroid.show(
        `Successfully deleted ${selectedName}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      setShowDeleteModal(false);
      setSelectedId(null);
    } catch (err) {
      ToastAndroid.show(
        `${err.message}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  };
  return (
    <Modal
      visible={showDeleteModal}
      style={styles.deleteModalWrapper}
      animationType="fade"
    >
      <View style={styles.deleteModalContent}>
        <Text style={styles.modalTitle}>
          Are you sure do you want to remove{" "}
          <Text style={styles.selectedNameText}>{selectedName}</Text> from the
          list?
        </Text>
        <View style={styles.buttonWrapper}>
          <View style={styles.confirmBtn}>
            <Button
              onPress={handleDeleteData}
              color={colors.red}
              title="Confirm"
            />
          </View>
          <Button
            onPress={handleCloseDeleteModal}
            color={colors.black}
            title="Cancel"
          />
        </View>
      </View>
    </Modal>
  );
};

export default DeleteConfirmationModal;
