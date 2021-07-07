const express = require("express");
const cors = require("cors");

const app = express();
// To fix cors origin error
app.use(cors());

app.get("/user-service/user-details", (req, res) => {
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
      message: `Hello ${username}`,
    });
  } else {
    res.json({
      message: "Oh no, Login is not working.",
    });
  }
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
