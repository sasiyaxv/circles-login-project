import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
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
  form: formReducer,
});

export default rootReducer;
