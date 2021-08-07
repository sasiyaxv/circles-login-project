import React, { useState, useEffect } from "react";
import { Box, Button, Link } from "rebass";
import { Input } from "@rebass/forms";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { RebassHeading } from "../ui-components/RebassHeading";
import { RebassLabel } from "../ui-components/RebassLabel";
import { constClass } from "../../ConstClass";
import { incrementBy, login, sagaLogin } from "../../redux/actions";

const Login = (props) => {
  console.log("Props", props);
  const { loginResponse, loginSaga } = props;

  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (loginResponse === undefined) return;
    if (loginResponse === "success") {
      history.push("/dashboard");
    } else {
      setResponseMessage(constClass.errorMessage);
    }
  }, [loginResponse]);

  // To update path in url
  const history = useHistory();

  async function loginClicked(e) {
    // props.incrementBy10();

    e.preventDefault();

    const user = loginSaga(userName, passWord);

    console.log("USER", user);
    console.log("Login Clicked");
    console.log("Email : " + userName);
    console.log("Password : " + passWord);
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
        <form>
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
              type="submit"
              component={Link}
              to="/dashboard"
              bg="#495464"
              onClick={(e) => loginClicked(e)}
            >
              Login
            </Button>

            <br />
            <Box color="red">
              {/* In case of wrong credentials */}
              {responseMessage}
            </Box>
          </Box>
          {/* <div>
            {props.grandTotal}
          </div> */}
        </form>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    grandTotal: state.example.total,
    userName: state.login.userName,
    passWord: state.login.passWord,
    loginResponse: state.sagaExample?.loginResponse?.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementBy10: () => {
      dispatch(incrementBy(10));
      console.log("Test");
    },

    loginNow: (userName, passWord) => {
      dispatch(login(userName, passWord));
    },
    loginSaga: (userName, passWord) => {
      dispatch(sagaLogin(userName, passWord));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
