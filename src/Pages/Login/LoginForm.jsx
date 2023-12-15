import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.scss";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../Components/AuthContext";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userFound, setUserFound] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3000/user?email=${email}&password=${password}`
      );
      if (response.data.length > 0) {
        const user = response.data[0];
        console.log("Usuário encontrado: " + user);
        navigate("/dashboard");
        login()
      } else {
        console.log("Usuário não encontrado");
        setUserFound(true);
      }
    } catch (error) {
      console.error("Erro no login:", error);
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
        {userFound && <p>Email ou Senha inválidos</p>}
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
