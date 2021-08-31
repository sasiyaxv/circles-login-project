import { API_PATHS, BASE_URL } from "./constants";
import { ErrorPage } from "./components/page-components/ErrorPage";

const axios = require("axios");

export const fetchSettingsData = () => {
  return axios
    .get(BASE_URL + API_PATHS.APP_SETTINGS, {})
    .then(function (response) {
      return {
        loginHeader: response.data.login?.loginHeader,
        subLoginHeader: response.data.login?.subLoginHeader,
        dashboardHeader: response.data.dashboard?.dashboardHeader,
      };
    })
    .catch(function (error) {
      return {
        loginHeader: "",
        subLoginHeader: "",
        dashboardHeader: "",
      };
    });
};

export const doFetch = (userName, passWord) => {
  return axios
    .post(BASE_URL + API_PATHS.login, {
      userName: userName,
      passWord: passWord,
    })
    .then(function (response) {
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
      return {
        email: response.data.email,
        name: response.data.name,
        origin: response.data.origin,
      };
    })
    .catch((err) => {
      console.log(err);
      return <ErrorPage />;
    });
};
