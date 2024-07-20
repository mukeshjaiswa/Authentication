
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJP72HtnfSPXi0gFN-j2CwxrRS2s4llJs",
  authDomain: "authentication-ebad9.firebaseapp.com",
  projectId: "authentication-ebad9",
  storageBucket: "authentication-ebad9.appspot.com",
  messagingSenderId: "9307901576",
  appId: "1:9307901576:web:8dd0a831cba01a1faf593d",
  measurementId: "G-5WYBGFXEVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app);
const storage = getStorage(app);
export { db,storage }; 