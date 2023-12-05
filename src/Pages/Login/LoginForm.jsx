import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        console.log("Login successful");
        navigate("/dashboard");
      } else {
        setError(true);
        console.log("Error login");
      }
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => setError(false), 3000);
    }
  }, [error]);

  return (
    <div className={styles.container}>
      <h1 className={styles.login}>Login</h1>

      <form onSubmit={handleLogin} className={styles.form}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
        />
        <button type="submit">Entrar</button>
        {error && <p>Usuário ou senha inválidos</p>}
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
