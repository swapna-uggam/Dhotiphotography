import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD-OFu4Auc76mHTIFAoxtOSqVDlkMkygBM",
  authDomain: "snapu-dhoti.firebaseapp.com",
  projectId: "snapu-dhoti",
  storageBucket: "snapu-dhoti.firebasestorage.app",
  messagingSenderId: "236324759880",
  appId: "1:236324759880:web:efd49b634f21e0c6622b7d",
  measurementId: "G-6CRCQ7NW53"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


