import { useState } from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const LogIn=()=>{
    const [text,setText]=useState();
    const Navigate=useNavigate();
    const [data,setdata]=useState({
        email:"",
        password:"",
    });

    const handle=(e)=>{
          const{className,value}=e.target;
          setdata({...data,[className]:value})
    }

    const submit=()=>{
        axios.post("https://reqres.in/api/login",data).then((res)=>{
            console.log(res.data.token);
            if(res.data.token){
                localStorage.setItem("user",JSON.stringify(res.data.token));
                alert("User Login Successfully");
                Navigate("/");
            }
        }).catch((e)=>{
            alert("Please Enter valid Email or Password");
            console.log(e.message);
        });
    }

   return <div>
       <input type="text" className="email" onChange={handle}/><br></br>
       <input type="text" className="password" onChange={handle}/><br></br>
       <button onClick={()=>submit()}>Submit</button>
   </div>
}