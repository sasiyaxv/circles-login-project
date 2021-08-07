import React from "react";
import { Field, reduxForm } from "redux-form";

let LoginReduxForm = ({ handleSubmit }) => {
  const validations = (values) => {
    const errors = {};
    if (!values.userName) {
      errors.userName = "Required";
    } else if (values.userName.length > 15) {
      errors.userName = "Must be 15 characters or less";
    }
    console.log("ERR", errors);
    return errors;
  };

  function handleSubmit(values) {
    values.preventDefault();
    console.log(values);
    validations(values);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">UserName</label>
        <br />
        <Field type="text" name="userName" component="input" />
      </div>
      <div>
        <label htmlFor="passWord">PassWord</label> <br />
        <Field type="password" name="passWord" component="input" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const LoginReduxFormTest = reduxForm({
  form: "loginForm",
})(LoginReduxForm);

export default LoginReduxFormTest;
