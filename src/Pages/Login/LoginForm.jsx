import { Link } from "react-router-dom";
import styles from "./LoginForm.module.scss";

export function LoginForm() {
  return (
    <div className={styles.container}>
      <h1 className={styles.login}>Login</h1>
      <form className={styles.form}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" />
        <button type="submit">Entrar</button>
      </form>

      <p>Perdeu a senha ?</p>

      <h1 className={styles.cadastro}>Cadastre-se</h1>
      <p>Ainda não possui conta ? Cadastre-se no site agora</p>
      <Link to="criar">Cadastro</Link>
    </div>
  );
}
