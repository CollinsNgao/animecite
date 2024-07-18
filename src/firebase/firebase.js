// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuKeadgMDaogO0vPQU-tmGZZUCH1tCBqA",
  authDomain: "sianime-1d9cb.firebaseapp.com",
  projectId: "sianime-1d9cb",
  storageBucket: "sianime-1d9cb.appspot.com",
  messagingSenderId: "370348194488",
  appId: "1:370348194488:web:d8006a7d47a7c9c713d24d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const provider = new GoogleAuthProvider()
export const db=getFirestore(app)