import { useEffect, useState } from "react";
import styles from "./LoginCreate.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function LoginCreate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailExists, setEmailExists] = useState(false);
  const [userCreated, setUserCreated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const checkEmailExists = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/user?email=${email}`
        );
        setEmailExists(response.data.length > 0);
      } catch (error) {
        console.error("Erro ao verificar email:", error);
      }
    };

    if (email.length > 0 && email.includes("@") && email.includes(".com")) {
      checkEmailExists();
    }
  }, [email]);

  const handleCreateLogin = async (event) => {
    event.preventDefault();

    // Verificar se o email já existe antes de criar o usuário
    if (emailExists) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/user", {
        name,
        email,
        password,
      });
      console.log("User created:", response.data);
      setUserCreated(true) 
      setTimeout(() => {
        navigate("/login")
      },2000)
      // Exibe os dados do novo usuário criado
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.criarConta}>Crie sua conta</h1>
      <form onSubmit={handleCreateLogin} className={styles.form}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="example@email.com"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        {emailExists && <p>Email já está em uso.</p>}
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
        />
        {userCreated ? (<>
          <button type="submit" disabled>Usuário criado</button>
          <p>Usuário criado com sucesso</p>
        </>) : (<button type="submit" >Criar conta</button>)}
      </form>
    </div>
  );
}
