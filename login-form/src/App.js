// import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "@rebass/preset";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Login } from "./components/page-components/Login";
import { Dashboard } from "./components/page-components/Dashboard";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Route name="login">
          <Login></Login>
        </Route>

        <Redirect exact from="/" to="login" />
        {/* <Route name="dashboard">
          <Dashboard></Dashboard>
        </Route> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
