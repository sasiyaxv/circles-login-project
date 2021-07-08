import React, { useState } from "react";
import { Box, Heading, Button, Link } from "rebass";

import { Label, Input } from "@rebass/forms";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useHistory,
} from "react-router-dom";
import { Dashboard } from "./Dashboard";

// import { ThemeProvider } from "@emotion/react";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const [apiCallOk, setApiCallOk] = useState(false);
  const history = useHistory();

  const BASE_URL = "http://localhost:5000";

  // Function to execute when login button is clicked
  function loginClicked() {
    console.log("Login Clicked");
    console.log("Email : " + userName);
    console.log("Password : " + passWord);

    fetch(BASE_URL + `/user-service/login/${userName}/${passWord}`)
      .then((response) => response.json())
      .then(function setValues(response) {
        if (response.status === "success") {
          console.log(response);
          history.push("/dashboard");
          // <Router>
          //   <Switch>
          //     <Route exact path="/dashboard" component={Dashboard}></Route>
          //   </Switch>
          // </Router>;
        } else {
          console.log(response);
        }
      });
  }

  return (
    <Router>
      <div>
        <Heading fontSize={[6]} color="primary">
          Ready to take a challenge?
        </Heading>

        <Box>
          <Heading fontSize={[3]} color="primary">
            Login to pick a challenge
          </Heading>
          <Box width={[1, 1, 1 / 2]}>
            <Label htmlFor="email">Email</Label>
            <Input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
            />
          </Box>
          <Box width={[1, 1, 1 / 2]}>
            <Label htmlFor="password">Password</Label>
            <Input
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
          </Box>
          <Box>
            <Button
              component={Link}
              to="/dashboard"
              bg="blue"
              onClick={loginClicked}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
};
