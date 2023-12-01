const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
const UserExistValidator = require("../validator/UserExistValidator");
const AuthenticateResponse = require("../comunication/response/AuthenticateResponse");

router.get("/user", async (req, res) => {
  const userInfo = req.user;
  const email = userInfo.email;
  const user = await UserModel.findOne({ email });
  await UserExistValidator(user, res);
  const data = AuthenticateResponse(user);
  return res.json(data);
});

module.exports = router;
