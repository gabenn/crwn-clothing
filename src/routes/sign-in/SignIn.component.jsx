import './SignIn.styles.scss'
import {signInWithGooglePopup} from '../../utils/firebase/firebase.util.js';

const SignIn = () => {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
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