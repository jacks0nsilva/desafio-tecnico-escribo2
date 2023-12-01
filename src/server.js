const express = require("express");
const app = express();
const UserController = require("../src/controller/UserController");
const AuthenticationController = require("../src/controller/AuthenticationController");
const mongoose = require("../src/database/index");
const authenticateMiddleware = require("./middlewares/authenticate");

app.use(express.json());

app.use("/api", UserController);
app.use("/api", authenticateMiddleware, AuthenticationController);

app.listen(3001, () => {
  console.log("Server is running!");
});
