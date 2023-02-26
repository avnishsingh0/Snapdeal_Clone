// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLr0ag245DOixWU7LkHGCq2uXA2VpRP8U",
  authDomain: "masai-school-project-auth.firebaseapp.com",
  projectId: "masai-school-project-auth",
  storageBucket: "masai-school-project-auth.appspot.com",
  messagingSenderId: "851746420796",
  appId: "1:851746420796:web:5889c8b13950dcee4aab39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);