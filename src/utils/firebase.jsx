// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1A6llWvhwVHqgnMag78ddWmIv8D9YMPw",
  authDomain: "netflixgpt-d46be.firebaseapp.com",
  projectId: "netflixgpt-d46be",                                                  
  storageBucket: "netflixgpt-d46be.firebasestorage.app",
  messagingSenderId: "1026750360876",
  appId: "1:1026750360876:web:5f1bf9a4ef0c3a315cd089",
  measurementId: "G-GRQ4KD3XSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()