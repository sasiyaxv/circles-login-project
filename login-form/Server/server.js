const express = require("express");
const cors = require("cors");

const app = express();

// var bodyParser = require('body-parser')

// var urlEncodedParser =app.use(bodyParser.urlencoded({ extended: false }))

// To fix cors origin error
app.use(cors(), express.urlencoded({ extended: false }));

app.get("/user-service/user-details", async (req, res) => {
  await sleep(500);
  res.json({
    email: "admin@circles.asia",
    name: "Admin 1",
    origin: "Colombo",
  });
});

app.get("/user-service/login/:username/:password", (req, res) => {
  let username = req.params.username;
  let password = req.params.password;

  console.log(username);
  console.log(password);

  if (
    username.trim() === "admin@circles.asia" &&
    password.trim() === "circles111"
  ) {
    console.log("Hooray, It's working.");
    res.json({
      status: "success",
      message: `Hello ${username}`,
    });
  } else {
    res.json({
      status: "fail",
      message: "Oh no, Login is not working.",
    });
  }
});

// app.post("/withpost", urlencodedParser, function (req, res) {
//   console.log(req.body);
//   res.send("ok");
// });

app.post("/test", function (req, res) {
  console.log(req.body);

  const userName = req.body.userName;
  const passWord = req.body.passWord;

  console.log("userName : ", userName, "Password : ", passWord);
  if (
    userName.trim() === "admin@circles.asia" &&
    passWord.trim() === "circles111"
  ) {
    console.log("Hooray, It's working.");
    res.json({
      status: "success",
      message: `Hello ${userName}`,
    });
  } else {
    res.json({
      status: "fail",
      message: "Oh no, Login is not working.",
    });
  }
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
