import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.scss";
import { useState } from "react";
import axios from "axios";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email: email,
        password: password
      })

      if(response.status === 200) {
        setError('')
        console.log('Login successful')
        navigate("/dashboard")
      } else {
        setError(response.data.message || 'Erro ao fazer login')
      }
    } catch (error) {
      setError('Erro ao fazer login')
     }
  };

  return (
    <div className={styles.container}>

      <h1 className={styles.login}>Login</h1>

      <form onSubmit={handleLogin} className={styles.form}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email"  value={email} onChange={({target}) => setEmail(target.value)}/>
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" value={password} onChange={({target}) => setPassword(target.value)}/>
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
