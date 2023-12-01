function UserSignInResponse(body, token) {
  const { id, data_criacao, data_atualizacao, ultimo_login } = body;

  return {
    id,
    data_criacao,
    data_atualizacao,
    ultimo_login,
    token,
  };
}

module.exports = UserSignInResponse;
