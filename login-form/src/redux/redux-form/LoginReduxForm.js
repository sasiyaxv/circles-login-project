import React, { useEffect } from "react";
import { Field, reduxForm, submit } from "redux-form";
import { RebassHeading } from "../../components/ui-components/RebassHeading";
import { RebassLabel } from "../../components/ui-components/RebassLabel";
import "./formCss.css";

let LoginReduxForm = (props) => {
  const { handleSubmit, reset } = props;

  useEffect(() => {
    console.log("RESPONSE");
  }, []);

  // Validations for the login form
  const validations = (values) => {
    const errors = {};
    if (!values.userName && !values.passWord) {
      errors.userName = "Required";
      errors.passWord = "Required";
    } else if (values.passWord.length <= 8) {
      errors.passWord = "Must be at least 8 characters.";
    }
    console.log("Error Occurred", errors);
    return errors;
  };

  // To reset the form
  const resetClicked = () => {
    reset();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(validations)}>
      <RebassHeading
        name={"Ready to take a challenge?"}
        fontSize={[5, 6, 7]}
        textAlign="center"
      />
      <RebassHeading
        fontSize={[3, 4, 5]}
        marginBottom={[2, 3, 4]}
        name={"Login to pick a challenge"}
      />
      <div>
        <RebassLabel
          fontSize={[2, 3, 4]}
          marginBottom={[1, 2, 3]}
          name={"userName"}
          htmlFor="userName"
        />
        <br />
        <Field type="text" name="userName" component="input" />
      </div>
      <div>
        <RebassLabel
          fontSize={[2, 3, 4]}
          marginBottom={[1, 2, 3]}
          name={"Password"}
          htmlFor="passWord"
        />
        <br />
        <Field type="password" name="passWord" component="input" />
      </div>
      <br />
      <button type="submit">Submit</button>
      <button type="reset" onClick={resetClicked}>
        Reset
      </button>
    </form>
  );
};

const LoginReduxFormTest = reduxForm({
  form: "loginForm",
})(LoginReduxForm);

export default LoginReduxFormTest;
