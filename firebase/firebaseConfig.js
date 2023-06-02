import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDRKnl5E4M0zlBAQv54EGDCLm2dPnGpM6E",
  databaseURL: "https://fir-crud-e0fd8-default-rtdb.firebaseio.com",
  projectId: "fir-crud-e0fd8",
  storageBucket: "fir-crud-e0fd8.appspot.com",
  messagingSenderId: "628807091480",
  appId: "1:628807091480:web:38b8aebbb8f8ffd890ca6d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
