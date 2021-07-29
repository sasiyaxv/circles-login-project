import { constClass } from "./ConstClass";
import React,{useState} from 'react';
const axios = require('axios');


// export const fetchData = {
//     fetch(constClass.BASE_URL + `/user-service/login/${userName}/${passWord}`)
//     .then((response) => response.json())
//     .then(function setValues(response) {
// }


// export function fetchData(userName,passWord) {


// // Make a request for a user with a given ID
// axios.get(constClass.BASE_URL + `/user-service/login/${userName}/${passWord}`)
//   .then(function (response) {
//     // handle success
//     console.log(response);
    
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
        
// }

export const useFetch = (userName,passWord) => {
    const [result, setResult] = useState("");


    axios.get(constClass.BASE_URL + `/user-service/login/${userName}/${passWord}`)
  .then(function (response) {
    // handle success
    console.log(response);
    setResult(response.status);
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  
  
  
    return result;
  };