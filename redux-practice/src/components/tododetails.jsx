import { useEffect, useState } from "react"
import {useParams} from "react-router-dom";
import axios from "axios";
 

export const To_Do_Details=()=>{
    const {id}=useParams();

    const [data,settData]=useState({});

    useEffect(()=>{
        datafn();
    },[]);

    const datafn=()=>{
        axios.get(`http://localhost:8080/todos/${id}`).then(({data})=>{
            settData(data);
        });
    }

    return <div>
       <h1>ID:{data.id}</h1>
       <h1>Title:{data.title}</h1>
       <h1>Status:{data.status?"Done":"Not Done"}</h1>
    </div>
}