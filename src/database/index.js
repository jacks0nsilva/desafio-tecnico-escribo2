const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    `mongodb+srv://jacksonsilva:jackson142536@cluster0.7lh5wzg.mongodb.net/test?retryWrites=true&w=majority`
  );
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
