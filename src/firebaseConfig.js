// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrZKfqBazyYpNYt5OeaR_VBKTREbyuyCk",
  authDomain: "tathyasutra-7b1b6.firebaseapp.com",
  projectId: "tathyasutra-7b1b6",
  storageBucket: "tathyasutra-7b1b6.appspot.com",  // Corrected storage bucket format
  messagingSenderId: "807458111251",
  appId: "1:807458111251:web:7fc7d7ff806d57adb7a4e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
