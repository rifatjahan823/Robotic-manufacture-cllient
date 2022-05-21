// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFXvz-Y00evoSUHI5iD6694TUbPuB4CbA",
  authDomain: "robotic-manufacturer.firebaseapp.com",
  projectId: "robotic-manufacturer",
  storageBucket: "robotic-manufacturer.appspot.com",
  messagingSenderId: "692022331242",
  appId: "1:692022331242:web:f9aa03ab188b7a8e708713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
