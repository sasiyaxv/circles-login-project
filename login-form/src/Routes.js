import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Login } from "./components/page-components/Login";
import { Dashboard } from "./components/page-components/Dashboard";
import { ConstClass } from "./ConstClass";

export const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={ConstClass.routeToLogin} component={Login} />

          <Route exact path="/dashboard" component={Dashboard} />

          <Redirect exact from="/" to="login" />
        </Switch>
      </Router>
    </div>
  );
};
