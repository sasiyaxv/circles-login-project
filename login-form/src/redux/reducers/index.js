import { combineReducers } from "redux";
import exampleReducer, { loginReducer, sagaLoginReducer } from "./loginReducer";

const rootReducer = combineReducers({
  example: exampleReducer,
  login: loginReducer,
  sagaExample: sagaLoginReducer,
});

export default rootReducer;
