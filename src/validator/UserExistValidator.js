async function UserExistValidator(user, res) {
  if (!user) {
    return res.status(400).json({
      message: "E-mail não cadastrado ou incorreto",
    });
  }
}

module.exports = UserExistValidator;
