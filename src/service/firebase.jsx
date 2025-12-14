// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATl3Q24FmzBaebSAC8NBGiQt20VnAYQyM",
  authDomain: "carreras-eskbio.firebaseapp.com",
  projectId: "carreras-eskbio",
  storageBucket: "carreras-eskbio.firebasestorage.app",
  messagingSenderId: "553134244",
  appId: "1:553134244:web:3247ec318e58dec8c29e31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
