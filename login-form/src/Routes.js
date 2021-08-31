import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useHistory,
} from "react-router-dom";

import { ROUTES } from "./constants";

import Dashboard from "./components/page-components/Dashboard";
import LoginReduxFormTest from "./redux/redux-form/LoginReduxForm";

export const Routes = () => {
  const history = useHistory();
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route
            exact
            path={ROUTES.ROUTE_TO_LOGIN}
            component={LoginReduxFormTest}
          />
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect exact from="/" to="login" />
        </Switch>
      </Router>
    </div>
  );
};
