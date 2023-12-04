import styles from './LoginCreate.module.scss'
export function LoginCreate() {
  return (
    <div className={styles.container}>
      <h1 className={styles.criarConta}>Crie sua conta</h1>
      <form className={styles.form}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name"/>
        <label htmlFor="email" >Email</label>
        <input type="email" id="email" placeholder="example@email.com"/>
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" />
        <button type="submit">Criar conta</button>
      </form>
    </div>
  )
}