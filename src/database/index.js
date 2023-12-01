const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  const connection = mongoose.connection;

  connection.on("error", () => {
    console.error("Erro ao conectar ao MongoDb");
  });

  connection.on("open", () => {
    console.log("Conectado ao mongoDb com sucesso");
  });
};

connect();

module.exports = mongoose;
