// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-1b5cc.firebaseapp.com",
  projectId: "realestate-1b5cc",
  storageBucket: "realestate-1b5cc.firebasestorage.app",
  messagingSenderId: "886351389850",
  appId: "1:886351389850:web:2a198b7a025267b36beb23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
