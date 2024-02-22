// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjgyrMLBYkZmIm3jLzoubY2fC2MhCOPDI",
  authDomain: "react-shop-7b040.firebaseapp.com",
  projectId: "react-shop-7b040",
  storageBucket: "react-shop-7b040.appspot.com",
  messagingSenderId: "703933787344",
  appId: "1:703933787344:web:563119ae0e8b5e64a6c2d5",
  measurementId: "G-4Q42X8VW7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;