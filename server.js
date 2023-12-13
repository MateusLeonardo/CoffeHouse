import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      // Corrigindo para singular 'user' ao invés de 'users'
      user: Model,
    },

    seeds(server) {
      server.create('user', { email: 'mateus_leonardo1997@hotmail.com', password: '123' })
    },

    routes() {
      this.namespace = 'api';

      this.post('/user', (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        const user = schema.db.users.findBy({ email });

        if (!user || user.password !== password) {
          return { error: 'Credenciais inválidas' };
        }

        return { token: 'seu_token_de_autenticacao' };
      });

      this.post('/logout', () => {
        return { message: 'Usuário deslogado' };
      });
    },
  });

  return server;
}
