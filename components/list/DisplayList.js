import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/colors";
import DeleteConfirmationModal from "../modal/DeleteConfirmationModal";

const DisplayList = ({ name, id, data, setData }) => {
  const [selectedName, setSelectedName] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
    setSelectedId(id);
    setSelectedName(name);
  };

  return (
    <View style={styles.listCardContainer}>
      <View style={styles.listContent}>
        <Text style={styles.listName}>{name}</Text>
        <View style={styles.actionBtnWrapper}>
          <Icon name="edit" size={25} color={colors.blue} />
          <Icon
            onPress={handleShowDeleteModal}
            name="trash-o"
            size={25}
            color={colors.red}
          />
        </View>
      </View>
      <DeleteConfirmationModal
        selectedName={selectedName}
        setSelectedName={setSelectedName}
        selectedId={selectedId}
        setSelectedId={setSelectedName}
        setShowDeleteModal={setShowDeleteModal}
        showDeleteModal={showDeleteModal}
        setData={setData}
        data={data}
      />
    </View>
  );
};

export default DisplayList;
