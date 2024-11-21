// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "photogram-ef8c6.firebaseapp.com",
  projectId: "photogram-ef8c6",
  storageBucket: "photogram-ef8c6.firebasestorage.app",
  messagingSenderId: "712516580503",
  appId: "1:712516580503:web:f2bfb957d5bc2b953f65d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const imageStorage = getStorage(app);
const imageFirestore = getFirestore(app);

// Export services and utility functions
export { imageStorage, imageFirestore, serverTimestamp };
  