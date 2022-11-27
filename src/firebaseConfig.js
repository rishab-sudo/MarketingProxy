import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyA0WCKjODncdJdrVDFZl4xD-_WqlEu5118",
  authDomain: "proxyycontact-db-f4803.firebaseapp.com",
  databaseURL: "https://proxyycontact-db-f4803-default-rtdb.firebaseio.com",
  projectId: "proxyycontact-db-f4803",
  storageBucket: "proxyycontact-db-f4803.appspot.com",
  messagingSenderId: "562166611144",
  appId: "1:562166611144:web:750bb9ca1f5ae7a82cb9fd",
  measurementId: "G-PB9YQP77WG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);