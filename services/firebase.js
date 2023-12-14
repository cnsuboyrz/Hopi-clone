// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  initializeAuth,
  // @ts-ignore
  getReactNativePersistence,
} from "firebase/auth";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9YkZlIeEPA81CVtASPn_kadqx3NKrkYs",
  authDomain: "hopi-5ac6a.firebaseapp.com",
  projectId: "hopi-5ac6a",
  storageBucket: "hopi-5ac6a.appspot.com",
  messagingSenderId: "518898700967",
  appId: "1:518898700967:web:4caabec2126187086f8182",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
