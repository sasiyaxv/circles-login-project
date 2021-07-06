import React from "react";
import { Box, Heading, Button } from "rebass";
import { Label, Input } from "@rebass/forms";

export const Login = () => {
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
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
        />
        <Box>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </Box>
        <Box>
          <Button bg="blue">Login</Button>
        </Box>
      </Box>
    </div>
  );
};
