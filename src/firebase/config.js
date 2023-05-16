import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDpRgzgOSnoY5UOd6WPP8aobCKXe0y1Q8",
  authDomain: "miniblog-8adb0.firebaseapp.com",
  projectId: "miniblog-8adb0",
  storageBucket: "miniblog-8adb0.appspot.com",
  messagingSenderId: "975293477081",
  appId: "1:975293477081:web:9a29fec59ac4c0c7cfcec8"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };