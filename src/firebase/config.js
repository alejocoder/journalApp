// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDELjWRoK1hCa9UDy8IHG78QP7baM1oYgo",
  authDomain: "journal-app-7de60.firebaseapp.com",
  projectId: "journal-app-7de60",
  storageBucket: "journal-app-7de60.appspot.com",
  messagingSenderId: "168706760564",
  appId: "1:168706760564:web:f92235888ba519beab9621"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);