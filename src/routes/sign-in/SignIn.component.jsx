import './SignIn.styles.scss'
import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.util.js';

const SignIn = () => {

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
    </div>
   );
}
 
export default SignIn;