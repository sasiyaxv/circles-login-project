import React from "react";
import LoginReduxForm from "./LoginReduxForm";
import { connect } from "react-redux";
import { ErrorPage } from "../../components/page-components/ErrorPage";

const ReduxFormWrapper = (props) => {
  const { isError } = props;
  return <div>{!isError ? <LoginReduxForm /> : <ErrorPage />}</div>;
};

const mapStateToProps = (state) => {
  return {
    isError: state.setValues?.isError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFormWrapper);
