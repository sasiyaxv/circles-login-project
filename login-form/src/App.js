// import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "@rebass/preset";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Login } from "./components/page-components/Login";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Route name="login">
          <Login></Login>
        </Route>
        {/* To redirect to /login route */}
        <Redirect exact from="/" to="login" />
      </ThemeProvider>
    </Router>
  );
}

export default App;
