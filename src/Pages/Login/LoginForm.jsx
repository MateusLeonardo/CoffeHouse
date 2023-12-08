import { Link } from "react-router-dom";
import styles from "./LoginForm.module.scss";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../Components/AuthContext";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useAuth


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/user", {
        email,
        password,
      });
      console.log("Usuário autenticado:", response.data);
      if (response && response.data && response.data.token) {
        console.log("Usuário autenticado:", response);
        login();
      }
    } catch (error) {
      console.error("Erro no login:", error.response.data.error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.login}>Login</h1>

      <form onSubmit={handleLogin} className={styles.form}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          id="email"
          required
        />
        <label htmlFor="password">Senha</label>
        <input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          type="password"
          id="password"
          required
        />
        <button type="submit">Entrar</button>
      </form>

      <Link to="perdeu" className={styles.perdeu}>
        Perdeu a senha ?
      </Link>

      <h1 className={styles.cadastro}>Cadastre-se</h1>
      <p>Ainda não possui conta ? Cadastre-se no site agora</p>

      <Link to="criar" className={styles.linkCadastro}>
        Cadastro
      </Link>
    </div>
  );
}
