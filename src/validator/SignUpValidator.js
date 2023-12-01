const UserModel = require("../models/User");

async function SignUpValidator(email, res) {
  if (await UserModel.findOne({ email })) {
    return res.status(400).json({
      mensagem: "E-mail já existente",
    });
  }
}

module.exports = SignUpValidator;
