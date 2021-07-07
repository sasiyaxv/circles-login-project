import React, { useState } from "react";
import { Box, Heading, Button } from "rebass";
import { Label, Input } from "@rebass/forms";

export const Dashboard = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [origin, setOrigin] = useState();

  const BASE_URL = "http://localhost:5000";

  fetch(BASE_URL + "/user-service/user-details")
    .then((response) => response.json())
    .then(function setValues(response) {
      console.log(response);
      setEmail(response.email);
      setName(response.name);
      setOrigin(response.origin);
    });

  return (
    <div>
      <Heading fontSize={[6]} color="primary">
        Hello! I see you got through the login
      </Heading>

      <Box>
        <Heading fontSize={[3]} color="primary">
          Information
        </Heading>
        <p>
          Email address : {email} <br />
          Name : {name}
          <br />
          Origin Port : {origin}
        </p>
      </Box>
    </div>
  );
};
