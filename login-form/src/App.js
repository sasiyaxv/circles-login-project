import "./App.css";
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

      {/* separation of concerns
      
      separate file for routes.
      create a const file and put paths there.
      Put base url also in the const file
      Single responsibility 
      Create different file for fetch. 
      Wrapper components.
      Create different component for headings
      Different component for headings
      containers inside containers use reusable components
      


      
      */}



      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/login" component={Login} />

          <Route exact path="/dashboard" component={Dashboard} />

          <Redirect exact from="/" to="login" />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
