import React from "react";
import { Login } from "./login";
import Store from "../../app/store";
import { Provider } from "react-redux";

export const LoginWrapper = () => {
  return (
    <Provider store={Store}>
      <Login />
    </Provider>
  );
};
