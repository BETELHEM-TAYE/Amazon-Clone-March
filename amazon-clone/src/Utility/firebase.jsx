import firebase from "firebase/compat/app"

import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRt22-WXJSUlD93fRCC89WuIRil5v8JXg",
  authDomain: "clone-70822.firebaseapp.com",
  projectId: "clone-70822",
  storageBucket: "clone-70822.firebasestorage.app",
  messagingSenderId: "453536884629",
  appId: "1:453536884629:web:b4a862fe07faaa4a70389c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db =app.firestore(app)