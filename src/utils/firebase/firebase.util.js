import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider  } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSqpQwl93kt_jEaWwmzkMwF-0DkiWyJXs",
  authDomain: "crwn-clothing-db-20432.firebaseapp.com",
  projectId: "crwn-clothing-db-20432",
  storageBucket: "crwn-clothing-db-20432.appspot.com",
  messagingSenderId: "235056809874",
  appId: "1:235056809874:web:627c19552f20296cb1234b"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth)=>{
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch(error){
      console.log('error creating the user: ',error.message);
    }
  }
  return userDocRef;
}