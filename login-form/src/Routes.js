import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Login } from "./components/page-components/login";
import { Dashboard } from "./components/page-components/dashboard";
import { constClass } from "./ConstClass";

export const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={constClass.routeToLogin} component={Login} />

          <Route exact path="/dashboard" component={Dashboard} />

          <Redirect exact from="/" to="login" />
        </Switch>
      </Router>
    </div>
  );
};
