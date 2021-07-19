import React from "react";
import { Login } from "./Login";
import Store from "../../store/storeConfiguration/Store";
import { Provider } from "react-redux";

export const LoginWrapper = () => {
  return (
    <Provider store={Store}>
      <Login />
    </Provider>
  );
};
