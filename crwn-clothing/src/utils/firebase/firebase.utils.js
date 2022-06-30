// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPDXYZcBhCn4LFFzi3Zh8M_CmlGdIPi_U",
  authDomain: "crwn-clothing-db-9d348.firebaseapp.com",
  projectId: "crwn-clothing-db-9d348",
  storageBucket: "crwn-clothing-db-9d348.appspot.com",
  messagingSenderId: "749511831893",
  appId: "1:749511831893:web:e790b8a2a2aaa4ca0d3fdc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);