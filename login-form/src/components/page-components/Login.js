import React, { useState } from "react";
import { Box, Heading, Button, Link } from "rebass";
import { Label as Text, Input } from "@rebass/forms";
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

  const [responseMessage, setResponseMessage] = useState("");

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
          setResponseMessage("Please recheck your login credentials.");
        }
      });
  }

  return (
    <Router>
      <Box m={[2, 3, 4]}>
        <Heading fontSize={[5, 6, 7]} color="primary" textAlign="center">
          Ready to take a challenge?
        </Heading>

        <Box
          bg="#E8E8E8"
          mt={[2, 3, 4]}
          p={[2, 3, 4]}
          sx={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "black",
          }}
        >
          <Heading fontSize={[3, 4, 5]} mb={[2, 3, 4]}>
            Login to pick a challenge
          </Heading>
          <Box>
            <Text mb={[2, 3, 4]} fontSize={[2, 3, 4]} htmlFor="email">
              Email
            </Text>
            <Input
              sx={{
                fontFamily: "monospace",
                border: "none",
                borderWidth: "1px",
                borderBottom: "solid",
                borderColor: "black",
                ":focus": {
                  outline: "none",
                },
              }}
              fontSize={[2, 3, 4]}
              mb={[2, 3, 4]}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
            />
          </Box>
          <Box>
            <Text mb={[2, 3, 4]} fontSize={[2, 3, 4]} htmlFor="password">
              Password
            </Text>
            <Input
              sx={{
                fontFamily: "monospace",
                border: "none",
                borderWidth: "1px",
                borderBottom: "solid",
                borderColor: "black",
                ":focus": {
                  outline: "none",
                },
              }}
              mb={[2, 3, 4]}
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
              mb={[2, 3, 4]}
              pt={[3]}
              pr={[3, 4, 5]}
              pl={[3, 4, 5]}
              pb={[3]}
              component={Link}
              to="/dashboard"
              bg="#495464"
              onClick={loginClicked}
            >
              Login
            </Button>
            <br />

            <Box color="red">
              {/* In case of wrong credentials */}
              {responseMessage}
            </Box>
          </Box>
        </Box>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Box>
    </Router>
  );
};
