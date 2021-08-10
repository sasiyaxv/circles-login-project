import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useHistory,
} from "react-router-dom";
import Login from "./components/page-components/Login";
import Dashboard from "./components/page-components/Dashboard";
import { constClass } from "./ConstClass";
// import { login } from "./redux/actions";
import LoginReduxFormTest from "./redux/redux-form/LoginReduxForm";

export const Routes = () => {
  const history = useHistory();
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route
            exact
            path={constClass.routeToLogin}
            component={LoginReduxFormTest}
          />

          <Route exact path="/dashboard" component={Dashboard} />

          <Redirect exact from="/" to="login" />
        </Switch>
      </Router>
    </div>
  );
};
