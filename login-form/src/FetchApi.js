import { API_PATHS, BASE_URL } from "./constants";
import { ErrorPage } from "./components/page-components/ErrorPage";

const axios = require("axios");

export const fetchSettingsData = () => {
  return axios
    .get(BASE_URL + API_PATHS.appSettings, {})
    .then(function (response) {
      console.log("Initial values : ", response);
      let configObj = {
        loginHeader: response.data.login?.loginHeader,
        subLoginHeader: response.data.login?.subLoginHeader,
        dashboardHeader: response.data.dashboard?.dashboardHeader,
      };
      console.log("VALUES", configObj);
      return configObj;
    })
    .catch(function (error) {
      console.log("ERROR FOUND", error);
      // return <ErrorPage />;
      // return <h1>Something went wrong.</h1>;
      let configObj = {
        loginHeader: "",
        subLoginHeader: "",
        dashboardHeader: "",
      };
      return configObj;
    });
};

export const doFetch = (userName, passWord) => {
  return axios
    .post(BASE_URL + API_PATHS.login, {
      userName: userName,
      passWord: passWord,
    })
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return <ErrorPage />;
    });
};
export const doFetchUserData = () => {
  return axios
    .get(BASE_URL + API_PATHS.dashboard)
    .then(function (response) {
      console.log("RESPONSE", response);
      console.log("EMAIL", response.email);

      let userObj = {
        email: response.data.email,
        name: response.data.name,
        origin: response.data.origin,
      };

      return userObj;
    })
    .catch((err) => {
      console.log(err);
      return <ErrorPage />;
    });
};
