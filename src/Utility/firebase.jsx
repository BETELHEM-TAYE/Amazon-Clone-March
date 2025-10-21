import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyBlgyngvCU8nAbBJ-rZcEo3cDjlk6ovZns",
  authDomain: "clone-cba83.firebaseapp.com",
  projectId: "clone-cba83",
  storageBucket: "clone-cba83.firebasestorage.app",
  messagingSenderId: "412854513363",
  appId: "1:412854513363:web:e8f30ab1f6f5e5bc852e26",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore(app);
