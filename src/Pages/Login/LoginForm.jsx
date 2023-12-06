import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.scss";
import { useEffect, useState } from "react";

export function LoginForm() {

  return (
    <div className={styles.container}>
      <h1 className={styles.login}>Login</h1>

      <form className={styles.form}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
        />
        <label htmlFor="password">Senha</label>
        <input
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
