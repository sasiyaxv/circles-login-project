// import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "@rebass/preset";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Login } from "./components/page-components/Login";
import { Dashboard } from "./components/page-components/Dashboard";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/login" component={Login} />

          <Route exact path="/dashboard" component={Dashboard} />

          <Redirect exact from="/" to="login" />
          {/* <Route name="dashboard">
          <Dashboard></Dashboard>
        </Route> */}
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
