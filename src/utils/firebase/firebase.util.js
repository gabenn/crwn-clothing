import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDSqpQwl93kt_jEaWwmzkMwF-0DkiWyJXs",
  authDomain: "crwn-clothing-db-20432.firebaseapp.com",
  projectId: "crwn-clothing-db-20432",
  storageBucket: "crwn-clothing-db-20432.appspot.com",
  messagingSenderId: "235056809874",
  appId: "1:235056809874:web:627c19552f20296cb1234b"
};

const firebasApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);