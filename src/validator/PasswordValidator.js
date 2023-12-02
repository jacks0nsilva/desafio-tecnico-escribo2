const bcryptjs = require("bcryptjs");

async function PasswordValidator(senha, user, res) {
  if (!(await bcryptjs.compare(senha, user.senha))) {
    return res.status(401).json({
      message: "Senha inválida",
    });
  }
}

module.exports = PasswordValidator;
