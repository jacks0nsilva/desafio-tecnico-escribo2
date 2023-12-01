const express = require("express");
const UserModel = require("../models/User");
const UserResponse = require("../comunication/response/UserSingUpResponse");
const SignUpValidator = require("../validator/SignUpValidator");

const router = express.Router();

router.post("/sign-up", async (req, res) => {
  const { email } = req.body;
  await SignUpValidator(email, res);
  const User = await UserModel.create(req.body);
  const data = UserResponse(User);
  return res.json(data);
});

module.exports = router;
