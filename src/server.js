const express = require("express");
const dotenv = require("dotenv");
const app = express();
const UserController = require("../src/controller/UserController");
const AuthenticationController = require("../src/controller/AuthenticationController");
const mongoose = require("../src/database/index");
const authenticateMiddleware = require("./middlewares/authenticate");

dotenv.config();
app.use(express.json());
const port = process.env.PORT || 3001;

app.use("/api", UserController);
app.use("/api", authenticateMiddleware, AuthenticationController);

app.listen(port, () => {
  console.log("Server is running!");
});
