import {Routes,Route} from "react-router-dom";
import { To_Do } from "./todo";
import { To_Do_Details } from "./tododetails";
import { LogIn } from "./login";

export const AllRoutes=()=>{
    return(
    <Routes>
        <Route exact path="/" element={<To_Do/>}></Route>
        <Route exact path="/todo/:id" element={<To_Do_Details/>}></Route>
        <Route exact path="/login" element={<LogIn/>}></Route>
    </Routes>
    )
}