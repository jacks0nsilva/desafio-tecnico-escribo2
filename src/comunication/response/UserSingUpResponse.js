function SignUpResponse(body) {
  const { id, data_criacao, data_atualizacao, ultimo_login, token } = body;

  return {
    id,
    data_criacao,
    data_atualizacao,
    ultimo_login,
    token,
  };
}

module.exports = SignUpResponse;
