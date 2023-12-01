const express = require("express");
const bcryptjs = require("bcryptjs");
const UserModel = require("../models/User");
const UserResponse = require("../comunication/response/UserSingUpResponse");
const SignUpValidator = require("../validator/SignUpValidator");
const UserExistValidator = require("../validator/UserExistValidator");
const UserSignInResponse = require("../comunication/response/UserSingInResponse");
const TokenGenerator = require("../config/TokenGenerator");

const router = express.Router();

router.post("/sign-up", async (req, res) => {
  const { email } = req.body;
  await SignUpValidator(email, res);
  const user = await UserModel.create(req.body);
  const token = TokenGenerator(user);
  const data = UserResponse(user, token);
  return res.json(data);
});

router.post("/sign-in", async (req, res) => {
  const { email, senha } = req.body;
  const user = await UserModel.findOne({ email });
  await UserExistValidator(user, res);
  const token = TokenGenerator(user);
  if (!bcryptjs.compare(senha, user.senha)) {
    return res.status(401).json({
      message: "Senha inválida",
    });
  }
  user.ultimo_login = Date.now();
  await user.save();
  return res.json(UserSignInResponse(user, token));
});

module.exports = router;
