const express = require("express");
const app = express();
const UserController = require("../src/controller/UserController");
const mongoose = require("../src/database/index");

app.use(express.json());

app.use("/api", UserController);

app.listen(3001, () => {
  console.log("Server is running!");
});
