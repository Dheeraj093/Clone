
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaKS0nVxHWEcXk4NDqp00TRAo7Z_0ZJbA",
  authDomain: "react-netflix-clone-ea2b5.firebaseapp.com",
  projectId: "react-netflix-clone-ea2b5",
  storageBucket: "react-netflix-clone-ea2b5.appspot.com",
  messagingSenderId: "19114275717",
  appId: "1:19114275717:web:132da1a5b1f7f9e9a20aec",
  measurementId: "G-37WZXPKN2S"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);