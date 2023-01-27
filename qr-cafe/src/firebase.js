import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATJtWThVf3JPQoZp-8aYlQjSmDSLBN25g",
  authDomain: "qr-cafe-bd9d0.firebaseapp.com",
  projectId: "qr-cafe-bd9d0",
  storageBucket: "qr-cafe-bd9d0.appspot.com",
  messagingSenderId: "76089455298",
  appId: "1:76089455298:web:3a4e5ee5b0482c3969815b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
