function AuthenticateResponse(body) {
  const { id, nome, data_criacao, data_atualizacao, ultimo_login } = body;

  return {
    id,
    nome,
    data_criacao,
    data_atualizacao,
    ultimo_login,
  };
}

module.exports = AuthenticateResponse;
