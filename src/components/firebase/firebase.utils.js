import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDE2Ogg7TBOhkDJwzGfSS3BCMRmSHpG4g8",

  authDomain: "to-do-list-cd39b.firebaseapp.com",

  projectId: "to-do-list-cd39b",

  storageBucket: "to-do-list-cd39b.appspot.com",

  messagingSenderId: "888361471607",

  appId: "1:888361471607:web:8a1d1b12d7405424474072",

  measurementId: "G-3ZJH28TPG9",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
