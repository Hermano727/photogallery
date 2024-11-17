// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app"; 
import 'firebase/storage';
import 'firebase/serverstore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2pjRJejdYTxrueu5tUYlQ891nhHjU4NM",
  authDomain: "photogram-ef8c6.firebaseapp.com",
  projectId: "photogram-ef8c6",
  storageBucket: "photogram-ef8c6.firebasestorage.app",
  messagingSenderId: "712516580503",
  appId: "1:712516580503:web:f2bfb957d5bc2b953f65d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const imageStorage = firebase.storage();

const imageFirestore = firebase.firestore();

export {imageStorage, imageFirestore};