import styles from './LoginPasswordLost.module.scss'

export function LoginPasswordLost() {
  return (
    <div className={styles.container}>
    <h1 className={styles.login}>Digite seu Email</h1>
    <form className={styles.form}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email"/>
      <button type="submit">Enviar</button>
    </form>
  </div>
  )
}