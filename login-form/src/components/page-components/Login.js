import React, { useState } from "react";
import { Box, Button, Link } from "rebass";
import { Input } from "@rebass/forms";
import { useHistory } from "react-router-dom";

import { RebassHeading } from "../ui-components/RebassHeading";
import { RebassLabel } from "../ui-components/RebassLabel";
import { ConstClass } from "../../ConstClass";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const [responseMessage, setResponseMessage] = useState("");

  const history = useHistory();

  // Function to execute when login button is clicked
  function loginClicked() {
    console.log("Login Clicked");
    console.log("Email : " + userName);
    console.log("Password : " + passWord);

    fetch(ConstClass.BASE_URL + `/user-service/login/${userName}/${passWord}`)
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
    <Box m={[2, 3, 4]}>
      <RebassHeading
        name={"Ready to take a challenge?"}
        fontSize={[5, 6, 7]}
        textAlign="center"
      />

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
        <RebassHeading
          fontSize={[3, 4, 5]}
          marginBottom={[2, 3, 4]}
          name={"Login to pick a challenge"}
        />
        <Box>
          <RebassLabel
            fontSize={[2, 3, 4]}
            marginBottom={[2, 3, 4]}
            name={"Email"}
            htmlFor="email"
          />
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
          <RebassLabel
            fontSize={[2, 3, 4]}
            marginBottom={[2, 3, 4]}
            name={"Password"}
            htmlFor="password"
          />
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
    </Box>
  );
};
