import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth";


const Navbar = () => {

    const [user]=useAuthState(auth)

const signUserOut = async()=>{
    await signOut(auth)
}

    return (
                 <nav className='navbar'>
                <Link to="/"><h1>SiANime XPO</h1></Link>
                <div className="links">
                    <Link to="/">Home </Link>
                    {!user?(
                        <Link to="/login">Login</Link> 
                    ):(
                    <Link to="/watchlist">Review</Link>
                    )}
                 <div className="user"> 
                    {user&&(
                    <>
                    <p>{user?.displayName}</p>
                    <button onClick={signUserOut}>Log Out</button>
                    </>
                    )}
                 </div>

                </div>
            </nav>
    );
}
 
export default Navbar;