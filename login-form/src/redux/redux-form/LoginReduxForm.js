import React from "react";
import { Field, reduxForm } from "redux-form";

let LoginReduxForm = ({ handleSubmit }) => {
  function handleSubmit(values) {
    values.preventDefault();
    console.log(values);
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
