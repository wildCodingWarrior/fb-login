import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQcr6itBhs_yN1TXPyDPdE_d6MdZyHg00",
  authDomain: "facebook-login-test-6d27e.firebaseapp.com",
  projectId: "facebook-login-test-6d27e",
  storageBucket: "facebook-login-test-6d27e.appspot.com",
  messagingSenderId: "1038657141997",
  appId: "1:1038657141997:web:739ab9a826ed455d6260e4",
  measurementId: "G-7PKT9MC1S0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
