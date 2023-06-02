import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { db } from "../../firebase/firebaseConfig";
import DisplayList from "./DisplayList";
import { styles } from "./styles";

const List = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchData = () => {
    setIsLoading(true);

    const dataRef = collection(db, "users");
    onSnapshot(dataRef, (snapshot) => {
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
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DisplayList {...item} />}
      />
    </>
  );
};

export default List;
