import React, { useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { sagaLogin, getDataConfigAction } from "../../redux/actions";
import { RebassHeading } from "../../components/ui-components/RebassHeading";
import { RebassLabel } from "../../components/ui-components/RebassLabel";
import { fetchSettingsData } from "../../FetchApi";
import "./formCss.css";
import { getSettingsSaga } from "../sagas";

let LoginReduxForm = (props) => {
  console.log("PROPS", props);
  const {
    handleSubmit,
    reset,
    userName,
    passWord,
    loginSaga,
    getLoginDataConfig,
  } = props;

  useEffect(() => {
    getLoginDataConfig();
  }, []);

  // To reset the form
  const resetClicked = () => {
    reset();
  };

  const wrappedLoginSaga = () => {
    loginSaga(userName, passWord);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(wrappedLoginSaga)}>
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
          name={"Username"}
          htmlFor="userName"
        />
        <br />
        <Field
          className="form-field"
          type="text"
          name="userName"
          component="input"
        />
      </div>
      <div>
        <RebassLabel
          fontSize={[2, 3, 4]}
          marginBottom={[1, 2, 3]}
          name={"Password"}
          htmlFor="passWord"
        />
        <br />

        <Field
          className="form-field"
          type="password"
          name="passWord"
          component="input"
        />
      </div>
      <br />
      <button className="form-submit-btn" type="submit">
        Submit
      </button>
      <button className="form-reset-btn" type="reset" onClick={resetClicked}>
        Reset
      </button>
    </form>
  );
};

// Validations for the login form
const validations = (values) => {
  const errors = {};
  if (!values.userName && !values.passWord) {
    errors.userName = "Required";
    errors.passWord = "Required";
  } else if (values.passWord?.length <= 8) {
    errors.passWord = "Must be at least 8 characters.";
  }
  console.log("Error Occurred", errors);
  return errors;
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    userName: state.form?.loginForm?.values?.userName,
    passWord: state.form?.loginForm?.values?.passWord,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginSaga: (userName, passWord) => {
      dispatch(
        sagaLogin(userName, passWord, () => {
          ownProps.history.push("/dashboard");
        })
      );
    },
    getLoginDataConfig: () => {
      dispatch(getDataConfigAction(() => {}));
    },
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  reduxForm({
    validate: validations,
    form: "loginForm", // a unique identifier for this form | function declaration would be invalid, if we didn’t specify any name:
  })
)(LoginReduxForm);

// const mergeProps = (stateProps, dispatchProps, ownProps) => ({
//   ...stateProps,
//   ...dispatchProps,
//   ...ownProps,
//   loginSaga: {
//     // you can access the state and call dispatch here
//   }
//   })
// const withConnect = connect(mapStateToProps, mapDispatchToProps, mergeProps);
