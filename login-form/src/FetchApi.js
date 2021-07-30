import { constClass } from "./ConstClass";

const axios = require("axios");

export const doFetch = (userName, passWord) => {
  return axios
    .get(constClass.BASE_URL + `/user-service/login/${userName}/${passWord}`)
    .then(function (response) {
      console.log(response);
      return response.data.status;
    })
    .catch((err) => {
      console.log(err);
    });
};
