// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCo8j2K71JFHCxdqcJQZPYkqwobDAdbO0Y",
  authDomain: "myapp-f87e6.firebaseapp.com",
  projectId: "myapp-f87e6",
  storageBucket: "myapp-f87e6.appspot.com",
  messagingSenderId: "47082256763",
  appId: "1:47082256763:web:5e1f77fb8805cf0c02a5de",
  measurementId: "G-TGRB4ZSKSH"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};