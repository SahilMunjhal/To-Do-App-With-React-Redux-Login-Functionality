import { useEffect, useState } from "react";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import { add_to_do } from "../reducer/todoreducer/action";
import {Link} from "react-router-dom";
import { LogIn } from "./login";
import { Navigate } from "react-router-dom";

export const To_Do=()=>{
    const [data,setData]=useState([]);
    const dispatch=useDispatch();
    const user=JSON.parse(localStorage.getItem("user"));

    const {todos}=useSelector((store)=>store.todos)

    useEffect(()=>{
       datafn();
    },[]);

    const datafn=()=>{
        axios.get("http://localhost:8080/todos").then(({data})=>{
            dispatch(add_to_do(data));
        });
    }

    const handle=(e)=>{
       const{value}=e.target;
       setData(value);
    }

    const submit=()=>{
        axios.post("http://localhost:8080/todos",{
            title:data,
            status:false
        }).then(datafn);
    }

    const toggle=({id,status})=>{
        axios.patch(`http://localhost:8080/todos/${id}`,{
             status:status?false:true
        }).then(datafn);
    };

    const remove=({id})=>{
        axios.delete(`http://localhost:8080/todos/${id}`).then(datafn);
    }


    return(
        <div>
            {user?"":<Navigate to="/login"></Navigate>}
            <input type="text" onChange={handle} />
            <button onClick={()=>submit()}>Add To_Do</button>

            {todos.map((e)=><Link to={`todo/${e.id}`}> <div>
                  {e.title}
                  <button onClick={()=>toggle(e)}>{e.status?"Done":"Not Done"}</button>
                  <button onClick={()=>remove(e)}>Delete</button>
               </div></Link>
            )}
        </div>

    )
}