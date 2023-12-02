const request = require("supertest");

it("POST -  Signup", async () => {
  const userObject = {
    nome: "josias",
    email: "josias@gmail.com",
    senha: "1234",
    telefone: [
      {
        numero: "987434565",
        ddd: "75",
      },
    ],
  };

  const response = await request(
    "https://desafio-tecnico-escribo2.vercel.app/api"
  )
    .post("/signup")
    .send(userObject);
  expect(response.status).toBe(201);
});
