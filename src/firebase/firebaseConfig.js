import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlPm7-xURI2O8-s2Qye_XIoZMEARC70mA",
  authDomain: "marzo-c5f30.firebaseapp.com",
  projectId: "marzo-c5f30",
  storageBucket: "marzo-c5f30.appspot.com",
  messagingSenderId: "372826630926",
  appId: "1:372826630926:web:3ff60e219afd3bde60455f"
};

const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    db
}