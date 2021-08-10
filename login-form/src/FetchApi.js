import { constClass } from "./ConstClass";

const axios = require("axios");

export const doFetch = (userName, passWord) => {
  return axios
    .post(constClass.BASE_URL + "/user-service/login", {
      userName: userName,
      passWord: passWord,
    })
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const doFetchUserData = () => {
  return axios
    .get(constClass.BASE_URL + "/user-service/user-details")
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
    });
};
