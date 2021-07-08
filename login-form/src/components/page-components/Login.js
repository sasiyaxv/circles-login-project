import React, { useState } from "react";
import { Box, Heading, Button, Link } from "rebass";
import { Label, Input } from "@rebass/forms";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { Dashboard } from "./Dashboard";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

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
        } else {
          console.log(response);
        }
      });
  }

  return (
    <Router>
      <Box m={[2, 3, 4]} textAlign="center">
        <Heading fontSize={[5, 6, 7]} color="primary">
          Ready to take a challenge?
        </Heading>

        <Box>
          <Heading fontSize={[3, 4, 5]} color="primary">
            Login to pick a challenge
          </Heading>
          <Box>
            <Label fontSize={[2, 3, 4]} htmlFor="email">
              Email
            </Label>
            <Input
              fontSize={[2, 3, 4]}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
            />
          </Box>
          <Box>
            <Label fontSize={[2, 3, 4]} htmlFor="password">
              Password
            </Label>
            <Input
              fontSize={[2, 3, 4]}
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
              mt={[2, 3, 4]}
              pt={[3]}
              pr={[3, 4, 5]}
              pl={[3, 4, 5]}
              pb={[3]}
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
      </Box>
    </Router>
  );
};
