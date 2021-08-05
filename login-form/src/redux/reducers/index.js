import { combineReducers } from "redux";
import exampleReducer, {
  loginReducer,
  sagaLoginReducer,
  getDashboard,
} from "./loginReducer";

const rootReducer = combineReducers({
  example: exampleReducer,
  login: loginReducer,
  sagaExample: sagaLoginReducer,
  getDashboard: getDashboard,
});

export default rootReducer;
