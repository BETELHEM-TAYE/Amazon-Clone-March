import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAFRvYofYOqNP6CosHa2QfOBEgbhsfpRM",
  authDomain: "clone-fe562.firebaseapp.com",
  projectId: "clone-fe562",
  storageBucket: "clone-fe562.firebasestorage.app",
  messagingSenderId: "82572825068",
  appId: "1:82572825068:web:b92be9fdb2600426eff0c9",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore(app);
