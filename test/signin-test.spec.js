const request = require("supertest");

it("POST -  Signin", async () => {
  const userObject = {
    email: "joao@gmail.com",
    senha: "joao",
  };

  const response = await request(
    "https://desafio-tecnico-escribo2.vercel.app/api"
  )
    .post("/signin")
    .send(userObject);
  expect(response.status).toBe(200);
});
