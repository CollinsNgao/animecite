import { auth,provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
 const navigate=useNavigate()


   const signInwithGoogle = async () =>{
     const result= await signInWithPopup(auth,provider)
     console.log(result)
     navigate("/")
   }

    return (
        
        <div id="popup">
        <img src="https://aniwatchtv.to/images/discussion.png"></img>
     <div class="container">
            <h1>SiANime XPO</h1>
            <p>You Must be Signed in With Google to Continue</p>
          <button onClick={signInwithGoogle}>Sign In With Google</button>
        </div>
    </div>

    );
}
 
export default Login;
