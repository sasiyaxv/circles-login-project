// import "./App.css";
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";
import theme from "@rebass/preset";
import { Box, Heading, Button } from "rebass";
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
