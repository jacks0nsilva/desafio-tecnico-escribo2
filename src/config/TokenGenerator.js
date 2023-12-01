const jwt = require("jsonwebtoken");
const authConfig = require("./auth");

function TokenGenerator(user) {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    authConfig,
    { expiresIn: 1800 }
  );
  return token;
}

module.exports = TokenGenerator;
