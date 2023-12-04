import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginCreate } from "./LoginCreate";
import { LoginForm } from "./LoginForm";
import styles from './Login.module.scss'

export function Login() {
  return (
    <section className={styles.login}>
      <div className={styles.form}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
        </Routes>
      </div>
    </section>
  );
}
