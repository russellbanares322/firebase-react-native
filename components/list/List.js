import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { colors } from "../../constants/colors";
import { db } from "../../firebase/firebaseConfig";
import { styles } from "../form/styles";
import DisplayList from "./DisplayList";

const List = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchData = () => {
    setIsLoading(true);
    const dataRef = collection(db, "users");
    const q = query(dataRef, orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      const fetchedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(fetchedData);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <View style={styles.listParentWrapper}>
      {isLoading ? (
        <ActivityIndicator
          color={colors.blue}
          animating={isLoading}
          size={50}
          style={styles.listSpinner}
        />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DisplayList data={data} setData={setData} {...item} />
          )}
        />
      )}
    </View>
  );
};

export default List;
