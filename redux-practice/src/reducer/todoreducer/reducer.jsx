import { ADD_TODO } from "./action";

const initvalue={
    todos:[],
}
export const TODOreducer=(store=initvalue,{type,payload})=>{
    switch(type){
        case ADD_TODO:
        return {...store,todos:payload}
        default :
        return store
    }
}