const express = require("express");
const bcryptjs = require("bcryptjs");
const UserModel = require("../models/User");
const UserResponse = require("../comunication/response/UserSingUpResponse");
const SignUpValidator = require("../validator/SignUpValidator");
const UserExistValidator = require("../validator/UserExistValidator");
const UserSignInResponse = require("../comunication/response/UserSingInResponse");
const TokenGenerator = require("../config/TokenGenerator");
const PasswordValidator = require("../validator/PasswordValidator");

const router = express.Router();

router.post("/signup", async (req, res) => {
  let { email, senha } = req.body;
  await SignUpValidator(email, res);
  const hash = await bcryptjs.hash(senha, 10);
  req.body.senha = hash;
  const user = await UserModel.create(req.body);
  const token = TokenGenerator(user);
  const data = UserResponse(user, token);
  return res.status(201).json(data);
});

router.post("/signin", async (req, res) => {
  const { email, senha } = req.body;
  const user = await UserModel.findOne({ email });
  await UserExistValidator(user, res);
  await PasswordValidator(senha, user, res);
  const token = TokenGenerator(user);
  user.ultimo_login = Date.now();
  await user.save();
  return res.json(UserSignInResponse(user, token));
});

module.exports = router;
