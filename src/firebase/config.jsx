// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDU5NGruPgE-Rt2x14YyaDAXKz7UzmJqTE",
  authDomain: "ecommerce-auth-62fb1.firebaseapp.com",
  projectId: "ecommerce-auth-62fb1",
  storageBucket: "ecommerce-auth-62fb1.appspot.com",
  messagingSenderId: "1070337951200",
  appId: "1:1070337951200:web:f9a37b507dbfaa47081785"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;