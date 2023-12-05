// src/api/mirageServer.js

import { createServer, Model, Response } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model, // Definindo um modelo de usuário
    },

    routes() {
      this.namespace = 'api';

      this.post('/login', (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        const user = schema.users.findBy({ email });

        // Verifica se o usuário existe e se a senha está correta
        if (user && user.password === password) {
          return new Response(200, {}, { message: 'Login successful' });
        } else {
          return new Response(401, {}, { message: 'Invalid username or password' });
        }
      });

      // Outras rotas do Mirage, se necessário
    },

    seeds(server) {
      // Carrega dados iniciais para o banco de dados simulado
      server.create('user', { email: 'mateus_leonardo1997@hotmail.com', password: '123' });
      // Adicione mais usuários, se necessário
    },
  });

  return server;
}
