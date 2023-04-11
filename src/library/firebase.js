import { getSelectionRange } from "@testing-library/user-event/dist/utils";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need


const firebaseConfig = {
  apiKey: "AIzaSyCVLAkuj0k_Wbki5viYI3cb52nIoZGZBXM",
  authDomain: "illustrious-health.firebaseapp.com",
  projectId: "illustrious-health",
  storageBucket: "illustrious-health.appspot.com",
  messagingSenderId: "237784644747",
  appId: "1:237784644747:web:d0f67d417e2a33fe74e88e",
  measurementId: "G-4SGFCQNVHQ",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);
export const storage = getStorage(app);

