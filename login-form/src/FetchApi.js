import { constClass } from "./ConstClass";

const axios = require("axios");

export const doFetch = (userName, passWord) => {
  return axios
    .get(constClass.BASE_URL + `/user-service/login/${userName}/${passWord}`)
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const doFetchUserData = () => {
  return axios
    .get(constClass.BASE_URL + "/user-service/user-details")
    .then(function (response) {
      console.log("EMAIL", response.email);

      let userObj = {
        email: response.email,
        name: response.name,
        origin: response.origin,
      };

      return userObj;
    })
    .catch((err) => {
      console.log(err);
    });
};
