const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  data_criacao: {
    type: Date,
    default: Date.now,
  },
  data_atualizacao: {
    type: Date,
    default: Date.now,
  },
  ultimo_login: {
    type: Date,
    default: Date.now,
  },
  telefone: [
    {
      numero: {
        type: String,
        required: true,
      },
      ddd: {
        type: String,
        required: true,
      },
    },
  ],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
