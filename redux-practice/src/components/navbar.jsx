import {Link} from "react-router-dom";


export const Navbar=()=>{
  
   const logOut=()=>{
       localStorage.removeItem("user");
   }

    return <div>
       <Link to="/">Home</Link>
       <Link to="/login">Log In</Link>
       <Link onClick={()=>logOut()} to="/login">Log Out</Link>
        </div>
    
}