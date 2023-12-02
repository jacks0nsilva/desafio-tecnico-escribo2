# Desafio Escribo 2

O desafio consiste em criar uma API RESTful para autenticação de usuários que permita operações de cadastro (sign up), autenticação (sign in) e recuperação de informações do usuário.

## Requisitos

Persistência de dados. ✅

Sistema de build com gerenciamento de dependências. ✅

Padronização de estilo (ex: jsHint/jsLint) ✅

Framework: Express, Hapi, ou similar. ✅

## Requisitos desejáveis

JWT como token. ✅

Testes unitários. ✅

Criptografia hash na senha e token. ✅

## Documentação da API

### Cadastro

```
  POST /api/signup
```

| Método | Url                                                      | Descrição                    |
| :----- | :------------------------------------------------------- | :--------------------------- |
| `POST` | `https://desafio-tecnico-escribo2.vercel.app/api/signup` | Efetua o cadastro do usuário |

#### Corpo da requisição

    {
        "nome": "Jonas",
        "email": "jonas@gmail.com",
        "senha": "1234",
        "telefone": [
            {
                "numero": "987434565",
                "ddd": "75"
            }
        ]
    }

#### Respostas

- Status 201 Created

      {
        "id": "ID",
        "data_criacao": "2023-12-01T23:39:49.662Z",
        "data_atualizacao": "2023-12-01T23:39:49.662Z",
        "ultimo_login": "2023-12-01T23:39:49.662Z",
        "token": "Token/JWT"
      }

- Status 400 Bad Request

      {
          "mensagem": "E-mail já existente"
      }

### Login

```
  POST /api/signin
```

| Método | Url                                                      | Descrição                 |
| :----- | :------------------------------------------------------- | :------------------------ |
| `POST` | `https://desafio-tecnico-escribo2.vercel.app/api/signin` | Efetua o login do usuário |

#### Corpo da requisição

    {
        "email": "jonas@gmail.com",
        "senha": "1234"
    }

#### Respostas

- Status 200 OK

      {
        "id": "ID",
        "data_criacao": "2023-12-01T23:39:49.662Z",
        "data_atualizacao": "2023-12-01T23:39:49.662Z",
        "ultimo_login": "2023-12-01T23:39:49.662Z",
        "token": "Token/JWT"
      }

- Status 401 Unauthorized

      {
          "message": "Senha inválida"
      }

- Status 400 Bad Request

      {
        "message": "E-mail não cadastrado ou incorreto"
      }

### Login

```
  GET /api/user
```

| Método | Url                                                    | Descrição                        |
| :----- | :----------------------------------------------------- | :------------------------------- |
| `GET`  | `https://desafio-tecnico-escribo2.vercel.app/api/user` | Efetua a autenticação do usuário |

#### Corpo da requisição

- Header

      {
          "Authentication": "Bearer {token}"
      }

#### Respostas

- Status 200 OK

      {
        "id": "ID",
        "nome": "jonas",
        "data_criacao": "2023-12-01T23:39:49.662Z",
        "data_atualizacao": "2023-12-01T23:39:49.662Z",
        "ultimo_login": "2023-12-01T23:39:49.662Z"
      }

- Status 401 Unauthorized

      {
        "mensagem": "Token inválido"
      }

- Status 401 Unauthorized

      {
        "mensagem": "Não autorizado"
      }

- Status 401 Unauthorized

      {
        "mensagem": "Sessão inválida! Token expirado"
      }
