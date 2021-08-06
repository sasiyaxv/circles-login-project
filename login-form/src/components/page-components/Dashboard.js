import React, { useState, useEffect } from "react";
import { Box } from "rebass";

import { RebassHeading } from "../ui-components/RebassHeading";
import { RebassLabel } from "../ui-components/RebassLabel";
// import { getDashboardData } from "../../redux/actions";
// import { constClass } from "../../ConstClass";
// import { doFetchUserData } from "../../FetchApi";

export const Dashboard = (props) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [origin, setOrigin] = useState();

  useEffect(() => {
    // fetch(constClass.BASE_URL + "/user-service/user-details")
    //   .then((response) => response.json())
    //   .then(function setValues(response) {
    //     setEmail(response.email);
    //     setName(response.name);
    //     setOrigin(response.origin);
    //   });
  }, []);

  // async const newUser =await doFetchUserData();
  // console.log("AFTER", newUser);

  return (
    <Box m={[2, 3, 4]}>
      <RebassHeading
        name={" Hello! I see you got through the login"}
        fontSize={[5, 6, 7]}
        textAlign={"center"}
      />

      <Box
        bg="#E8E8E8"
        mt={[2, 3, 4]}
        mb={[2, 3, 4]}
        p={[2, 3, 4]}
        sx={{ borderWidth: "1px", borderStyle: "solid", borderColor: "black" }}
      >
        <RebassHeading
          name={"Information"}
          fontSize={[3, 4, 5]}
          marginBottom={[2, 3, 4]}
          marginTop={[2, 3, 4]}
        />

        <RebassLabel
          fontSize={[2, 3, 4]}
          fontWeight="bold"
          fontFamily="serif"
          name={`
          Email address : ${email} 
          Name : ${name}
         Origin Port : ${origin}`}
        />
      </Box>
    </Box>
  );
};

// const mapStateToProps = (state) => {
//   console.log("state", state);
//   return {};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };
