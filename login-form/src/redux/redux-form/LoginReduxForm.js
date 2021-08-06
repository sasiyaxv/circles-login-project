import React from "react";
import { Field, reduxForm } from "redux-form";

let LoginReduxForm = ({ handleSubmit }) => {
  //   return <div>HELLO</div>;
  //   function handleSubmit(values) {
  //     console.log(values);
  //   }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">UserName</label>
        <Field type="text" name="userName" component="input" />
      </div>
      <div>
        <label htmlFor="passWord">PassWord</label>
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
