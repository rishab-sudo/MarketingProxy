import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAIdAou8UeGo6ZMnd-MckJEBq56fnisN2A",
  authDomain: "proxycontact-c69d0.firebaseapp.com",
  databaseURL: "https://proxycontact-c69d0-default-rtdb.firebaseio.com",
  projectId: "proxycontact-c69d0",
  storageBucket: "proxycontact-c69d0.appspot.com",
  messagingSenderId: "695343825712",
  appId: "1:695343825712:web:6f13095fdcbcb4d6343ef5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);