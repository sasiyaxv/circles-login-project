import React, { useState } from "react";
import { Box, Heading, Button } from "rebass";
import { Label, Input } from "@rebass/forms";

export const Login = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  // Function to execute when login button is clicked
  function loginClicked() {
    console.log("Login Clicked");
    console.log("Email : " + emailAddress);
    console.log("Password : " + password);
  }

  return (
    <div>
      <Heading fontSize={[6]} color="primary">
        Ready to take a challenge?
      </Heading>
      <Box>
        <Heading fontSize={[3]} color="primary">
          Login to pick a challenge
        </Heading>
        <Label htmlFor="email">Email</Label>
        <Input
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
        />
        <Box>
          <Label htmlFor="password">Password</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </Box>
        <Box>
          <Button bg="blue" onClick={loginClicked}>
            Login
          </Button>
        </Box>
      </Box>
    </div>
  );
};
