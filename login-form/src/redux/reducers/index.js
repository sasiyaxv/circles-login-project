import { combineReducers } from "redux";
import  exampleReducer,{ loginReducer }  from "./loginReducer"; 

 const rootReducer= combineReducers({
    example: exampleReducer,
    login: loginReducer
})

export default rootReducer