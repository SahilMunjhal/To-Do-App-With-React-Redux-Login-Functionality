import {createStore} from "redux";
import {combineReducers} from "redux";
import { TODOreducer } from "./reducer/todoreducer/reducer";

const rootReducer=combineReducers({
    todos:TODOreducer,
});

export const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
