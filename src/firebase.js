import { initializeApp } from "firebase/app";
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink,signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTHgLiBJQiCaJ8GNU7cyHg2Mn39owtsP4",
  authDomain: "startup-b9e9e.firebaseapp.com",
  projectId: "startup-b9e9e",
  storageBucket: "startup-b9e9e.appspot.com",
  messagingSenderId: "248214940997",
  appId: "1:248214940997:web:8fddc6397451a3b0d3e22c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink,signOut };
