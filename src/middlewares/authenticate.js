const secret = require("../config/auth");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      mensagem: "Não autorizado",
    });
  }
  const token = authHeader.split(" ")[1];

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({
          mensagem: "Sessão inválida! Token expirado",
        });
      } else {
        return res.status(401).json({
          mensagem: "Token inválido",
        });
      }
    }
    req.user = decoded;
    next();
  });
};
