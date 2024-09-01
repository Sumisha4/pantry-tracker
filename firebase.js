// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  authDomain: "inventory-management-b96ea.firebaseapp.com",
  projectId: "inventory-management-b96ea",
  storageBucket: "inventory-management-b96ea.appspot.com",
  messagingSenderId: "368118194050",
  appId: "1:368118194050:web:9876b915157a39bc9fb99b",
  measurementId: "G-F630DJQ23F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore};
