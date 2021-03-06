import './SignIn.styles.scss'
import {
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  signInWithGoogleRedirect, 
  auth
} from '../../utils/firebase/firebase.util.js';
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

const SignIn = () => {

  // useEffect(async () => {
  //   const response = await getRedirectResult(auth)
  //   if(response){
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // },[])

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  

  return ( 
    <div>
      <h1>signIn</h1>
      <button onClick={logGoogleUser}>
        Sign In With Google Popup
      </button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button> */}
    </div>
   );
}
 
export default SignIn;