import React, { useState, useEffect } from "react";
import { Box, Heading, Button, Text } from "rebass";
import { Label, Input } from "@rebass/forms";

export const Dashboard = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [origin, setOrigin] = useState();

  const BASE_URL = "http://localhost:5000";

  useEffect(() => {
    fetch(BASE_URL + "/user-service/user-details")
      .then((response) => response.json())
      .then(function setValues(response) {
        console.log(response);
        setEmail(response.email);
        setName(response.name);
        setOrigin(response.origin);
      });
  }, []);

  return (
    <Box m={[2, 3, 4]} textAlign="center">
      <Heading fontSize={[5, 6, 7]} color="primary">
        Hello! I see you got through the login
      </Heading>

      <Box>
        <Heading
          mt={[2, 3, 4]}
          mb={[2, 3, 4]}
          fontSize={[3, 4, 5]}
          color="primary"
        >
          Information
        </Heading>
        <Text fontSize={[2, 3, 4]} fontWeight="bold" fontFamily="serif">
          Email address : {email} <br />
          Name : {name}
          <br />
          Origin Port : {origin}
        </Text>
      </Box>
    </Box>
  );
};
