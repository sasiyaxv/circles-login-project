import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import exampleReducer, {
  loginReducer,
  sagaLoginReducer,
  getDashboard,
  setValuesReducer,
} from "./loginReducer";

const rootReducer = combineReducers({
  example: exampleReducer,
  login: loginReducer,
  sagaExample: sagaLoginReducer,
  getDashboard: getDashboard,
  setValues: setValuesReducer,
  form: formReducer,
});

export default rootReducer;
