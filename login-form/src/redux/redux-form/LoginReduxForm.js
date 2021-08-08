import React from "react";
import { Field, reduxForm, submit } from "redux-form";

let LoginReduxForm = (props) => {
  const { handleSubmit, reset } = props;

  // Validations for the login form
  const validations = (values) => {
    const errors = {};
    if (!values.userName && !values.passWord) {
      errors.userName = "Required";
      errors.passWord = "Required";
    } else if (values.passWord.length <= 8) {
      errors.passWord = "Must be at least 8 characters.";
    }
    console.log("ERR", errors);
    return errors;
  };

  // To reset the form
  const resetClicked = () => {
    reset();
  };

  // function handleSubmit(values) {
  //   values.preventDefault();
  //   console.log(values);
  //   validations(values);
  // }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="userName">UserName</label>
        <br />
        <Field type="text" name="userName" component="input" />
      </div>
      <div>
        <label htmlFor="passWord">PassWord</label> <br />
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
