import { combineReducers } from "redux";
import  exampleReducer,{ loginReducer }  from "./exampleReducer"; 

 const rootReducer= combineReducers({
    example: exampleReducer,
    login: loginReducer
})

export default rootReducer